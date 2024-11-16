import React from 'react'
import { AllContactsContainer } from './AllContactsContainer'
import { AllRecentsContainer } from './AllRecentsContainer'

function ContactContainer({ search, setNomeChat, nomeChat, activeTab, filterStatus, leftBarStatus }) {

  return (
    <div className={`contactContainer ${filterStatus === 'active' ? 'reduce' : ''} ${leftBarStatus == 'active' ? 'show' : ''}`}>
        <AllRecentsContainer search={search} setNomeChat={setNomeChat} nomeChat={nomeChat} activeTab={activeTab}/>
        <AllContactsContainer search={search} nomeChat={nomeChat} setNomeChat={setNomeChat} activeTab={activeTab}/>
    </div>
  )
}

export default ContactContainer