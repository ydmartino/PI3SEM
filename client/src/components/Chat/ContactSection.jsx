import React, { useState } from 'react'
import ContactHeader from './ContactHeader'
import { Filter } from './Filter'
import ContactContainer from './ContactContainer'
import { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'

function ContactSection({ handleFilter, toggleLeftBar, setSearch,
    search, setNomeChat, nomeChat }) {

      const { theme, toggleTheme } = useContext(ThemeContext)
      const [ activeTab, setActiveTab ] = useState('recents')

  return (
    <div className={`contactSection ${theme}`}>
        <ContactHeader handleFilter={handleFilter} toggleLeftBar={toggleLeftBar}
        activeTab={activeTab} setActiveTab={setActiveTab} />
        <Filter setSearch={setSearch} theme={theme} />
        <ContactContainer search={search} setNomeChat={setNomeChat} nomeChat={nomeChat}  activeTab={activeTab} />
    </div>
  )
}

export default ContactSection