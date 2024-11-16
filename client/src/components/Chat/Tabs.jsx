import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'

export function Tabs({ toggleRecent, activeTab, toggleTabs, leftBarStatus }) {

  const { theme, toggleTheme } = useContext(ThemeContext)
  console.log(leftBarStatus)

  return (
    <div className={`tabs ${leftBarStatus == 'active' ? 'show' : ''}`}>
        <div className={`recent ${activeTab == 'recents' ? 'selected' : ''} ${theme}`} onClick={toggleTabs}>Recentes</div>
        <div className={`allContacts ${activeTab == 'all' ? 'selected' : ''} ${theme}`} onClick={toggleTabs}>Contatos</div>
    </div>
  )
}