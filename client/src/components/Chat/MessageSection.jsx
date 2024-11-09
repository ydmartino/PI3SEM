import React from 'react'
import { MsgInput } from './MsgInput.jsx'
import { MsgContainer } from './MsgContainer.jsx'
import { MsgHeader } from './MsgHeader.jsx'

export function MessageSection({ nomeChat }) {
  return (
    <div className="messageSection">
        <MsgHeader nomeChat={nomeChat} />
        <MsgContainer />
        <MsgInput />
    </div>
  )
}