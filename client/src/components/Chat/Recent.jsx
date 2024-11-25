import React from 'react'

function Recent({ contact, setNomeChat, nomeChat, toggleLeftBar, theme }) {

    const handleOpenChat = () => {
        //setNomeChat(contact);
        console.log(contact)
        localStorage.setItem('toId', contact.id)
        toggleLeftBar();
    };

const convertedTime = new Date(contact.dateTime).getTime()
const hours = new Date(convertedTime).toLocaleTimeString()

const user = localStorage.getItem('userId')
const messageSender = contact.fromId

  return (
    <div className={`recentConvItem ${theme}`} onClick={handleOpenChat}>
        <div className="photo"></div>
        <div className="contactData">
            <div className="name">
                <p>{contact.name}</p>
            </div>
            <div className="messageHour">
                <p>{messageSender == user ? "Você: " + contact.message : contact.message}</p>
                <p>{hours}</p>
            </div>
        </div>
    </div>
  )
}

export default Recent