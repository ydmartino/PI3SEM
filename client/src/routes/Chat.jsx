import React, { useState, useEffect } from 'react'
import '../assets/chat.css'
import { MessageSection } from '../components/Chat/MessageSection'
import ContactSection from '../components/Chat/ContactSection'
import { useContext } from 'react'
import { ThemeContext } from '../components/Context/ThemeContext'

function Chat() {

const { theme, toggleTheme } = useContext(ThemeContext)
const [ nomeChat, setNomeChat ] = useState('')
const [ search, setSearch ] = useState('')
const [ leftBarStatus, setLeftBarStatus ] = useState('inactive')

function toggleLeftBar () {
    if(leftBarStatus == 'active') setLeftBarStatus('inactive')
    if(leftBarStatus == 'inactive') setLeftBarStatus('active')
}

    useEffect(() => {
        const handleBeforeUnload = () => {
            localStorage.removeItem('toId');
        };

        // Adiciona o evento
        window.addEventListener("beforeunload", handleBeforeUnload);

        // Remove o evento ao desmontar o componente
        return () => {
        window.removeEventListener("beforeunload", handleBeforeUnload);
        };
    }, []);

    return (
        <>
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
