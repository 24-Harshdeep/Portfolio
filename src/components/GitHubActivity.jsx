import { motion } from 'framer-motion';
import { FiTrendingUp } from 'react-icons/fi';
import { useStore } from '../store/useStore';
import { useState } from 'react';

export default function GitHubActivity({ username = '24-Harshdeep' }) {
  const { darkMode } = useStore();
  const [statsError, setStatsError] = useState(false);
  const [langsError, setLangsError] = useState(false);
  const [graphError, setGraphError] = useState(false);
  const [streakError, setStreakError] = useState(false);
  const [viewMode, setViewMode] = useState('graph'); // 'graph' or 'heatmap'

  // fallback URLs
  const ghchartFallback = `https://ghchart.rshah.org/${darkMode ? '7aa2f7' : '2563EB'}/${username}`;
  const readmeStatsBase = (path) => `https://github-readme-stats.vercel.app/${path}`;

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
        <p className="activity-subtitle">My contribution journey and coding stats</p>

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
              src={!statsError ? `https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=${
                darkMode ? 'tokyonight' : 'default'
              }&hide_border=true&bg_color=${darkMode ? '1a1b26' : 'ffffff'}&title_color=${
                darkMode ? '7aa2f7' : '2563eb'
              }&icon_color=${darkMode ? '7dcfff' : '3b82f6'}&text_color=${
                darkMode ? 'a9b1d6' : '374151'
              }` : `${readmeStatsBase('api?username=' + username)}`}
              alt="GitHub Stats"
              loading="lazy"
              onError={() => setStatsError(true)}
            />
            {statsError && <small className="graph-error">Stats image failed to load — live numbers below.</small>}
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
              src={!langsError ? `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=${
                darkMode ? 'tokyonight' : 'default'
              }&hide_border=true&bg_color=${darkMode ? '1a1b26' : 'ffffff'}&title_color=${
                darkMode ? '7aa2f7' : '2563eb'
              }&text_color=${darkMode ? 'a9b1d6' : '374151'}` : `${readmeStatsBase('api/top-langs/?username=' + username + '&layout=compact')}`}
              alt="Top Languages"
              loading="lazy"
              onError={() => setLangsError(true)}
            />
            {langsError && <small className="graph-error">Languages image failed to load.</small>}
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
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <button className="btn" onClick={() => setViewMode(viewMode === 'graph' ? 'heatmap' : 'graph')}>
              {viewMode === 'graph' ? 'Show Heatmap' : 'Show Activity Graph'}
            </button>
          </div>
          <img
            src={!graphError && viewMode === 'graph' ? `https://github-readme-activity-graph.vercel.app/graph?username=${username}&bg_color=${
              darkMode ? '1a1b26' : 'ffffff'
            }&color=${darkMode ? 'a9b1d6' : '2563eb'}&line=${
              darkMode ? '7aa2f7' : '2563eb'
            }&point=${darkMode ? '7dcfff' : '1e40af'}&area=true&hide_border=true` : ghchartFallback}
            alt="GitHub Contribution Graph"
            loading="lazy"
            onError={() => setGraphError(true)}
            onClick={() => setViewMode(viewMode === 'graph' ? 'heatmap' : 'graph')}
          />
          {graphError && (
            <div className="graph-error-note">Contribution graph failed to load — showing heatmap fallback.</div>
          )}
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
            src={!streakError ? `https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=${
              darkMode ? 'tokyonight' : 'default'
            }&hide_border=true&background=${darkMode ? '1a1b26' : 'ffffff'}&stroke=${
              darkMode ? '7aa2f7' : '2563eb'
            }&ring=${darkMode ? '7dcfff' : '3b82f6'}&fire=${darkMode ? 'f7768e' : 'ef4444'}&currStreakLabel=${
              darkMode ? '7aa2f7' : '2563eb'
            }` : `https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true`}
            alt="GitHub Streak Stats"
            loading="lazy"
            onError={() => setStreakError(true)}
          />
          {streakError && <small className="graph-error">Streak image failed to load.</small>}
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
