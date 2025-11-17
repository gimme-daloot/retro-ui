import React, { useState, useEffect } from 'react'
import './Taskbar.css'

const Taskbar = ({ windows, onStartClick, onWindowRestore, activeWindowId }) => {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    })
  }

  return (
    <div className="taskbar taskbar-enter">
      <button
        className="start-button primary"
        onClick={onStartClick}
      >
        START
      </button>
      <div className="taskbar-windows">
        {windows.map((window) => (
          <button
            key={window.id}
            className={`taskbar-window-button ${window.id === activeWindowId ? 'active' : ''}`}
            onClick={() => onWindowRestore(window.id)}
          >
            {window.title}
          </button>
        ))}
      </div>
      <div className="system-tray">
        <div className="system-clock">{formatTime(currentTime)}</div>
      </div>
    </div>
  )
}

export default Taskbar
