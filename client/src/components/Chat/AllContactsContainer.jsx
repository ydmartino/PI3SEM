import React from 'react'
import Contact from './Contact'
import axios from 'axios'

export function AllContactsContainer({ search, nomeChat, setNomeChat }) {
  
    const contacts = axios.get('http://localhost:8080/Contacts')

  return (
    <div className="contacts">
        {contacts
        .filter((contact) => contact.toLowerCase().includes(search.toLowerCase()))
        .map((contact) => (
            <Contact contact={contact} setNomeChat={setNomeChat} nomeChat={nomeChat} />
        ))}
    </div>
  )
}