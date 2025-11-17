import React, { useState, useEffect } from 'react'
import './Monitor.css'

const Monitor = () => {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const metrics = [
    { label: 'API Calls Today', value: '0', icon: '📡', color: 'cyan' },
    { label: 'Active Teams', value: '0', icon: '👥', color: 'blue' },
    { label: 'Total Cost', value: '$0.00', icon: '💰', color: 'green' },
    { label: 'Success Rate', value: '100%', icon: '✅', color: 'purple' }
  ]

  const services = [
    { name: 'PostgreSQL', status: 'pending', port: '5432', uptime: '-' },
    { name: 'FastAPI', status: 'pending', port: '8000', uptime: '-' },
    { name: 'n8n', status: 'pending', port: '5678', uptime: '-' },
    { name: 'Langfuse', status: 'pending', port: '3000', uptime: '-' },
    { name: 'Claude API', status: 'pending', port: '-', uptime: '-' }
  ]

  const activityLog = [
    { time: currentTime.toLocaleTimeString(), event: 'System initialized', type: 'info' },
    { time: currentTime.toLocaleTimeString(), event: 'Waiting for backend connection...', type: 'warning' },
    { time: currentTime.toLocaleTimeString(), event: 'UI ready for configuration', type: 'success' }
  ]

  const getStatusBadge = (status) => {
    const badges = {
      online: { text: 'Online', class: 'success' },
      offline: { text: 'Offline', class: 'error' },
      pending: { text: 'Pending', class: 'warning' }
    }
    return badges[status] || badges.pending
  }

  return (
    <div className="monitor-app">
      <div className="metrics-grid">
        {metrics.map((metric, index) => (
          <div key={index} className={`metric-card metric-${metric.color}`}>
            <div className="metric-icon">{metric.icon}</div>
            <div className="metric-info">
              <div className="metric-label">{metric.label}</div>
              <div className="metric-value">{metric.value}</div>
            </div>
          </div>
        ))}
      </div>

      <fieldset className="monitor-section">
        <legend>Service Status</legend>
        <table>
          <thead>
            <tr>
              <th>Service</th>
              <th>Status</th>
              <th>Port</th>
              <th>Uptime</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service, index) => {
              const badge = getStatusBadge(service.status)
              return (
                <tr key={index}>
                  <td>{service.name}</td>
                  <td>
                    <span className={`badge ${badge.class}`}>{badge.text}</span>
                  </td>
                  <td>{service.port}</td>
                  <td>{service.uptime}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </fieldset>

      <fieldset className="monitor-section">
        <legend>Activity Log</legend>
        <div className="activity-log">
          {activityLog.map((log, index) => (
            <div key={index} className={`log-entry log-${log.type}`}>
              <span className="log-time">[{log.time}]</span>
              <span className="log-event">{log.event}</span>
            </div>
          ))}
        </div>
      </fieldset>
    </div>
  )
}

export default Monitor
