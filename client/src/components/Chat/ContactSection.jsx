import React from 'react'
import ContactHeader from './ContactHeader'
import { Filter } from './Filter'
import ContactContainer from './ContactContainer'

function ContactSection({ toggleRecent, toggleAllContacts, 
    toggleMode, handleFilter, toggleLeftBar, setSearch,
    search, setNomeChat, nomeChat }) {
  return (
    <div className="contactSection">
        <ContactHeader toggleRecent={toggleRecent} toggleAllContacts={toggleAllContacts}
        toggleMode={toggleMode} handleFilter={handleFilter} toggleLeftBar={toggleLeftBar} />
        <Filter setSearch={setSearch}/>
        <ContactContainer search={search} setNomeChat={setNomeChat} nomeChat={nomeChat} />
    </div>
  )
}

export default ContactSection