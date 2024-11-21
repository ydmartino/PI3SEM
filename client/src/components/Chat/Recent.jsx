import React from 'react'

function Recent({ contact, setNomeChat, nomeChat, toggleLeftBar, theme }) {

const handleOpenChat = () => {
    setNomeChat(contact.nome)
    toggleLeftBar();
}

  return (
    <div className={`recentConvItem ${theme}`} onClick={handleOpenChat}>
        <div className="photo"></div>
        <div className="contactData">
            <div className="name">
                <p>{contact.nome}</p>
            </div>
            <div className="messageHour">
                <p>{contact.mensagem}</p>
                <p>{contact.hora}</p>
            </div>
        </div>
    </div>
  )
}

export default Recent