import React from 'react'

export function Message({ nomeChat, msg, theme }) {

    const classtype = (nomeChat.id == msg.fromId ? "other-message" : "own-message")
    const convertedTime = new Date(msg.dateTime).getTime();
    const hours = new Date(convertedTime).toLocaleTimeString()

    return (
        <li className={`${classtype} ${theme}`}>
            <div className="nomeMsg">{msg.fromId == nomeChat.id ? nomeChat.name : "Você"}</div>
            <div className="msgInfo">
                <div className="msg">{msg.message}</div>
                <div className="time">{hours}</div>
            </div>
        </li>
    )
}
