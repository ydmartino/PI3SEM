import React from 'react'
import { MsgInput } from './MsgInput.jsx'
import { MsgContainer } from './MsgContainer.jsx'
import { MsgHeader } from './MsgHeader.jsx'
import { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext.jsx'

export function MessageSection({ nomeChat, leftBarStatus }) {

  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <div className={`messageSection ${theme} ${leftBarStatus == 'active' ? 'reduce' : ''}`}>
        <MsgHeader nomeChat={nomeChat} theme={theme} />
        <MsgContainer nomeChat={nomeChat} theme={theme} />
        <MsgInput theme={theme} />
    </div>
  )
}