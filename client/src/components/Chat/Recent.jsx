import React, { useEffect } from 'react'

function Recent({ contact, setNomeChat, nomeChat, toggleLeftBar, theme }) {

    const user = localStorage.getItem('userId')
    const messageSender = contact.fromId

    const handleOpenChat = () => {
        const recentConv = {
            id: contact.fromId !== user ? contact.fromId : contact.toId,
            name: contact.fromId !== user ? contact.fromName : contact.toName
        }
        setNomeChat(recentConv);
        localStorage.setItem('toId', contact.id)
        toggleLeftBar();
    };

    const convertedTime = new Date(contact.dateTime).getTime()
    const hours = new Date(convertedTime).toLocaleTimeString()

  return (
    <div className={`recentConvItem ${theme}`} onClick={handleOpenChat}>
        <div className="photo"></div>
        <div className="contactData">
            <div className="name">
                <p>{contact.fromId !== user ? contact.fromName : contact.toName}</p>
            </div>
            <div className="messageHour">
                <p>{messageSender === user ? "Você: " + contact.message : contact.message}</p>
                <p>{hours}</p>
            </div>
        </div>
    </div>
  )
}

export default Recent
