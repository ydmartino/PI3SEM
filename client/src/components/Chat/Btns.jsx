import React from 'react'

export function Btns({ toggleMode, handleFilter }) {
  return (
    <div className="btns">
        <div className="modeBtn" onClick={toggleMode}></div>
        <div className="searchIcon" onClick={handleFilter}></div>
    </div>
  )
}