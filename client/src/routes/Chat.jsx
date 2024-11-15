import React, { useState } from 'react'
import '../assets/chat.css'
import { MessageSection } from '../components/Chat/MessageSection'
import ContactSection from '../components/Chat/ContactSection'

function Chat() {

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
    const recents = document.getElementsByClassName('recentConvItem')
    const othermsg = document.getElementsByClassName('other-message')
    const ownmsg = document.getElementsByClassName('own-message')
    const elements = ['page', 'modeBtn', 'contactSection', 'recentConv', 'contacts', 'recent', 'allContacts', 'contactHeader', 'filter', 
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
        for (let index = 0; index < recents.length; index++) {
            recents[index].classList.add('dark')
        }
        for (let index = 0; index < othermsg.length; index++) {
            othermsg[index].classList.add('dark')
        }
        for (let index = 0; index < ownmsg.length; index++) {
            ownmsg[index].classList.add('dark')
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
        for (let index = 0; index < recents.length; index++) {
            recents[index].classList.remove('dark')
        }
        for (let index = 0; index < othermsg.length; index++) {
            othermsg[index].classList.remove('dark')
        }
        for (let index = 0; index < ownmsg.length; index++) {
            ownmsg[index].classList.remove('dark')
        }
        setMode(!mode)
    }
}

function toggleLeftBar () {
    const contactSection = document.getElementsByClassName('contactSection')[0]
    const messageSection = document.getElementsByClassName('messageSection')[0]
    const openCloseBtn = document.getElementsByClassName('openCloseBtn')[0]
    const contactHeader = document.getElementsByClassName('contactHeader')[0]
    const elements = ['tabs', 'btns', 'filterSection', 'contactContainer']

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
    const recentTab = document.getElementsByClassName('recent')[0]
    const allContactsTab = document.getElementsByClassName('allContacts')[0]

    allContacts.classList.remove('show')
    allContactsTab.classList.remove('selected')
    recentConv.classList.add('show')
    recentTab.classList.add('selected')
}

function toggleAllContacts () {
    const recentConv = document.getElementsByClassName('recentConv')[0]
    const allContacts = document.getElementsByClassName('contacts')[0]
    const recentTab = document.getElementsByClassName('recent')[0]
    const allContactsTab = document.getElementsByClassName('allContacts')[0]

    recentConv.classList.remove('show')
    recentTab.classList.remove('selected')
    allContacts.classList.add('show')
    allContactsTab.classList.add('selected')
}

    return (
        <>
            <div className="page">
                <div className="chatContainer">
                    <ContactSection toggleRecent={toggleRecent} toggleAllContacts={toggleAllContacts}
                    toggleMode={toggleMode} handleFilter={handleFilter} toggleLeftBar={toggleLeftBar}
                    setSearch={setSearch} search={search} setNomeChat={setNomeChat} nomeChat={nomeChat} />
                    <MessageSection nomeChat={nomeChat} />
                </div>
            </div>
        </>
    )
}

export default Chat
