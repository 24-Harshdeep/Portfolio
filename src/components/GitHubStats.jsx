import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { FiGithub, FiGitCommit, FiStar, FiGitBranch } from 'react-icons/fi';

export default function GitHubStats({ username = '24-Harshdeep' }) {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

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

  return (
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
  );
}
