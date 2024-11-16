import React, { useState } from 'react'
import '../assets/chat.css'
import { MessageSection } from '../components/Chat/MessageSection'
import ContactSection from '../components/Chat/ContactSection'
import { useContext } from 'react'
import { ThemeContext } from '../components/Context/ThemeContext'

function Chat() {

const { theme, toggleTheme } = useContext(ThemeContext)
const [ nomeChat, setNomeChat ] = useState('')
const [ filterShow, setfilterShow ] = useState(false)
const [ search, setSearch ] = useState('')
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

    return (
        <>
            <div className={`page ${theme}`}>
                <div className="chatContainer">
                    <ContactSection handleFilter={handleFilter} toggleLeftBar={toggleLeftBar} setSearch={setSearch}
                    search={search} setNomeChat={setNomeChat} nomeChat={nomeChat} />
                    <MessageSection nomeChat={nomeChat} />
                </div>
            </div>
        </>
    )
}

export default Chat
