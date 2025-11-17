import React, { useRef, useEffect } from 'react'
import Draggable from 'react-draggable'
import './Window.css'

const Window = ({
  id,
  title,
  children,
  onClose,
  onMinimize,
  isActive,
  onFocus,
  width = 600,
  height = 400,
  x = 100,
  y = 100,
  showStatusBar = false,
  statusContent = null
}) => {
  const windowRef = useRef(null)

  useEffect(() => {
    if (isActive && windowRef.current) {
      windowRef.current.focus()
    }
  }, [isActive])

  const handleMouseDown = () => {
    onFocus(id)
  }

  return (
    <Draggable
      handle=".title-bar"
      bounds="parent"
      defaultPosition={{ x, y }}
    >
      <div
        ref={windowRef}
        className={`window ${isActive ? 'active' : ''} window-enter`}
        style={{
          width: `${width}px`,
          height: `${height}px`,
          position: 'absolute',
          zIndex: isActive ? 1000 : 1
        }}
        onMouseDown={handleMouseDown}
        tabIndex={0}
      >
        <div className="title-bar">
          <div className="title-bar-text">{title}</div>
          <div className="title-bar-controls">
            {onMinimize && (
              <button
                onClick={() => onMinimize(id)}
                aria-label="Minimize"
              >
                _
              </button>
            )}
            <button
              onClick={() => onClose(id)}
              aria-label="Close"
            >
              X
            </button>
          </div>
        </div>
        <div className="window-body">
          {children}
        </div>
        {showStatusBar && (
          <div className="status-bar">
            <div className="status-bar-field">
              {statusContent || 'Ready'}
            </div>
          </div>
        )}
      </div>
    </Draggable>
  )
}

export default Window
