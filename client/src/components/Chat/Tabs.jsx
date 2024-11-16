import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'

export function Tabs({ toggleRecent, activeTab, toggleTabs }) {

  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <div className="tabs">
        <div className={`recent ${activeTab == 'recents' ? 'selected' : ''} ${theme}`} onClick={toggleTabs}>Recentes</div>
        <div className={`allContacts ${activeTab == 'all' ? 'selected' : ''} ${theme}`} onClick={toggleTabs}>Contatos</div>
    </div>
  )
}