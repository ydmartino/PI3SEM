import axios from 'axios';
import React, { useEffect, useRef } from 'react'

export function Message({ nomeChat, msg, theme }) {

    const messageRef = useRef(null);

    useEffect(() => {
        /* const user = localStorage.getItem('userId')
        if(msg.viewed == false && user != msg.fromId){
            axios.post(`http://localhost:8080/Viewed/${msg.id}`)
        } */
      }, []);

    const classtype = (nomeChat.id == msg.fromId ? "other-message" : "own-message")
    const convertedTime = new Date(msg.dateTime).getTime();
    const hours = new Date(convertedTime).toLocaleTimeString()
    // 

    return (
        <li className={`${classtype} ${theme}`} ref={messageRef}>
            <div className="nomeMsg">{msg.fromId == nomeChat.id ? nomeChat.name : "Você"}</div>
            <div className="msgInfo">
                <div className="msg">{msg.message}</div>
                <div className="time">{hours}</div>
            </div>
        </li>
    )
}
