import React from 'react'

export function MsgInput({ theme }) {
  return (
        <div className={`inputDiv ${theme}`}>
            <input type="text" className={`messageInput ${theme}`} placeholder='Digite sua mensagem...' />
            <button type='submit' className={`sendBtn ${theme}`}></button>
        </div>
  )
}