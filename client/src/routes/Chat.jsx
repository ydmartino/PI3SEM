import React, { useState } from 'react'
import '../assets/chat.css'
import Recent from '../components/Chat/Recent'
import Contact from '../components/Chat/Contact'

function Chat() {
    const recents = [{
        'nome' : 'Marcelo',
        'mensagem' : 'Bom dia',
        'hora' : '09:52',
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
    const contacts = ['Ana', 'Bruno', 'Carla', 'Diego', 'Eduarda', 'Felipe', 'Gabriela', 
        'Hugo', 'Isabela', 'João', 'Larissa', 'Marcos', 'Natália', 'Otávio', 'Paula', 'Renato', 
        'Sofia', 'Thiago', 'Vera', 'William']


const [ nomeChat, setNomeChat ] = useState('')
const [ filterShow, setfilterShow ] = useState(false)
const [ search, setSearch ] = useState('')
const [ mode, setMode ] = useState(false)
const [ leftBar, setLeftBar ] = useState(false)

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

function toggleMode () {
    const contactData = document.getElementsByClassName('contactData')
    const contact = document.getElementsByClassName('contact')
    const elements = ['page', 'modeBtn', 'contactSection', 'recentConv', 'contacts', 'contactHeader', 'filter', 
        'searchIcon', 'messageSection', 'messageHeader', 'inputDiv', 
        'messageInput', 'openCloseBtn', 'sendBtn']

    if(!mode) {
        for (let index = 0; index < elements.length; index++) {
            const element = document.getElementsByClassName(elements[index])[0]
            element.classList.add('dark')
        }
        for (let index = 0; index < contact.length; index++) {
            contact[index].classList.add('dark')
            contactData[index].classList.add('dark')
        }
        setMode(!mode)
    } 
    
    else {
        for (let index = 0; index < elements.length; index++) {
            const element = document.getElementsByClassName(elements[index])[0]
            element.classList.remove('dark')
        }
        for (let index = 0; index < contact.length; index++) {
            contact[index].classList.remove('dark')
            contactData[index].classList.remove('dark')
        }
        setMode(!mode)
    }
}

function toggleLeftBar () {
    const contactSection = document.getElementsByClassName('contactSection')[0]
    const messageSection = document.getElementsByClassName('messageSection')[0]
    const openCloseBtn = document.getElementsByClassName('openCloseBtn')[0]
    const contactHeader = document.getElementsByClassName('contactHeader')[0]
    const elements = ['btns', 'filterSection', 'contactContainer']

    if(!leftBar) {
        contactSection.classList.add('open')
        messageSection.classList.add('reduce')
        openCloseBtn.classList.add('clicked')
        contactHeader.classList.add('show')
        for (let index = 0; index < elements.length; index++) {
            const element = document.getElementsByClassName(elements[index])[0]
            element.classList.add('show')
        }
        setLeftBar(!leftBar)
    }
    else {
        contactSection.classList.remove('open')
        messageSection.classList.remove('reduce')
        openCloseBtn.classList.remove('clicked')
        contactHeader.classList.remove('show')
        contactHeader.classList.remove('show')
        for (let index = 0; index < elements.length; index++) {
            const element = document.getElementsByClassName(elements[index])[0]
            element.classList.remove('show')
        }
        setLeftBar(!leftBar)
    }

}

function toggleRecent () {
    const recentConv = document.getElementsByClassName('recentConv')[0]
    const allContacts = document.getElementsByClassName('contacts')[0]

    allContacts.classList.remove('show')
    recentConv.classList.add('show')
}

function toggleAllContacts () {
    const recentConv = document.getElementsByClassName('recentConv')[0]
    const allContacts = document.getElementsByClassName('contacts')[0]

    recentConv.classList.remove('show')
    allContacts.classList.add('show')
}

    return (
        <>
            <div className="page">
                <div className="chatContainer">
                    <div className="contactSection">
                        <div className="contactHeader">
                            <div className="tabs">
                                <div className="recent" onClick={toggleRecent}>Recentes</div>
                                <div className="allContacts" onClick={toggleAllContacts}>Contatos</div>
                            </div>
                            <div className="btns">
                                <div className="modeBtn" onClick={toggleMode}></div>
                                <div className="searchIcon" onClick={handleFilter}></div>
                            </div>
                            <div className="openCloseBtn" onClick={toggleLeftBar}></div>
                        </div>
                        <div className="filterSection">
                            <input type="text" className='filter' placeholder='Pesquisar...' onChange={(e) => setSearch(e.target.value)}/>
                        </div>
                        <div className="contactContainer">
                            <div className="recentConv show">
                                {recents
                                .filter((contact) => contact.nome.toLowerCase().includes(search.toLowerCase()))
                                .map((contact) => (
                                    <Recent contact={contact} setNomeChat={setNomeChat} nomeChat={nomeChat} />
                                ))}
                            </div>
                            <div className="contacts">
                                {contacts
                                .filter((contact) => contact.toLowerCase().includes(search.toLowerCase()))
                                .map((contact) => (
                                    <Contact contact={contact} setNomeChat={setNomeChat} nomeChat={nomeChat} />
                                ))}
                            </div>
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
                            <button type='submit' className='sendBtn'></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Chat
