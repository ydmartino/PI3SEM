import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { MsgInput } from './MsgInput.jsx'
import { MsgContainer } from './MsgContainer.jsx'
import { MsgHeader } from './MsgHeader.jsx'
import { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext.jsx'

export function MessageSection({ nomeChat, leftBarStatus }) {

  const { theme, toggleTheme } = useContext(ThemeContext)
  const [ messages, setMessages ] = useState([])

  const fetchMsg = async () => {
    const fetchedMsg = await axios.get(`http://localhost:8080/MessageHistory/Conversation/${localStorage.getItem('userId')}/${nomeChat.id}`)
    setMessages(fetchedMsg.data)
  }

  return (
    nomeChat?.id !== undefined ? (
      <div className={`messageSection ${theme} ${leftBarStatus === 'active' ? 'reduce' : ''}`}>
        <MsgHeader nomeChat={nomeChat} theme={theme} />
        <MsgContainer nomeChat={nomeChat} theme={theme} setMessages={setMessages} messages={messages} fetchMsg={fetchMsg} />
        <MsgInput theme={theme} nomeChat={nomeChat} fetchMsg={fetchMsg} messages={messages} setMessages={setMessages} />
      </div>
    ) : (
      <div className={`messageSection ${theme} ${leftBarStatus === 'active' ? 'reduce' : ''}`}></div>
    )
  )
}