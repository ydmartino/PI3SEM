import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { HttpContext } from '../Context/HttpContext'

export function MsgHeader({ nomeChat, theme }) {

  const [ status, setStatus ] = useState(false)
  const { linkToWeb } = useContext(HttpContext)

  const fetchUserStatus = async () => {
    const toId = localStorage.getItem('toId')
    const online = await axios.get(`${linkToWeb}/Api/UserStatus?userId=${toId}`)
    setStatus(online.data)
  }

  useEffect(() => {
    const intervalo = setInterval(() => {
      fetchUserStatus();
    }, 5000);

    return () => {
      clearInterval(intervalo);
      console.log('Intervalo limpo.');
    };
  }, []);

  return (
    <div className={`messageHeader ${theme}`}>
        <div className="photoMiniature"></div>
        <div className="headerData">
            <p className='nameHeader'>{nomeChat.name}</p>
            <p className='statusHeader'>{status ? 'On-line' : ''}</p>
        </div>
    </div>
  )
}