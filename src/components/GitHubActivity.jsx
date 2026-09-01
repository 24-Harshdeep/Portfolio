import { useState, useEffect, useMemo } from 'react';
import { FiGithub, FiGitCommit, FiStar, FiGitPullRequest, FiCode, FiExternalLink, FiActivity, FiCalendar } from 'react-icons/fi';
import { useStore } from '../store/useStore';
import fallbackContributions from '../data/githubContributions.json';
import fallbackProfile from '../data/githubProfile.json';

const MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export default function GitHubActivity({ username = '24-Harshdeep' }) {
  const { darkMode } = useStore();
  const [profile, setProfile] = useState(fallbackProfile);
  const [repos, setRepos] = useState([]);
  const [events, setEvents] = useState([]);
  const [daysData, setDaysData] = useState(fallbackContributions.days);
  const [totalContribs, setTotalContribs] = useState(fallbackContributions.totalContributions);
  const [mergedPRsCount, setMergedPRsCount] = useState(fallbackProfile.merged_prs);
  const [viewMode, setViewMode] = useState('ecg'); // 'ecg' | 'heatmap'
  const [timeRange, setTimeRange] = useState('30'); // '30' | '90' | '365'
  const [hoverIndex, setHoverIndex] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchGitHubData() {
      try {
        const [userRes, reposRes, eventsRes, prsRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`).catch(() => null),
          fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`).catch(() => null),
          fetch(`https://api.github.com/users/${username}/events/public?per_page=30`).catch(() => null),
          fetch(`https://api.github.com/search/issues?q=author:${username}+type:pr+is:merged`).catch(() => null),
        ]);

        const userData = userRes && userRes.ok ? await userRes.json() : null;
        const reposData = reposRes && reposRes.ok ? await reposRes.json() : [];
        const eventsData = eventsRes && eventsRes.ok ? await eventsRes.json() : [];
        const prsData = prsRes && prsRes.ok ? await prsRes.json() : null;

        try {
          const cRes = await fetch(`https://github-contributions.vercel.app/api/v1/${username}`);
          if (cRes.ok) {
            const cJson = await cRes.json();
            if (cJson && cJson.contributions && cJson.contributions.length > 0) {
              const sorted = [...cJson.contributions].sort((a, b) => new Date(a.date) - new Date(b.date));
              const pastYear = sorted.slice(-367);
              if (isMounted) {
                setDaysData(pastYear);
                const sum = pastYear.reduce((acc, curr) => acc + (curr.count || 0), 0);
                if (sum > 0) setTotalContribs(sum);
              }
            }
          }
        } catch {
          // Fall back gracefully to authoritative pre-fetched dataset
        }

        if (isMounted) {
          if (userData) setProfile({ ...fallbackProfile, ...userData });
          if (Array.isArray(reposData) && reposData.length > 0) setRepos(reposData);
          if (Array.isArray(eventsData) && eventsData.length > 0) setEvents(eventsData);
          if (prsData && typeof prsData.total_count === 'number') {
            setMergedPRsCount(prsData.total_count);
          }
        }
      } catch (err) {
        console.error('Error fetching GitHub data:', err);
      }
    }

    fetchGitHubData();
    return () => { isMounted = false; };
  }, [username]);

  const languageCounts = useMemo(() => {
    const counts = {};
    repos.forEach((repo) => {
      if (repo.language) {
        counts[repo.language] = (counts[repo.language] || 0) + 1;
      }
    });
    return counts;
  }, [repos]);

  const topLanguages = useMemo(() => {
    return Object.entries(languageCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5);
  }, [languageCounts]);

  const calculatedStars = useMemo(() => {
    return repos.reduce((sum, r) => sum + (r.stargazers_count || 0), 0);
  }, [repos]);

  const publicReposCount = profile?.public_repos || repos.length || 48;
  const displayStars = calculatedStars > 0 ? calculatedStars : 5;

  const filteredDaysData = useMemo(() => {
    if (!daysData || daysData.length === 0) return [];
    const limit = parseInt(timeRange, 10);
    return daysData.slice(-limit);
  }, [daysData, timeRange]);

  const weeks = useMemo(() => {
    const w = [];
    let currentWeek = [];
    daysData.forEach((day, index) => {
      currentWeek.push(day);
      if (currentWeek.length === 7 || index === daysData.length - 1) {
        w.push(currentWeek);
        currentWeek = [];
      }
    });
    return w;
  }, [daysData]);

  const monthLabels = useMemo(() => {
    const labels = [];
    let lastMonth = -1;
    let lastWeekIdx = -4;
    weeks.forEach((week, wIdx) => {
      if (week.length > 0 && week[0].date) {
        const parts = week[0].date.split('-');
        const m = parseInt(parts[1], 10) - 1;
        if (m !== lastMonth) {
          if (wIdx - lastWeekIdx >= 3) {
            labels.push({ month: MONTH_NAMES[m], weekIndex: wIdx });
            lastWeekIdx = wIdx;
          }
          lastMonth = m;
        }
      }
    });
    return labels;
  }, [weeks]);

  const waveformPoints = useMemo(() => {
    if (!filteredDaysData || filteredDaysData.length === 0) return { path: '', area: '', points: [] };

    const svgWidth = 940;
    const baselineY = 145;
    const paddingX = 30;
    const availableWidth = svgWidth - paddingX * 2;
    const N = filteredDaysData.length;

    const maxCount = Math.max(1, ...filteredDaysData.map(d => d.count || 0));

    const rawPoints = filteredDaysData.map((d, i) => {
      const x = paddingX + (i / (N - 1 || 1)) * availableWidth;
      const count = d.count || 0;
      let y = baselineY;
      if (count > 0) {
        const ratio = count / maxCount;
        y = baselineY - (ratio * 100 + 12);
      }
      return { x, y, date: d.date, count };
    });

    if (rawPoints.length === 1) {
      return {
        path: `M ${paddingX} ${baselineY} L ${svgWidth - paddingX} ${baselineY}`,
        area: `M ${paddingX} ${baselineY} L ${svgWidth - paddingX} ${baselineY} Z`,
        points: rawPoints
      };
    }

    let pathD = `M ${rawPoints[0].x.toFixed(1)} ${rawPoints[0].y.toFixed(1)}`;
    for (let i = 0; i < rawPoints.length - 1; i++) {
      const p0 = rawPoints[i];
      const p1 = rawPoints[i + 1];
      const cpX = (p0.x + p1.x) / 2;
      pathD += ` C ${cpX.toFixed(1)} ${p0.y.toFixed(1)}, ${cpX.toFixed(1)} ${p1.y.toFixed(1)}, ${p1.x.toFixed(1)} ${p1.y.toFixed(1)}`;
    }

    const lastP = rawPoints[rawPoints.length - 1];
    const firstP = rawPoints[0];
    const areaD = `${pathD} L ${lastP.x.toFixed(1)} ${baselineY} L ${firstP.x.toFixed(1)} ${baselineY} Z`;

    return { path: pathD, area: areaD, points: rawPoints };
  }, [filteredDaysData]);

  const getSquareColor = (day) => {
    const count = day.count || 0;
    const level = day.level !== undefined ? day.level : (count > 0 ? (count <= 2 ? 1 : count <= 5 ? 2 : count <= 10 ? 3 : 4) : 0);
    if (level === 0) return darkMode ? '#161b22' : '#ebedf0';
    if (level === 1) return darkMode ? '#1e3a8a' : '#bfdbfe';
    if (level === 2) return darkMode ? '#1d4ed8' : '#60a5fa';
    if (level === 3) return darkMode ? '#2563eb' : '#3b82f6';
    return darkMode ? '#38bdf8' : '#1d4ed8';
  };

  const activePoint = hoverIndex !== null && waveformPoints.points[hoverIndex] ? waveformPoints.points[hoverIndex] : null;

  return (
    <section className="github-activity">
      <div>
        <div className="header-icon-wrapper">
          <FiActivity className="activity-icon" />
        </div>
        <h2>GitHub Activity</h2>
        <p className="activity-subtitle">Real contribution timeline & statistics synced from GitHub</p>

        {/* Real Live Stats Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem', maxWidth: '1000px', margin: '0 auto 2.5rem' }}>
          <div className="stat-item">
            <FiGithub size={24} style={{ color: 'var(--blue-primary)', marginBottom: '0.5rem' }} />
            <h4 style={{ margin: 0, fontSize: '1.75rem' }}>{publicReposCount}</h4>
            <p style={{ margin: 0 }}>Public Repositories</p>
          </div>
          <div className="stat-item">
            <FiGitCommit size={24} style={{ color: 'var(--blue-primary)', marginBottom: '0.5rem' }} />
            <h4 style={{ margin: 0, fontSize: '1.75rem' }}>{totalContribs}</h4>
            <p style={{ margin: 0 }}>Contributions in Last Year</p>
          </div>
          <div className="stat-item">
            <FiStar size={24} style={{ color: 'var(--blue-primary)', marginBottom: '0.5rem' }} />
            <h4 style={{ margin: 0, fontSize: '1.75rem' }}>{displayStars}</h4>
            <p style={{ margin: 0 }}>Stars Earned</p>
          </div>
          <div className="stat-item">
            <FiGitPullRequest size={24} style={{ color: 'var(--blue-primary)', marginBottom: '0.5rem' }} />
            <h4 style={{ margin: 0, fontSize: '1.75rem' }}>{mergedPRsCount}</h4>
            <p style={{ margin: 0 }}>Merged Pull Requests</p>
          </div>
        </div>

        {/* Main Visualization Card */}
        <div
          className="activity-graph-full"
          style={{
            background: darkMode ? '#090d16' : '#ffffff',
            padding: '1.75rem',
            borderRadius: '16px',
            border: darkMode ? '1px solid #1e293b' : '1px solid var(--border-gray)',
            boxShadow: 'var(--shadow-sm)',
            maxWidth: '1000px',
            margin: '0 auto 2.5rem'
          }}
        >
          {/* Header Controls: View Switcher & Time Range Selector */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.85rem' }}>
            <div>
              <h3 style={{ margin: 0, fontSize: '1.25rem', color: darkMode ? '#f8fafc' : 'var(--text-primary)' }}>
                {totalContribs} contributions in the last year
              </h3>
              <span style={{ fontSize: '0.875rem', color: darkMode ? '#94a3b8' : 'var(--text-secondary)' }}>
                Real GitHub Activity • @{username}
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
              {/* Month-wise vs Year-wise Time Filter */}
              {viewMode === 'ecg' && (
                <div style={{ display: 'inline-flex', background: darkMode ? '#1e293b' : 'var(--bg-surface)', padding: '3px', borderRadius: '8px', border: darkMode ? '1px solid #334155' : '1px solid var(--border-gray)' }}>
                  <button
                    type="button"
                    onClick={() => setTimeRange('30')}
                    style={{
                      padding: '0.3rem 0.65rem',
                      borderRadius: '6px',
                      border: 'none',
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      background: timeRange === '30' ? '#2563eb' : 'transparent',
                      color: timeRange === '30' ? '#ffffff' : (darkMode ? '#94a3b8' : 'var(--text-secondary)'),
                      transition: 'all 0.2s ease',
                    }}
                  >
                    1 Month
                  </button>
                  <button
                    type="button"
                    onClick={() => setTimeRange('90')}
                    style={{
                      padding: '0.3rem 0.65rem',
                      borderRadius: '6px',
                      border: 'none',
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      background: timeRange === '90' ? '#2563eb' : 'transparent',
                      color: timeRange === '90' ? '#ffffff' : (darkMode ? '#94a3b8' : 'var(--text-secondary)'),
                      transition: 'all 0.2s ease',
                    }}
                  >
                    3 Months
                  </button>
                  <button
                    type="button"
                    onClick={() => setTimeRange('365')}
                    style={{
                      padding: '0.3rem 0.65rem',
                      borderRadius: '6px',
                      border: 'none',
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      background: timeRange === '365' ? '#2563eb' : 'transparent',
                      color: timeRange === '365' ? '#ffffff' : (darkMode ? '#94a3b8' : 'var(--text-secondary)'),
                      transition: 'all 0.2s ease',
                    }}
                  >
                    1 Year
                  </button>
                </div>
              )}

              {/* View Switcher Buttons */}
              <div style={{ display: 'inline-flex', background: darkMode ? '#1e293b' : 'var(--bg-surface)', padding: '3px', borderRadius: '8px', border: darkMode ? '1px solid #334155' : '1px solid var(--border-gray)' }}>
                <button
                  type="button"
                  onClick={() => setViewMode('ecg')}
                  style={{
                    padding: '0.35rem 0.75rem',
                    borderRadius: '6px',
                    border: 'none',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    background: viewMode === 'ecg' ? '#2563eb' : 'transparent',
                    color: viewMode === 'ecg' ? '#ffffff' : (darkMode ? '#94a3b8' : 'var(--text-secondary)'),
                    transition: 'all 0.2s ease',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem'
                  }}
                >
                  <FiActivity size={14} /> Waveform
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('heatmap')}
                  style={{
                    padding: '0.35rem 0.75rem',
                    borderRadius: '6px',
                    border: 'none',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    background: viewMode === 'heatmap' ? '#2563eb' : 'transparent',
                    color: viewMode === 'heatmap' ? '#ffffff' : (darkMode ? '#94a3b8' : 'var(--text-secondary)'),
                    transition: 'all 0.2s ease',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem'
                  }}
                >
                  <FiCalendar size={14} /> Heatmap
                </button>
              </div>

              <a
                href={`https://github.com/${username}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  padding: '0.35rem 0.65rem',
                  borderRadius: '8px',
                  border: darkMode ? '1px solid #3b82f6' : '1px solid var(--blue-primary)',
                  background: 'transparent',
                  color: darkMode ? '#60a5fa' : 'var(--blue-primary)',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
              >
                <FiGithub size={13} /> Profile <FiExternalLink size={12} />
              </a>
            </div>
          </div>

          {viewMode === 'ecg' && (
            <div style={{ position: 'relative', width: '100%', overflowX: 'auto' }}>
              <div
                style={{ minWidth: '650px', position: 'relative' }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const relX = e.clientX - rect.left;
                  const pct = Math.max(0, Math.min(1, (relX - 30) / (rect.width - 60)));
                  const idx = Math.round(pct * (filteredDaysData.length - 1));
                  setHoverIndex(idx);
                }}
                onMouseLeave={() => setHoverIndex(null)}
              >
                <svg
                  viewBox="0 0 940 180"
                  style={{ width: '100%', height: 'auto', display: 'block', background: darkMode ? '#050811' : '#0f172a', borderRadius: '12px' }}
                >
                  <defs>
                    <linearGradient id="blueAreaGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#38bdf8" stopOpacity={0.35} />
                      <stop offset="100%" stopColor="#2563eb" stopOpacity={0.0} />
                    </linearGradient>
                    <filter id="blueGlowFilter" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="3" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                    <pattern id="blueGridPattern" width="40" height="25" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 25" fill="none" stroke={darkMode ? '#1e293b' : '#1e293b'} strokeWidth="0.5" opacity="0.4" />
                    </pattern>
                  </defs>

                  <rect width="940" height="180" fill="url(#blueGridPattern)" />
                  <line x1="30" y1="145" x2="910" y2="145" stroke="#334155" strokeWidth="1" strokeDasharray="4 4" />

                  {waveformPoints.area && (
                    <path d={waveformPoints.area} fill="url(#blueAreaGradient)" />
                  )}

                  {waveformPoints.path && (
                    <path
                      d={waveformPoints.path}
                      fill="none"
                      stroke="#38bdf8"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      filter="url(#blueGlowFilter)"
                    />
                  )}

                  {activePoint && (
                    <g>
                      <line
                        x1={activePoint.x}
                        y1="10"
                        x2={activePoint.x}
                        y2="165"
                        stroke="#38bdf8"
                        strokeWidth="1"
                        strokeDasharray="2 2"
                        opacity="0.8"
                      />
                      <circle
                        cx={activePoint.x}
                        cy={activePoint.y}
                        r="5"
                        fill="#38bdf8"
                        stroke="#ffffff"
                        strokeWidth="2"
                        filter="url(#blueGlowFilter)"
                      />
                    </g>
                  )}
                </svg>

                {activePoint && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: `${Math.min(85, Math.max(15, (activePoint.x / 940) * 100))}%`,
                      transform: 'translateX(-50%)',
                      background: 'rgba(15, 23, 42, 0.95)',
                      border: '1px solid #38bdf8',
                      borderRadius: '8px',
                      padding: '0.4rem 0.85rem',
                      color: '#ffffff',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      boxShadow: '0 4px 14px rgba(56, 189, 248, 0.35)',
                      pointerEvents: 'none',
                      whiteSpace: 'nowrap',
                      zIndex: 10
                    }}
                  >
                    <span style={{ color: '#38bdf8', display: 'block', fontSize: '0.75rem' }}>{activePoint.date}</span>
                    <span>{activePoint.count} contribution{activePoint.count === 1 ? '' : 's'}</span>
                  </div>
                )}
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.75rem', fontSize: '0.75rem', color: darkMode ? '#94a3b8' : 'var(--text-secondary)' }}>
                <span>Viewing {timeRange === '30' ? 'Past Month (30 Days)' : timeRange === '90' ? 'Past 3 Months (90 Days)' : 'Full Year (365 Days)'}</span>
                <span>Theme Color: Electric Blue | Baseline = 0 contributions</span>
              </div>
            </div>
          )}

          {viewMode === 'heatmap' && (
            <div style={{ overflowX: 'auto', paddingBottom: '0.5rem' }}>
              <div style={{ display: 'flex', gap: '12px', minWidth: '760px', justifyContent: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingTop: '22px', fontSize: '0.7rem', color: darkMode ? '#94a3b8' : 'var(--text-secondary)', fontWeight: 600 }}>
                  <span>Mon</span>
                  <span>Wed</span>
                  <span>Fri</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', position: 'relative', height: '20px', marginBottom: '4px', fontSize: '0.75rem', color: darkMode ? '#94a3b8' : 'var(--text-secondary)', fontWeight: 600 }}>
                    {monthLabels.map((lbl, i) => (
                      <span
                        key={i}
                        style={{
                          position: 'absolute',
                          left: `${lbl.weekIndex * 14}px`,
                        }}
                      >
                        {lbl.month}
                      </span>
                    ))}
                  </div>

                  <div style={{ display: 'flex', gap: '3px' }}>
                    {weeks.map((week, wIdx) => (
                      <div key={wIdx} style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                        {week.map((day) => (
                          <div
                            key={day.date}
                            title={`${day.count > 0 ? day.count : 'No'} contribution${day.count === 1 ? '' : 's'} on ${day.date}`}
                            style={{
                              width: '11px',
                              height: '11px',
                              borderRadius: '2px',
                              backgroundColor: getSquareColor(day),
                              transition: 'transform 0.15s ease',
                              cursor: 'pointer'
                            }}
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '4px', marginTop: '1.25rem', fontSize: '0.75rem', color: darkMode ? '#94a3b8' : 'var(--text-secondary)' }}>
                <span>Less</span>
                <span style={{ width: '10px', height: '10px', borderRadius: '2px', backgroundColor: darkMode ? '#161b22' : '#ebedf0' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '2px', backgroundColor: darkMode ? '#1e3a8a' : '#bfdbfe' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '2px', backgroundColor: darkMode ? '#1d4ed8' : '#60a5fa' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '2px', backgroundColor: darkMode ? '#2563eb' : '#3b82f6' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '2px', backgroundColor: darkMode ? '#38bdf8' : '#1d4ed8' }} />
                <span>More</span>
              </div>
            </div>
          )}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem', maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ background: darkMode ? '#090d16' : 'var(--white)', padding: '1.5rem', borderRadius: '16px', border: darkMode ? '1px solid #1e293b' : '1px solid var(--border-gray)', boxShadow: 'var(--shadow-sm)' }}>
            <h3 style={{ margin: '0 0 1rem', fontSize: '1.15rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: darkMode ? '#f8fafc' : 'var(--text-primary)' }}>
              <FiGitCommit style={{ color: 'var(--blue-primary)' }} /> Recent Public Events
            </h3>
            {events.length === 0 ? (
              <p style={{ color: darkMode ? '#94a3b8' : 'var(--text-secondary)', fontSize: '0.9rem' }}>No recent public activity stream available.</p>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {events.slice(0, 5).map((evt, idx) => (
                  <div key={idx} style={{ padding: '0.75rem', borderRadius: '8px', background: darkMode ? '#1e293b' : 'var(--bg-surface)', border: darkMode ? '1px solid #334155' : '1px solid var(--border-gray)', fontSize: '0.875rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 600, color: darkMode ? '#f8fafc' : 'var(--text-primary)' }}>
                      <span>{evt.type?.replace('Event', '')}</span>
                      <span style={{ color: darkMode ? '#94a3b8' : 'var(--text-secondary)', fontSize: '0.75rem' }}>
                        {new Date(evt.created_at).toLocaleDateString()}
                      </span>
                    </div>
                    <a
                      href={`https://github.com/${evt.repo?.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: 'var(--blue-primary)', textDecoration: 'none', fontWeight: 500, display: 'inline-block', marginTop: '0.25rem' }}
                    >
                      {evt.repo?.name}
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div style={{ background: darkMode ? '#090d16' : 'var(--white)', padding: '1.5rem', borderRadius: '16px', border: darkMode ? '1px solid #1e293b' : '1px solid var(--border-gray)', boxShadow: 'var(--shadow-sm)' }}>
            <h3 style={{ margin: '0 0 1rem', fontSize: '1.15rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: darkMode ? '#f8fafc' : 'var(--text-primary)' }}>
              <FiCode style={{ color: 'var(--blue-primary)' }} /> Repository Languages
            </h3>
            {topLanguages.length === 0 ? (
              <p style={{ color: darkMode ? '#94a3b8' : 'var(--text-secondary)', fontSize: '0.9rem' }}>Analyzing repositories...</p>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {topLanguages.map(([lang, count]) => {
                  const percent = Math.round((count / (repos.length || 1)) * 100);
                  return (
                    <div key={lang}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', marginBottom: '0.25rem', fontWeight: 600, color: darkMode ? '#f8fafc' : 'var(--text-primary)' }}>
                        <span>{lang}</span>
                        <span style={{ color: darkMode ? '#94a3b8' : 'var(--text-secondary)' }}>{count} repos ({percent}%)</span>
                      </div>
                      <div style={{ height: '8px', borderRadius: '4px', background: darkMode ? '#1e293b' : 'var(--border-gray)', overflow: 'hidden' }}>
                        <div style={{ width: `${Math.min(percent * 2.5, 100)}%`, height: '100%', background: 'linear-gradient(90deg, var(--blue-primary), var(--blue-indigo))', borderRadius: '4px' }} />
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
