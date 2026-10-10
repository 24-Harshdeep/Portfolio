import { motion as Motion, AnimatePresence } from 'framer-motion';
import { useStore } from '../store/useStore';
import { FiSun, FiMoon } from 'react-icons/fi';

export default function DarkModeToggle() {
  const { darkMode, toggleDarkMode } = useStore();

  return (
    <Motion.button
      onClick={toggleDarkMode}
      className="dark-mode-toggle"
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <AnimatePresence mode="wait" initial={false}>
        <Motion.div
          key={darkMode ? 'dark' : 'light'}
          initial={{ opacity: 0, rotate: -90, scale: 0.7 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 90, scale: 0.7 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          {darkMode ? <FiSun size={19} /> : <FiMoon size={19} />}
        </Motion.div>
      </AnimatePresence>
    </Motion.button>
  );
}
