import React from 'react';

function Contact({ contact, setNomeChat, nomeChat, theme }) {

    const handleOpenChat = () => {
        setNomeChat(contact);
        console.log(nomeChat)
    };

    return (
        <div 
            className={`contact ${theme} ${nomeChat?.id === contact.id ? 'active' : ''}`} 
            onClick={handleOpenChat}
        >
            <div className="photo"></div>
            <div className="contactData">
                <div className="name">
                    <p>{contact.name}</p>
                </div>
            </div>
        </div>
    );
}

export default Contact;
