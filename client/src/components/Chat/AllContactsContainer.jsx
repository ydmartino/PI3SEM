import React from 'react'
import Contact from './Contact'

export function AllContactsContainer({ search, nomeChat, setNomeChat }) {
    const contacts = ['Ana', 'Bruno', 'Carla', 'Diego', 'Eduarda', 'Felipe', 'Gabriela', 
        'Hugo', 'Isabela', 'João', 'Larissa', 'Marcos', 'Natália', 'Otávio', 'Paula', 'Renato', 
        'Sofia', 'Thiago', 'Vera', 'William']

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