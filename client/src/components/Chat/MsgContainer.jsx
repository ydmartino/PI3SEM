import React from 'react'
import { MessageContainer } from './MessageContainer'

export function MsgContainer({ nomeChat, theme, setMessages, messages, fetchMsg }) {

  return (
        <MessageContainer nomeChat={nomeChat} theme={theme} setMessages={setMessages} messages={messages} fetchMsg={fetchMsg} />
  )
}