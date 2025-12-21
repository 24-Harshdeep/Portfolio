import { motion } from 'framer-motion';
import { FiTrendingUp } from 'react-icons/fi';
import { useStore } from '../store/useStore';

export default function GitHubActivity() {
  const { darkMode } = useStore();
  const username = '24-Harshdeep';

  return (
    <section className="github-activity">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="header-icon-wrapper">
          <FiTrendingUp className="activity-icon" />
        </div>
        <h2>GitHub Activity</h2>
        <p className="activity-subtitle">
          My contribution journey and coding stats
        </p>

        <div className="github-graphs-grid">
          {/* GitHub Stats Card */}
          <motion.div
            className="graph-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=${
                darkMode ? 'tokyonight' : 'default'
              }&hide_border=true&bg_color=${darkMode ? '1a1b26' : 'ffffff'}&title_color=${
                darkMode ? '7aa2f7' : '2563eb'
              }&icon_color=${darkMode ? '7dcfff' : '3b82f6'}&text_color=${
                darkMode ? 'a9b1d6' : '374151'
              }`}
              alt="GitHub Stats"
              loading="lazy"
            />
          </motion.div>

          {/* Top Languages Card */}
          <motion.div
            className="graph-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=${
                darkMode ? 'tokyonight' : 'default'
              }&hide_border=true&bg_color=${darkMode ? '1a1b26' : 'ffffff'}&title_color=${
                darkMode ? '7aa2f7' : '2563eb'
              }&text_color=${darkMode ? 'a9b1d6' : '374151'}`}
              alt="Top Languages"
              loading="lazy"
            />
          </motion.div>
        </div>

        {/* Contribution Activity Graph */}
        <motion.div
          className="activity-graph-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <img
            src={`https://github-readme-activity-graph.vercel.app/graph?username=${username}&bg_color=${
              darkMode ? '1a1b26' : 'ffffff'
            }&color=${darkMode ? 'a9b1d6' : '2563eb'}&line=${
              darkMode ? '7aa2f7' : '2563eb'
            }&point=${darkMode ? '7dcfff' : '1e40af'}&area=true&hide_border=true`}
            alt="GitHub Contribution Graph"
            loading="lazy"
          />
        </motion.div>

        {/* Streak Stats */}
        <motion.div
          className="streak-stats"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <img
            src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=${
              darkMode ? 'tokyonight' : 'default'
            }&hide_border=true&background=${darkMode ? '1a1b26' : 'ffffff'}&stroke=${
              darkMode ? '7aa2f7' : '2563eb'
            }&ring=${darkMode ? '7dcfff' : '3b82f6'}&fire=${darkMode ? 'f7768e' : 'ef4444'}&currStreakLabel=${
              darkMode ? '7aa2f7' : '2563eb'
            }`}
            alt="GitHub Streak Stats"
            loading="lazy"
          />
        </motion.div>

        <div className="activity-stats">
          <div className="stat-item">
            <h4>Consistency</h4>
            <p>Regular contributions across projects</p>
          </div>
          <div className="stat-item">
            <h4>Focus</h4>
            <p>Deep work on core technologies</p>
          </div>
          <div className="stat-item">
            <h4>Growth</h4>
            <p>Continuous learning & improvement</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

  // Graph URL with dark mode support
  const graphBgColor = darkMode ? '0D1117' : 'ffffff';
  const graphColor = darkMode ? '93C5FD' : '2563eb';
  const graphPoint = darkMode ? '60A5FA' : '2563eb';
  
  const graphURL = `https://github-readme-activity-graph.vercel.app/graph?username=${username}&bg_color=${graphBgColor}&color=${graphColor}&line=2563eb&point=${graphPoint}&area=true&hide_border=true`;
  
  // Heatmap URL (ghchart style - classic green boxes)
  const heatmapURL = `https://ghchart.rshah.org/2563EB/${username}`;

  return (
    <section className="github-activity" id="github-activity">
      <div className="container">
        <motion.div
          className="activity-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="header-icon-wrapper">
            <FiGithub size={40} className="activity-icon" />
          </div>
          <h2 className="gradient-text">GitHub Contribution Journey</h2>
          <p className="activity-subtitle">
            My coding journey visualized · {viewMode === 'graph' ? 'Activity Timeline' : 'Contribution Heatmap'}
          </p>
        </motion.div>

        <motion.div
          className="activity-toggle"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          <motion.button
            className={viewMode === "graph" ? "active" : ""}
            onClick={() => setViewMode("graph")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiTrendingUp size={20} />
            <span>Contribution Graph</span>
          </motion.button>
          <motion.button
            className={viewMode === "heatmap" ? "active" : ""}
            onClick={() => setViewMode("heatmap")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiGrid size={20} />
            <span>Green Box History</span>
          </motion.button>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={viewMode}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -40, scale: 0.95 }}
            transition={{ 
              duration: 0.5, 
              type: "spring", 
              stiffness: 100,
              damping: 20
            }}
            className="activity-visual"
          >
            <div className="visual-wrapper">
              <img
                src={viewMode === "graph" ? graphURL : heatmapURL}
                alt={`GitHub ${viewMode === "graph" ? "Contribution Graph" : "Green Box History"}`}
                loading="lazy"
              />
              <div className="visual-overlay">
                <span className="view-label">
                  {viewMode === "graph" ? "📈 Activity Over Time" : "🟩 Daily Contributions"}
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <motion.div 
          className="activity-stats"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="stat-item">
            <span className="stat-label">Consistency</span>
            <span className="stat-value">Daily commits</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Focus</span>
            <span className="stat-value">Full-stack development</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Growth</span>
            <span className="stat-value">Continuous learning</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
