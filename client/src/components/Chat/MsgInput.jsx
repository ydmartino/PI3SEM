import React from 'react'

export function MsgInput() {
  return (
        <div className="inputDiv">
            <input type="text" className="messageInput" placeholder='Digite sua mensagem...' />
            <button type='submit' className='sendBtn'></button>
        </div>
  )
}