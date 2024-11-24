import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'

export function Tabs({ toggleRecent, activeTab, toggleTabs, leftBarStatus }) {

  const { theme, toggleTheme } = useContext(ThemeContext)

  const handleRecents = () => {
    toggleTabs('recents')
  }

  const handleAll = () => {
    toggleTabs('all')
  }

  return (
    <div className={`tabs ${leftBarStatus == 'active' ? 'show' : ''}`}>
        <div className={`recent ${activeTab == 'recents' ? 'selected' : ''} ${theme}`} onClick={handleRecents}>Recentes</div>
        <div className={`allContacts ${activeTab == 'all' ? 'selected' : ''} ${theme}`} onClick={handleAll}>Contatos</div>
    </div>
  )
}