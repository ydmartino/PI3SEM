import React, { useEffect, useState } from 'react'
import Contact from './Contact'
import axios from 'axios'

export function AllContactsContainer({ search, nomeChat, setNomeChat }) {
  
  const [ contacts, setContacts ] = useState([])

  async function getContacts () {
    const fetchContacts = await axios.get('http://localhost:8080/Contacts')
    setContacts(fetchContacts)
  }

  useEffect(() => {
    getContacts();
  }, [])

  return (
    <div className="contacts">
        {/*contacts
        .filter((contact) => contact.toLowerCase().includes(search.toLowerCase()))
        .map((contact) => (
            <Contact contact={contact} setNomeChat={setNomeChat} nomeChat={nomeChat} />
        ))*/
        console.log(contacts)
        }
    </div>
  )
}