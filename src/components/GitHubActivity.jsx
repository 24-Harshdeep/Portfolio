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
  const [viewMode, setViewMode] = useState('heatmap'); // 'graph' or 'heatmap' - default to heatmap since graph has 500 errors

  // Use reliable ghchart as primary, with alternative backup
  const heatmapUrl = `https://ghchart.rshah.org/${darkMode ? '7aa2f7' : '2563EB'}/${username}`;
  const activityGraphUrl = `https://github-readme-activity-graph.vercel.app/graph?username=${username}&bg_color=${
    darkMode ? '1a1b26' : 'ffffff'
  }&color=${darkMode ? 'a9b1d6' : '2563eb'}&line=${
    darkMode ? '7aa2f7' : '2563eb'
  }&point=${darkMode ? '7dcfff' : '1e40af'}&area=true&hide_border=true`;

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

        {/* Contribution Activity Graph with Toggle */}
        <motion.div
          className="activity-graph-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <h3 style={{ margin: 0, fontSize: '1.25rem' }}>Contribution History</h3>
            <button 
              className="btn btn-sm" 
              onClick={() => setViewMode(viewMode === 'graph' ? 'heatmap' : 'graph')}
              style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}
            >
              {viewMode === 'graph' ? '📊 Show Heatmap' : '📈 Show Activity Graph'}
            </button>
          </div>
          <div style={{ cursor: 'pointer' }} onClick={() => setViewMode(viewMode === 'graph' ? 'heatmap' : 'graph')}>
            <img
              src={viewMode === 'graph' ? activityGraphUrl : heatmapUrl}
              alt={viewMode === 'graph' ? 'GitHub Activity Graph' : 'GitHub Contribution Heatmap'}
              loading="lazy"
              onError={(e) => {
                console.warn('Graph load failed, switching to heatmap');
                setViewMode('heatmap');
                if (viewMode === 'heatmap') {
                  e.target.style.display = 'none';
                }
              }}
              style={{ width: '100%', borderRadius: '8px' }}
            />
          </div>
          <p style={{ textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.875rem', marginTop: '0.5rem' }}>
            Click image or button to toggle view
          </p>
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
