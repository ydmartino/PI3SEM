import React from 'react'
import { AllContactsContainer } from './AllContactsContainer'
import { AllRecentsContainer } from './AllRecentsContainer'

function ContactContainer({ search, setNomeChat, nomeChat, activeTab, filterStatus, leftBarStatus, toggleLeftBar }) {

  return (
    <div className={`contactContainer ${filterStatus === 'active' ? 'reduce' : ''} ${leftBarStatus == 'active' ? 'show' : ''}`}>
        <AllRecentsContainer search={search} setNomeChat={setNomeChat} nomeChat={nomeChat} activeTab={activeTab} toggleLeftBar={toggleLeftBar} />
        <AllContactsContainer search={search} nomeChat={nomeChat} setNomeChat={setNomeChat} activeTab={activeTab} toggleLeftBar={toggleLeftBar} />
    </div>
  )
}

export default ContactContainer