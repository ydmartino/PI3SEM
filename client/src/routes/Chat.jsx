import React, { useState } from 'react'
import '../assets/chat.css'
import { MessageSection } from '../components/Chat/MessageSection'
import ContactSection from '../components/Chat/ContactSection'
import { useContext } from 'react'
import { ThemeContext } from '../components/Context/ThemeContext'
import StompComponent from '../components/Context/WebsocketService'

function Chat() {

const { theme, toggleTheme } = useContext(ThemeContext)
const [ nomeChat, setNomeChat ] = useState('')
const [ search, setSearch ] = useState('')
const [ leftBarStatus, setLeftBarStatus ] = useState('inactive')

function toggleLeftBar () {
    if(leftBarStatus == 'active') setLeftBarStatus('inactive')
    if(leftBarStatus == 'inactive') setLeftBarStatus('active')
}

    return (
        <>
            <StompComponent />
            <div className={`page ${theme}`}>
                <div className="chatContainer">
                    <ContactSection leftBarStatus={leftBarStatus} toggleLeftBar={toggleLeftBar} setSearch={setSearch}
                    search={search} setNomeChat={setNomeChat} nomeChat={nomeChat} />
                    <MessageSection nomeChat={nomeChat} leftBarStatus={leftBarStatus} />
                </div>
            </div>
        </>
    )
}

export default Chat
