import React from 'react'
import { Tabs } from './Tabs'
import { Btns } from './Btns'
import { OpenCloseBtn } from './OpenCloseBtn'
import { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'

function ContactHeader({ handleFilter, toggleLeftBar, activeTab, setActiveTab }) {

  const { theme, toggleTheme } = useContext(ThemeContext)

  const toggleTabs = () => {
    if(activeTab === 'recents') setActiveTab('all')
    if(activeTab === 'all') setActiveTab('recents')
  }

  return (
    <div className={`contactHeader ${theme}`}>
        <Tabs activeTab={activeTab} toggleTabs={toggleTabs} />
        <Btns handleFilter={handleFilter} />
        <OpenCloseBtn toggleLeftBar={toggleLeftBar} />
    </div>
  )
}

export default ContactHeader