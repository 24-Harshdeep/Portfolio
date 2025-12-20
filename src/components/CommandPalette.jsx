import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '../store/useStore';
import { useEffect, useState } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiFileText, FiCode, FiAward, FiUser, FiX } from 'react-icons/fi';

const commands = [
  { id: 'about', label: 'About Me', icon: FiUser, action: () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }) },
  { id: 'skills', label: 'Skills', icon: FiCode, action: () => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' }) },
  { id: 'projects', label: 'Projects', icon: FiFileText, action: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) },
  { id: 'certs', label: 'Certifications', icon: FiAward, action: () => document.getElementById('certifications')?.scrollIntoView({ behavior: 'smooth' }) },
  { id: 'contact', label: 'Contact', icon: FiMail, action: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) },
  { id: 'github', label: 'GitHub Profile', icon: FiGithub, action: () => window.open('https://github.com/24-Harshdeep', '_blank') },
  { id: 'linkedin', label: 'LinkedIn', icon: FiLinkedin, action: () => window.open('https://linkedin.com/in/harshdeep', '_blank') },
];

export default function CommandPalette() {
  const { commandPaletteOpen, setCommandPaletteOpen } = useStore();
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState(0);

  const filteredCommands = commands.filter(cmd =>
    cmd.label.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setCommandPaletteOpen(!commandPaletteOpen);
      }
      if (e.key === 'Escape') {
        setCommandPaletteOpen(false);
      }
      if (commandPaletteOpen) {
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          setSelected((s) => (s + 1) % filteredCommands.length);
        }
        if (e.key === 'ArrowUp') {
          e.preventDefault();
          setSelected((s) => (s - 1 + filteredCommands.length) % filteredCommands.length);
        }
        if (e.key === 'Enter' && filteredCommands[selected]) {
          e.preventDefault();
          filteredCommands[selected].action();
          setCommandPaletteOpen(false);
          setSearch('');
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [commandPaletteOpen, setCommandPaletteOpen, selected, filteredCommands]);

  useEffect(() => {
    if (!commandPaletteOpen) {
      setSearch('');
      setSelected(0);
    }
  }, [commandPaletteOpen]);

  return (
    <AnimatePresence>
      {commandPaletteOpen && (
        <>
          <motion.div
            className="command-palette-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setCommandPaletteOpen(false)}
          />
          <motion.div
            className="command-palette"
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            <div className="command-palette-header">
              <input
                type="text"
                placeholder="Type a command or search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                autoFocus
                className="command-palette-input"
              />
              <button
                onClick={() => setCommandPaletteOpen(false)}
                className="command-palette-close"
                aria-label="Close command palette"
              >
                <FiX size={18} />
              </button>
            </div>
            <div className="command-palette-list">
              {filteredCommands.map((cmd, idx) => {
                const Icon = cmd.icon;
                return (
                  <motion.button
                    key={cmd.id}
                    className={`command-palette-item ${idx === selected ? 'selected' : ''}`}
                    onClick={() => {
                      cmd.action();
                      setCommandPaletteOpen(false);
                      setSearch('');
                    }}
                    onMouseEnter={() => setSelected(idx)}
                    whileHover={{ x: 4 }}
                  >
                    <Icon size={18} />
                    <span>{cmd.label}</span>
                  </motion.button>
                );
              })}
              {filteredCommands.length === 0 && (
                <div className="command-palette-empty">No commands found</div>
              )}
            </div>
            <div className="command-palette-footer">
              <kbd>↑↓</kbd> Navigate <kbd>↵</kbd> Select <kbd>Esc</kbd> Close
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
