import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'

export function Btns({ handleFilter, leftBarStatus }) {
  
const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <div className={`btns ${leftBarStatus == 'active' ? 'show' : ''}`}>
        <div className={`modeBtn ${theme}`} onClick={toggleTheme}></div>
    </div>
  )
}