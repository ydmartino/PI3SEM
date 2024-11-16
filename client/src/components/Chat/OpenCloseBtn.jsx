import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'

export function OpenCloseBtn({ toggleLeftBar }) {

  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <div className={`openCloseBtn ${theme}`} onClick={toggleLeftBar}></div>
  )
}