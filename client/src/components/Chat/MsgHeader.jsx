import React from 'react'

export function MsgHeader({ nomeChat, theme }) {
  return (
    <div className={`messageHeader ${theme}`}>
        <div className="photoMiniature"></div>
        <div className="headerData">
            <p className='nameHeader'>{nomeChat}</p>
            <p className='statusHeader'>On-line</p>
        </div>
    </div>
  )
}