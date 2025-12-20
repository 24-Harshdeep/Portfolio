import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { FiGithub, FiGitCommit, FiStar, FiGitBranch } from 'react-icons/fi';
import { useStore } from '../store/useStore';

export default function GitHubStats({ username = '24-Harshdeep' }) {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const { darkMode } = useStore();

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const userResponse = await axios.get(`https://api.github.com/users/${username}`);
        const reposResponse = await axios.get(`https://api.github.com/users/${username}/repos?per_page=100`);
        
        const totalStars = reposResponse.data.reduce((acc, repo) => acc + repo.stargazers_count, 0);
        const totalForks = reposResponse.data.reduce((acc, repo) => acc + repo.forks_count, 0);
        
        setStats({
          repos: userResponse.data.public_repos,
          followers: userResponse.data.followers,
          following: userResponse.data.following,
          stars: totalStars,
          forks: totalForks,
        });
      } catch (error) {
        console.error('Error fetching GitHub stats:', error);
        setStats({
          repos: 15,
          followers: 50,
          following: 30,
          stars: 100,
          forks: 20,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [username]);

  if (loading) {
    return (
      <div className="github-stats loading">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  const statItems = [
    { label: 'Repositories', value: stats.repos, icon: FiGithub },
    { label: 'Total Stars', value: stats.stars, icon: FiStar },
    { label: 'Followers', value: stats.followers, icon: FiGitBranch },
    { label: 'Forks', value: stats.forks, icon: FiGitCommit },
  ];

  // Contribution graph URL with dark mode support
  const graphBgColor = darkMode ? '0D1117' : 'ffffff';
  const graphColor = darkMode ? '93C5FD' : '2563eb';
  const graphPoint = darkMode ? '60A5FA' : '2563eb';
  
  const graphUrl = `https://github-readme-activity-graph.vercel.app/graph?username=${username}&bg_color=${graphBgColor}&color=${graphColor}&line=2563eb&point=${graphPoint}&area=true&hide_border=true`;

  return (
    <>
      <motion.div
        className="github-stats"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="github-stats-header">
          <FiGithub size={24} />
          <h3>GitHub Activity</h3>
        </div>
        <div className="github-stats-grid">
          {statItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                className="github-stat-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                whileHover={{ y: -4, boxShadow: '0 8px 24px rgba(37,99,235,0.15)' }}
              >
                <Icon className="stat-icon" size={20} />
                <div className="stat-value">{item.value}</div>
                <div className="stat-label">{item.label}</div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      <section className="github-graph">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="gradient-text"
        >
          My GitHub Contribution Journey
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <picture>
            <source 
              media="(prefers-color-scheme: dark)" 
              srcSet="https://github-readme-activity-graph.vercel.app/graph?username=24-Harshdeep&bg_color=0D1117&color=93C5FD&line=2563eb&point=60A5FA&area=true&hide_border=true"
            />
            <img 
              src={graphUrl}
              alt="Harshdeep's GitHub Contribution Graph"
            />
          </picture>
        </motion.div>
      </section>
    </>
  );
}
