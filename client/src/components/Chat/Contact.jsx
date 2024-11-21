import React from 'react';

function Contact({ contact, setNomeChat, nomeChat, toggleLeftBar, theme }) {

    const handleOpenChat = () => {
        setNomeChat(contact);
        toggleLeftBar();
    };

    return (
        <div 
            className={`contact ${theme} ${nomeChat?.id === contact.id ? 'active' : ''}`} 
            onClick={handleOpenChat}
        >
            <div className="photo"></div>
            <div className="contactData">
                <div className="name">
                    <p>{contact.id == localStorage.getItem('userId') ? contact.name + " (Você)" : contact.name}</p>
                </div>
            </div>
        </div>
    );
}

export default Contact;
