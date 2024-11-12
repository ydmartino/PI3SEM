import React from 'react'

export function Tabs({ toggleRecent, toggleAllContacts }) {
  return (
    <div className="tabs">
        <div className="recent selected" onClick={toggleRecent}>Recentes</div>
        <div className="allContacts" onClick={toggleAllContacts}>Contatos</div>
    </div>
  )
}