import React from 'react'

export function Message({ nomeChat, de, msg, time, theme }) {

    const classtype = (nomeChat == de ? "other-message" : "own-message")

    const convertedTime = new Date(time).getTime();
    const hours = new Date(convertedTime).toLocaleTimeString()

    return (
        <li className={`${classtype} ${theme}`}>
            <div className="nomeMsg">{de}</div>
            <div className="msgInfo">
                <div className="msg">{msg}</div>
                <div className="time">{hours}</div>
            </div>
        </li>
    )
}
