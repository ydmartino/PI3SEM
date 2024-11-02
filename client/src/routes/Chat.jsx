import React, { useState } from 'react'
import '../assets/chat.css'
import Contact from '../components/Chat/Contact'

function Chat() {
    const contacts = [{
        'nome' : 'Marcelo',
        'mensagem' : 'Bom dia',
        'hora' : '09:52'
    },
    {
        'nome' : 'Diego',
        'mensagem' : 'Boa tarde',
        'hora' : '14:30'
    },
    {
        'nome' : 'Samuel',
        'mensagem' : 'Boa noite',
        'hora' : '20:22'
    },
    {
        'nome' : 'Renan',
        'mensagem' : 'Lmao',
        'hora' : '00:52'
    },
    {
        'nome' : 'Yuri',
        'mensagem' : 'Lranja',
        'hora' : '00:53'
    },
    {
        'nome' : 'Victor',
        'mensagem' : 'Falando nisso...',
        'hora' : '17:01'
    },
    {
        'nome' : 'Vinicius',
        'mensagem' : 'Olá',
        'hora' : '00:00'
    }
]

const [ nomeChat, setNomeChat ] = useState('')
const [ filterShow, setfilterShow ] = useState(false)
const [ search, setSearch ] = useState('')

const handleFilter = () => {
    const filterArea = document.getElementsByClassName('filterSection')[0]
    const filter = document.getElementsByClassName('filter')[0]
    const contactArea = document.getElementsByClassName('contactContainer')[0]

    if(!filterShow){
        filterArea.classList.add('show')
        filter.classList.add('show')
        contactArea.classList.add('reduce')
        setfilterShow(!filterShow)
    } else {
        filterArea.classList.remove('show')
        filter.classList.remove('show')
        contactArea.classList.remove('reduce')
        setfilterShow(!filterShow)
    }
}

    return (
        <>
            <div className="page">
                <div className="chatContainer">
                    <div className="contactSection">
                        <div className="contactHeader">
                            <p>Conversas</p>
                            <div className="searchIcon"  onClick={handleFilter}></div>
                        </div>
                        <div className="filterSection">
                            <input type="text" className='filter' placeholder='Pesquisar...' onChange={(e) => setSearch(e.target.value)}/>
                        </div>
                        <div className="contactContainer">
                            {contacts
                            .filter((contact) => contact.nome.toLowerCase().includes(search.toLowerCase()))
                            .map((contact) => (
                                <Contact contact={contact} setNomeChat={setNomeChat} nomeChat={nomeChat} />
                            ))}
                        </div>
                    </div>

                    <div className="messageSection">
                        <div className="messageHeader">
                            <div className="photoMiniature"></div>
                            <div className="headerData">
                                <p className='nameHeader'>{nomeChat}</p>
                                <p className='statusHeader'>On-line</p>
                            </div>
                        </div>
                        <div className="messageContainer">
                            {

                            }
                        </div>
                        <div className="inputDiv">
                            <input type="text" className="messageInput" placeholder='Digite sua mensagem...' />
                            <button type='submit' className='sendBtn'>Enviar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Chat
