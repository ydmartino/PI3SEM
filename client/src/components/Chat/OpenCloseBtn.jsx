import React from 'react'

export function OpenCloseBtn({ toggleLeftBar }) {
  return (
    <div className="openCloseBtn" onClick={toggleLeftBar}></div>
  )
}