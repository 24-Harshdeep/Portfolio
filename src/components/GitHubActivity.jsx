import { useState } from "react";
import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";
import { useStore } from '../store/useStore';

export default function GitHubActivity({ username = '24-Harshdeep' }) {
  const [viewMode, setViewMode] = useState("graph");
  const { darkMode } = useStore();

  // Graph URL with dark mode support
  const graphBgColor = darkMode ? '0D1117' : 'ffffff';
  const graphColor = darkMode ? '93C5FD' : '2563eb';
  const graphPoint = darkMode ? '60A5FA' : '2563eb';
  
  const graphURL = `https://github-readme-activity-graph.vercel.app/graph?username=${username}&bg_color=${graphBgColor}&color=${graphColor}&line=2563eb&point=${graphPoint}&area=true&hide_border=true`;
  
  // Heatmap URL (ghchart style - classic green boxes)
  const heatmapURL = `https://ghchart.rshah.org/2563EB/${username}`;

  return (
    <section className="github-activity">
      <motion.div
        className="activity-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <FiGithub size={32} className="activity-icon" />
        <h2 className="gradient-text">GitHub Activity</h2>
        <p className="activity-subtitle">My contribution journey visualized</p>
      </motion.div>

      <motion.div
        className="activity-toggle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <button
          className={viewMode === "graph" ? "active" : ""}
          onClick={() => setViewMode("graph")}
        >
          <span className="toggle-icon">📈</span>
          Contribution Graph
        </button>
        <button
          className={viewMode === "heatmap" ? "active" : ""}
          onClick={() => setViewMode("heatmap")}
        >
          <span className="toggle-icon">🟩</span>
          Green Box History
        </button>
      </motion.div>

      <motion.div
        key={viewMode}
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -30, scale: 0.95 }}
        transition={{ duration: 0.6, type: "spring", damping: 20 }}
        className="activity-visual"
      >
        <img
          src={viewMode === "graph" ? graphURL : heatmapURL}
          alt={`GitHub ${viewMode === "graph" ? "Contribution Graph" : "Green Box History"}`}
          loading="lazy"
        />
      </motion.div>
    </section>
  );
}
