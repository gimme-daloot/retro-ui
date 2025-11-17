import React, { useState } from 'react'
import './DesktopIcon.css'

const DesktopIcon = ({ icon, label, onDoubleClick }) => {
  const [lastClick, setLastClick] = useState(0)

  const handleClick = () => {
    const now = Date.now()
    if (now - lastClick < 300) {
      // Double click detected
      onDoubleClick()
    }
    setLastClick(now)
  }

  return (
    <div className="desktop-icon icon-hover" onClick={handleClick}>
      <div className="icon-image">{icon}</div>
      <div className="icon-label">{label}</div>
    </div>
  )
}

export default DesktopIcon
