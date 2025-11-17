import React, { useState } from 'react'
import './TeamLibrary.css'

const TeamLibrary = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const teams = [
    {
      id: 1,
      name: 'Python Development Team',
      icon: '🐍',
      version: 'v1.0.0',
      status: 'coming-soon',
      description: 'Expert Python development with web scraping, data analysis, and automation',
      tags: ['Python', 'FastAPI', 'Data Science', 'Automation'],
      category: 'development'
    },
    {
      id: 2,
      name: 'Video Creation Team',
      icon: '🎬',
      version: 'v1.0.0',
      status: 'coming-soon',
      description: 'Video editing, processing, and content creation workflows',
      tags: ['Video', 'FFmpeg', 'Editing', 'Media'],
      category: 'content'
    },
    {
      id: 3,
      name: 'Research & Scraping Team',
      icon: '🔍',
      version: 'v1.0.0',
      status: 'coming-soon',
      description: 'Web research, data extraction, and analysis automation',
      tags: ['Research', 'Web Scraping', 'Data', 'Analysis'],
      category: 'research'
    }
  ]

  const categories = [
    { id: 'all', label: 'All Teams', icon: '📋' },
    { id: 'development', label: 'Development', icon: '💻' },
    { id: 'content', label: 'Content', icon: '🎨' },
    { id: 'research', label: 'Research', icon: '📊' }
  ]

  const filteredTeams = selectedCategory === 'all'
    ? teams
    : teams.filter(team => team.category === selectedCategory)

  return (
    <div className="team-library">
      <div className="library-sidebar">
        <div className="sidebar-header">Categories</div>
        {categories.map(category => (
          <div
            key={category.id}
            className={`sidebar-item ${selectedCategory === category.id ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category.id)}
          >
            <span className="sidebar-icon">{category.icon}</span>
            <span className="sidebar-label">{category.label}</span>
          </div>
        ))}
      </div>
      <div className="library-content">
        <div className="content-header">
          <h2 className="content-title">
            {categories.find(c => c.id === selectedCategory)?.label || 'All Teams'}
          </h2>
          <div className="content-stats">
            {filteredTeams.length} {filteredTeams.length === 1 ? 'team' : 'teams'}
          </div>
        </div>
        <div className="teams-grid">
          {filteredTeams.map(team => (
            <div key={team.id} className="team-card">
              <div className="team-card-header">
                <div className="team-icon">{team.icon}</div>
                <div className="team-info">
                  <div className="team-name">{team.name}</div>
                  <div className="team-version">{team.version}</div>
                </div>
              </div>
              <div className="team-description">{team.description}</div>
              <div className="team-tags">
                {team.tags.map(tag => (
                  <span key={tag} className="team-tag">{tag}</span>
                ))}
              </div>
              <div className="team-status">
                <span className={`badge ${team.status}`}>Coming Soon</span>
              </div>
              <div className="team-actions">
                <button disabled>Deploy</button>
                <button disabled>Configure</button>
              </div>
            </div>
          ))}
        </div>
        {filteredTeams.length === 0 && (
          <div className="empty-state">
            <div className="empty-icon">📭</div>
            <div className="empty-text">No teams in this category</div>
          </div>
        )}
      </div>
    </div>
  )
}

export default TeamLibrary
