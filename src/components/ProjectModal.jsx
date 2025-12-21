import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '../store/useStore';
import { FiX, FiGithub, FiExternalLink, FiCalendar, FiUsers, FiCode } from 'react-icons/fi';
import { useState } from 'react';

export default function ProjectModal() {
  const { selectedProject, setSelectedProject } = useStore();
  const [currentImage, setCurrentImage] = useState(0);

  if (!selectedProject) return null;

  const images = selectedProject.images || [selectedProject.image];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <AnimatePresence>
      {selectedProject && (
        <>
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          />
          <motion.div
            className="project-modal"
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            <button
              className="modal-close"
              onClick={() => setSelectedProject(null)}
              aria-label="Close modal"
            >
              <FiX size={24} />
            </button>

            <div className="modal-content">
              <div className="modal-image-carousel">
                <img src={images[currentImage]} alt={selectedProject.title} loading="lazy" />
                {images.length > 1 && (
                  <>
                    <button className="carousel-btn prev" onClick={prevImage}>
                      ‹
                    </button>
                    <button className="carousel-btn next" onClick={nextImage}>
                      ›
                    </button>
                    <div className="carousel-dots">
                      {images.map((_, idx) => (
                        <button
                          key={idx}
                          className={`dot ${idx === currentImage ? 'active' : ''}`}
                          onClick={() => setCurrentImage(idx)}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              <div className="modal-info">
                <h2>{selectedProject.title}</h2>
                <p className="modal-description">{selectedProject.fullDescription || selectedProject.desc}</p>

                <div className="modal-meta">
                  {selectedProject.timeline && (
                    <div className="meta-item">
                      <FiCalendar size={18} />
                      <span>{selectedProject.timeline}</span>
                    </div>
                  )}
                  {selectedProject.team && (
                    <div className="meta-item">
                      <FiUsers size={18} />
                      <span>{selectedProject.team}</span>
                    </div>
                  )}
                  {selectedProject.role && (
                    <div className="meta-item">
                      <FiCode size={18} />
                      <span>{selectedProject.role}</span>
                    </div>
                  )}
                </div>

                <div className="modal-tech">
                  <h3>Tech Stack</h3>
                  <div className="tech-tags">
                    {selectedProject.tech.map((t) => (
                      <span key={t} className="tech-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {selectedProject.features && (
                  <div className="modal-features">
                    <h3>Key Features</h3>
                    <ul>
                      {selectedProject.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedProject.challenges && (
                  <div className="modal-challenges">
                    <h3>Challenges & Solutions</h3>
                    <p>{selectedProject.challenges}</p>
                  </div>
                )}

                <div className="modal-actions">
                  {selectedProject.liveUrl && selectedProject.liveUrl !== '#' && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      <FiExternalLink size={18} />
                      Live Demo
                    </a>
                  )}
                  {selectedProject.githubUrl && selectedProject.githubUrl !== '#' && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary"
                    >
                      <FiGithub size={18} />
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
