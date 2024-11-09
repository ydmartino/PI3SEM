import React from 'react'

export function MsgHeader({ nomeChat }) {
  return (
    <div className="messageHeader">
        <div className="photoMiniature"></div>
        <div className="headerData">
            <p className='nameHeader'>{nomeChat}</p>
            <p className='statusHeader'>On-line</p>
        </div>
    </div>
  )
}