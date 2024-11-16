import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'

export function Btns({ handleFilter }) {
  
const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <div className="btns">
        <div className={`modeBtn ${theme}`} onClick={toggleTheme}></div>
        <div className={`searchIcon ${theme}`} onClick={handleFilter}></div>
    </div>
  )
}