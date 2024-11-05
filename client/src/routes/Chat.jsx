import React, { useState } from 'react'
import '../assets/chat.css'
import Contact from '../components/Chat/Contact'

function Chat() {
    const contacts = [{
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
    const elements = ['page', 'modeBtn', 'contactSection', 'contactHeader', 'filter', 
        'searchIcon', 'messageSection', 'messageHeader', 'inputDiv', 'messageInput', 'openCloseBtn']

    if(!mode) {
        for (let index = 0; index < elements.length; index++) {
            const element = document.getElementsByClassName(elements[index])[0]
            element.classList.add('dark')
        }
        for (let index = 0; index < contactData.length; index++) {
            contactData[index].classList.add('dark')
        }
        setMode(!mode)
    } 
    
    else {
        for (let index = 0; index < elements.length; index++) {
            const element = document.getElementsByClassName(elements[index])[0]
            element.classList.remove('dark')
        }
        for (let index = 0; index < contactData.length; index++) {
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

    return (
        <>
            <div className="page">
                <div className="chatContainer">
                    <div className="contactSection">
                        <div className="contactHeader">
                            <p>Conversas</p>
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
                            <button type='submit' className='sendBtn'></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Chat
