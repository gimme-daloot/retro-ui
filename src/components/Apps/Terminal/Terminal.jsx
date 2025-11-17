import React, { useState, useRef, useEffect } from 'react'
import './Terminal.css'

const Terminal = () => {
  const [history, setHistory] = useState([
    { type: 'output', text: 'Factory OS Terminal v1.0' },
    { type: 'output', text: 'Type "help" for available commands' },
    { type: 'output', text: '' }
  ])
  const [input, setInput] = useState('')
  const terminalEndRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [history])

  const executeCommand = (cmd) => {
    const trimmedCmd = cmd.trim().toLowerCase()

    const newHistory = [
      ...history,
      { type: 'input', text: cmd }
    ]

    switch (trimmedCmd) {
      case 'help':
        newHistory.push(
          { type: 'output', text: '' },
          { type: 'output', text: 'Available Commands:' },
          { type: 'output', text: '  help     - Show this help message' },
          { type: 'output', text: '  status   - Show system status' },
          { type: 'output', text: '  teams    - List available teams' },
          { type: 'output', text: '  clear    - Clear terminal screen' },
          { type: 'output', text: '' }
        )
        break

      case 'status':
        newHistory.push(
          { type: 'output', text: '' },
          { type: 'output', text: 'System Status:' },
          { type: 'output', text: '  Status: Online' },
          { type: 'output', text: '  Teams: 0 active' },
          { type: 'output', text: '  API: Ready' },
          { type: 'output', text: '  Backend: Coming Soon' },
          { type: 'output', text: '' }
        )
        break

      case 'teams':
        newHistory.push(
          { type: 'output', text: '' },
          { type: 'output', text: 'Available Teams:' },
          { type: 'output', text: '  1. Python Development Team' },
          { type: 'output', text: '  2. Video Creation Team' },
          { type: 'output', text: '  3. Research & Scraping Team' },
          { type: 'output', text: '' },
          { type: 'output', text: 'Note: Teams are in preview. Deployment coming soon!' },
          { type: 'output', text: '' }
        )
        break

      case 'clear':
        setHistory([])
        setInput('')
        return

      case '':
        newHistory.push({ type: 'output', text: '' })
        break

      default:
        newHistory.push(
          { type: 'output', text: '' },
          { type: 'error', text: `Command not found: ${cmd}` },
          { type: 'output', text: 'Type "help" for available commands' },
          { type: 'output', text: '' }
        )
    }

    setHistory(newHistory)
    setInput('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.trim()) {
      executeCommand(input)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'l' && e.ctrlKey) {
      e.preventDefault()
      setHistory([])
    }
  }

  return (
    <div className="terminal-app" onClick={() => inputRef.current?.focus()}>
      <div className="terminal-output">
        {history.map((entry, index) => (
          <div
            key={index}
            className={`terminal-line ${entry.type}`}
          >
            {entry.type === 'input' && <span className="terminal-prompt">factory@os:~$</span>}
            {entry.text}
          </div>
        ))}
        <div ref={terminalEndRef} />
      </div>
      <form onSubmit={handleSubmit} className="terminal-input-form">
        <span className="terminal-prompt">factory@os:~$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="terminal-input"
          autoFocus
          spellCheck={false}
        />
        <span className="terminal-cursor" />
      </form>
    </div>
  )
}

export default Terminal
