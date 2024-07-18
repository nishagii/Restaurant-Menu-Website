import React from 'react'
import "./Toggle.css";

const Toggle = () => {
  return (
    <div>
          <button onClick={toggleTheme} className="theme-toggle">
              {isDarkTheme ? "Light Theme" : "Dark Theme"}
          </button>
    </div>
  )
}

export default Toggle
