import React, { useState } from 'react'
import ContactHeader from './ContactHeader'
import { Filter } from './Filter'
import ContactContainer from './ContactContainer'
import { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'

function ContactSection({ leftBarStatus, toggleLeftBar , setSearch,
    search, setNomeChat, nomeChat }) {

      const { theme, toggleTheme } = useContext(ThemeContext)
      const [ activeTab, setActiveTab ] = useState('recents')
      const [ filterStatus, setFilterStatus ] = useState('inactive')

      const handleFilter = () => {
        if(filterStatus == 'inactive') setFilterStatus('active')
        if(filterStatus == 'active') setFilterStatus('inactive')
      }

  return (
    <div className={`contactSection ${theme} ${leftBarStatus == 'active' ? 'open' : ''}`}>
        <ContactHeader handleFilter={handleFilter} leftBarStatus={leftBarStatus} toggleLeftBar={toggleLeftBar}
        activeTab={activeTab} setActiveTab={setActiveTab} />

        <Filter setSearch={setSearch} theme={theme} filterStatus={filterStatus} leftBarStatus={leftBarStatus} />

        <ContactContainer search={search} setNomeChat={setNomeChat} nomeChat={nomeChat} 
        activeTab={activeTab} filterStatus={filterStatus} leftBarStatus={leftBarStatus} />
    </div>
  )
}

export default ContactSection