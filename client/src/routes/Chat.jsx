import React from 'react'
import '../assets/chat.css'

function Chat() {
    const contacts = [{
        'Nome' : 'Marcelo',
        'Mensagem' : 'Bom dia',
        'Hora' : '09:52'
    },
    {
        'Nome' : 'Diego',
        'Mensagem' : 'Boa tarde',
        'Hora' : '14:30'
    },
    {
        'Nome' : 'Samuel',
        'Mensagem' : 'Boa noite',
        'Hora' : '20:22'
    },
    {
        'Nome' : 'Renan',
        'Mensagem' : 'Lmao',
        'Hora' : '00:52'
    },
    {
        'Nome' : 'Yuri',
        'Mensagem' : 'Lranja',
        'Hora' : '00:53'
    },
    {
        'Nome' : 'Victor',
        'Mensagem' : 'Falando nisso...',
        'Hora' : '17:01'
    }
]

    return (
        <>
            <div className="page">
                <div className="chatContainer">
                    <div className="contactSection">
                        <div className="contactHeader">
                            
                        </div>
                        <div className="filterSection">
                            <input type="text" className='filter' placeholder='Pesquisar...'/>
                        </div>
                        <div className="contactContainer">
                            {contacts.map((contact) => (
                                <div className="contact">
                                    <div className="photo"></div>
                                    <div className="contactData">
                                        <div className="name">
                                            <p>{contact.Nome}</p>
                                        </div>
                                        <div className="messageHour">
                                            <p>{contact.Mensagem}</p>
                                            <p>{contact.Hora}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="messageSection">
                        <div className="messageHeader">
                            <div className="photoMiniature"></div>
                            <div className="headerData">
                                <p className='nameHeader'>nomePessoa</p>
                                <p className='statusHeader'>On-line</p>
                            </div>
                        </div>
                        <div className="messageContainer">

                        </div>
                        <div className="inputDiv">
                            <input type="text" className="messageInput" />
                            <button type='submit' className='sendBtn'>Enviar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Chat
