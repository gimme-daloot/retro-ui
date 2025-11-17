import React, { useState } from 'react'
import './StartMenu.css'

const StartMenu = ({ isOpen, onClose, onItemClick }) => {
  const [expandedSections, setExpandedSections] = useState({})

  if (!isOpen) return null

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  const handleItemClick = (itemId) => {
    onItemClick(itemId)
    onClose()
  }

  const menuItems = [
    {
      id: 'teams',
      label: 'Teams',
      icon: '👥',
      hasSubmenu: true,
      submenu: [
        { id: 'team-library', label: 'Team Library', icon: '📚' },
        { id: 'deploy-team', label: 'Deploy Team', icon: '🚀', disabled: true }
      ]
    },
    {
      id: 'tools',
      label: 'Tools',
      icon: '🔧',
      hasSubmenu: true,
      submenu: [
        { id: 'terminal', label: 'Terminal', icon: '💻' },
        { id: 'monitor', label: 'System Monitor', icon: '📊' },
        { id: 'vault', label: 'Credential Vault', icon: '🔐' }
      ]
    },
    { id: 'settings', label: 'Settings', icon: '⚙️', disabled: true },
    { id: 'help', label: 'Help', icon: '❓', disabled: true },
    { id: 'divider' },
    { id: 'about', label: 'About Factory', icon: 'ℹ️', disabled: true }
  ]

  return (
    <>
      <div className="start-menu-overlay" onClick={onClose} />
      <div className="start-menu menu-enter">
        <div className="start-menu-header">
          <div className="start-menu-logo">🏭</div>
          <div className="start-menu-title">The Factory</div>
        </div>
        <div className="start-menu-items">
          {menuItems.map((item) => {
            if (item.id === 'divider') {
              return <div key="divider" className="start-menu-divider" />
            }

            if (item.hasSubmenu) {
              return (
                <div key={item.id} className="start-menu-section">
                  <div
                    className="start-menu-item"
                    onClick={() => toggleSection(item.id)}
                  >
                    <span className="menu-icon">{item.icon}</span>
                    <span className="menu-label">{item.label}</span>
                    <span className="menu-arrow">
                      {expandedSections[item.id] ? '▼' : '▶'}
                    </span>
                  </div>
                  {expandedSections[item.id] && (
                    <div className="start-menu-submenu">
                      {item.submenu.map((subitem) => (
                        <div
                          key={subitem.id}
                          className={`start-menu-item submenu-item ${
                            subitem.disabled ? 'disabled' : ''
                          }`}
                          onClick={() => !subitem.disabled && handleItemClick(subitem.id)}
                        >
                          <span className="menu-icon">{subitem.icon}</span>
                          <span className="menu-label">{subitem.label}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )
            }

            return (
              <div
                key={item.id}
                className={`start-menu-item ${item.disabled ? 'disabled' : ''}`}
                onClick={() => !item.disabled && handleItemClick(item.id)}
              >
                <span className="menu-icon">{item.icon}</span>
                <span className="menu-label">{item.label}</span>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default StartMenu
