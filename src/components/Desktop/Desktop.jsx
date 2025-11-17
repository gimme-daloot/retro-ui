import React from 'react'
import DesktopIcon from '../DesktopIcon/DesktopIcon'
import './Desktop.css'

const Desktop = ({ icons, onIconDoubleClick }) => {
  return (
    <div className="desktop desktop-bg scanline-effect">
      <div className="desktop-icons">
        {icons.map((icon) => (
          <DesktopIcon
            key={icon.id}
            icon={icon.icon}
            label={icon.label}
            onDoubleClick={() => onIconDoubleClick(icon.id)}
          />
        ))}
      </div>
    </div>
  )
}

export default Desktop
