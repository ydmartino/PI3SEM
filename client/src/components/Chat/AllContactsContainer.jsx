import React, { useEffect, useState } from 'react'
import Contact from './Contact'
import axios from 'axios'
import { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'

export function AllContactsContainer({ search, nomeChat, setNomeChat, activeTab }) {
  
  const { theme, toggleTheme } = useContext(ThemeContext)

  const [ contacts, setContacts ] = useState([])

  async function getContacts () {
    const fetchContacts = await axios.get('http://localhost:8080/Contacts/All')
    setContacts(fetchContacts.data)
  }

  useEffect(() => {
    getContacts();
  }, [])

  return (
    <div className={`contacts ${activeTab === 'all' ? 'show' : ''} ${theme}`}>
        {contacts
        .filter((contact) => contact.name.toLowerCase().includes(search.toLowerCase()))
        .map((contact) => (
            <Contact contact={contact} setNomeChat={setNomeChat} nomeChat={nomeChat} theme={theme} />
        ))
        }
    </div>
  )
}