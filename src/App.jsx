import React, { useState } from 'react'
import Desktop from './components/Desktop/Desktop'
import Window from './components/Window/Window'
import Taskbar from './components/Taskbar/Taskbar'
import StartMenu from './components/StartMenu/StartMenu'
import Terminal from './components/Apps/Terminal/Terminal'
import TeamLibrary from './components/Apps/TeamLibrary/TeamLibrary'
import Monitor from './components/Apps/Monitor/Monitor'

const App = () => {
  const [windows, setWindows] = useState([])
  const [activeWindowId, setActiveWindowId] = useState(null)
  const [startMenuOpen, setStartMenuOpen] = useState(false)
  const [nextWindowId, setNextWindowId] = useState(1)

  const desktopIcons = [
    { id: 'terminal', icon: '💻', label: 'Terminal' },
    { id: 'team-library', icon: '📚', label: 'Team Library' },
    { id: 'monitor', icon: '📊', label: 'System Monitor' },
    { id: 'vault', icon: '🔐', label: 'Credential Vault' }
  ]

  const appComponents = {
    terminal: {
      component: Terminal,
      title: 'Terminal',
      width: 700,
      height: 500
    },
    'team-library': {
      component: TeamLibrary,
      title: 'Team Library',
      width: 900,
      height: 600
    },
    monitor: {
      component: Monitor,
      title: 'System Monitor',
      width: 800,
      height: 550
    },
    vault: {
      component: () => (
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '14px', marginBottom: '16px' }}>🔐 Credential Vault</h2>
          <p style={{ fontSize: '10px', color: 'var(--text-dim)' }}>
            Coming Soon
          </p>
          <p style={{ fontSize: '9px', color: 'var(--text-dim)', marginTop: '12px' }}>
            Secure storage for API keys and credentials
          </p>
        </div>
      ),
      title: 'Credential Vault',
      width: 600,
      height: 400
    }
  }

  const openWindow = (appId) => {
    // Check if window is already open
    const existingWindow = windows.find(w => w.appId === appId)
    if (existingWindow) {
      setActiveWindowId(existingWindow.id)
      return
    }

    const appConfig = appComponents[appId]
    if (!appConfig) return

    const newWindow = {
      id: nextWindowId,
      appId,
      title: appConfig.title,
      component: appConfig.component,
      width: appConfig.width,
      height: appConfig.height,
      x: 50 + (windows.length * 30),
      y: 50 + (windows.length * 30)
    }

    setWindows([...windows, newWindow])
    setActiveWindowId(nextWindowId)
    setNextWindowId(nextWindowId + 1)
  }

  const closeWindow = (windowId) => {
    setWindows(windows.filter(w => w.id !== windowId))
    if (activeWindowId === windowId) {
      const remaining = windows.filter(w => w.id !== windowId)
      setActiveWindowId(remaining.length > 0 ? remaining[remaining.length - 1].id : null)
    }
  }

  const minimizeWindow = (windowId) => {
    // For now, just change focus to another window
    const remaining = windows.filter(w => w.id !== windowId)
    setActiveWindowId(remaining.length > 0 ? remaining[remaining.length - 1].id : null)
  }

  const restoreWindow = (windowId) => {
    setActiveWindowId(windowId)
  }

  const handleIconDoubleClick = (iconId) => {
    openWindow(iconId)
  }

  const handleStartClick = () => {
    setStartMenuOpen(!startMenuOpen)
  }

  const handleStartMenuItemClick = (itemId) => {
    openWindow(itemId)
    setStartMenuOpen(false)
  }

  return (
    <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
      <Desktop
        icons={desktopIcons}
        onIconDoubleClick={handleIconDoubleClick}
      />

      {windows.map((window) => {
        const Component = window.component
        return (
          <Window
            key={window.id}
            id={window.id}
            title={window.title}
            width={window.width}
            height={window.height}
            x={window.x}
            y={window.y}
            isActive={activeWindowId === window.id}
            onClose={closeWindow}
            onMinimize={minimizeWindow}
            onFocus={setActiveWindowId}
            showStatusBar={true}
            statusContent={`${window.title} - Ready`}
          >
            <Component />
          </Window>
        )
      })}

      <Taskbar
        windows={windows}
        onStartClick={handleStartClick}
        onWindowRestore={restoreWindow}
        activeWindowId={activeWindowId}
      />

      <StartMenu
        isOpen={startMenuOpen}
        onClose={() => setStartMenuOpen(false)}
        onItemClick={handleStartMenuItemClick}
      />
    </div>
  )
}

export default App
