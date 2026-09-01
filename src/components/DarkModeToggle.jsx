import { motion as Motion } from 'framer-motion';
import { useStore } from '../store/useStore';
import { FiSun, FiMoon } from 'react-icons/fi';

export default function DarkModeToggle() {
  const { darkMode, toggleDarkMode } = useStore();

  return (
    <Motion.button
      onClick={toggleDarkMode}
      className="dark-mode-toggle"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle dark mode"
    >
      <Motion.div
        initial={false}
        animate={{ rotate: darkMode ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
      </Motion.div>
    </Motion.button>
  );
}
