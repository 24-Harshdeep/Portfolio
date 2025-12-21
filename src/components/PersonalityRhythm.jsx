import { motion } from 'framer-motion';
import { FiCode, FiBookOpen, FiCoffee, FiZap, FiTrendingUp, FiHeart } from 'react-icons/fi';
import { useState, useEffect } from 'react';

const rhythms = [
  { icon: FiCode, label: 'Coding', color: '#2563EB', description: '60% daily' },
  { icon: FiBookOpen, label: 'Learning', color: '#7C3AED', description: 'Always evolving' },
  { icon: FiCoffee, label: 'Debugging', color: '#DC2626', description: 'Late nights' },
  { icon: FiZap, label: 'Building', color: '#F59E0B', description: 'Ship features' },
  { icon: FiTrendingUp, label: 'Growing', color: '#10B981', description: 'Every day' },
  { icon: FiHeart, label: 'Creating', color: '#EC4899', description: 'With passion' },
];

export default function PersonalityRhythm() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % rhythms.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="personality-rhythm"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="rhythm-title">My Developer Rhythm</h3>
      <p className="rhythm-subtitle">I code, I learn, I design. Here's my rhythm.</p>
      
      <div className="rhythm-grid">
        {rhythms.map((rhythm, idx) => {
          const Icon = rhythm.icon;
          const isActive = idx === activeIndex;
          
          return (
            <motion.div
              key={rhythm.label}
              className={`rhythm-card ${isActive ? 'active' : ''}`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              onClick={() => setActiveIndex(idx)}
              style={{
                borderColor: isActive ? rhythm.color : 'transparent',
              }}
            >
              <motion.div
                className="rhythm-icon"
                animate={{
                  scale: isActive ? [1, 1.2, 1] : 1,
                  rotate: isActive ? [0, 5, -5, 0] : 0,
                }}
                transition={{ duration: 0.5 }}
                style={{ color: rhythm.color }}
              >
                <Icon size={32} />
              </motion.div>
              <h4>{rhythm.label}</h4>
              <p>{rhythm.description}</p>
            </motion.div>
          );
        })}
      </div>
      
      <motion.div
        className="rhythm-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {rhythms.map((_, idx) => (
          <span
            key={idx}
            className={`indicator-dot ${idx === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(idx)}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}
