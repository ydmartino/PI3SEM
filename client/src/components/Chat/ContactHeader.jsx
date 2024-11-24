import React from 'react'
import { Tabs } from './Tabs'
import { Btns } from './Btns'
import { OpenCloseBtn } from './OpenCloseBtn'
import { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'

function ContactHeader({ handleFilter, activeTab, setActiveTab, leftBarStatus, toggleLeftBar }) {

  const { theme, toggleTheme } = useContext(ThemeContext)

  const toggleTabs = (tab) => {
    setActiveTab(tab)
  }

  return (
    <div className={`contactHeader ${theme}`}>
        <Tabs activeTab={activeTab} toggleTabs={toggleTabs} 
        leftBarStatus={leftBarStatus} />

        <Btns handleFilter={handleFilter} leftBarStatus={leftBarStatus} />

        <OpenCloseBtn leftBarStatus={leftBarStatus} toggleLeftBar={toggleLeftBar} />
    </div>
  )
}

export default ContactHeader