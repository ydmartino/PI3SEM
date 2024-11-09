import React from 'react'
import { AllContactsContainer } from './AllContactsContainer'
import { AllRecentsContainer } from './AllRecentsContainer'

function ContactContainer({ search, setNomeChat, nomeChat }) {
  return (
    <div className="contactContainer">
        <AllRecentsContainer search={search} setNomeChat={setNomeChat} nomeChat={nomeChat}/>
        <AllContactsContainer search={search} nomeChat={nomeChat} setNomeChat={setNomeChat}/>
    </div>
  )
}

export default ContactContainer