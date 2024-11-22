import { connectWebSocket, sendMessage } from '../Context/WebsocketService'
import React, { useEffect } from 'react'
import { Message } from './Message'
import axios from 'axios'

export function MessageContainer({ nomeChat, theme, setMessages, messages, fetchMsg }) {

    const scrollBottom = () => {
        const doc = document.getElementsByClassName('messageList')[0]
        doc.scrollTo(0, doc.scrollHeight)
    }

    useEffect(() => {
        // Conectar ao WebSocket e ouvir mensagens
            connectWebSocket((newMessage) => {
            setMessages((prevMessages) => [...prevMessages, newMessage]);
        });
    }, []);

    return (
        <div className="messageContainer">
            <ul className='messageList'>
            {
              messages
              .map((message) => (
                  <Message nomeChat={nomeChat} msg={message} theme={theme} />
              ))
            }
            </ul>
        </div>
    )
}