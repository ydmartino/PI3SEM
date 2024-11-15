import React, { useEffect } from 'react'
import { Message } from './Message'

export function MessageContainer({ nomeChat }) {

    useEffect(() => {
        const doc = document.getElementsByClassName('messageList')[0]
        doc.scrollTo(0, doc.scrollHeight)
      }, [ nomeChat ])

    const messages = [
        {
          de: "Diego",
          para: "Victor",
          msg: "To fazendo aquele cursinho da Asimov",
          timestamp: '2024-11-14T09:17:12'
        },
        {
          de: "Diego",
          para: "Victor",
          msg: "Tb",
          timestamp: '2024-11-14T09:17:00'
        },
        {
          de: "Victor",
          para: "Diego",
          msg: "Tranquilo, e tu?",
          timestamp: '2024-11-14T09:16:32'
        },
        {
          de: "Diego",
          para: "Victor",
          msg: "Como q ta?",
          timestamp: '2024-11-14T09:15:55'
        },
        {
          de: "Victor",
          para: "Diego",
          msg: "Salveeeeeee",
          timestamp: '2024-11-14T08:45:32'
        },
        {
          de: "Diego",
          para: "Victor",
          msg: "Eae",
          timestamp: '2024-11-14T08:30:17'
        },
      ]

    return (
        <div className="messageContainer">
            <ul className='messageList'>
            {
              messages.sort((a,b) => new Date(a.timestamp) - new Date(b.timestamp))
              .map((message) => (
                  <Message nomeChat={nomeChat} de={message.de} msg={message.msg} time={message.timestamp} />
              ))
            }
            </ul>
        </div>
    )
}