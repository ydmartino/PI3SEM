import React from 'react'

function Contact({ contact, setNomeChat, nomeChat, theme }) {

    const handleOpenChat = () => {
        setNomeChat(contact)
        console.log(contact)
    }

    return (
    <div className={`contact ${theme}`} onClick={handleOpenChat}>
        <div className="photo"></div>
        <div className="contactData">
            <div className="name">
                <p>{contact}</p>
            </div>
            
        </div>
    </div>
    )
}

export default Contact
