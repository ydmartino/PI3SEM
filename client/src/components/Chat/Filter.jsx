import React from 'react'

export function Filter({ setSearch, theme, filterStatus, leftBarStatus }) {
  return (
    <div className={`filterSection ${leftBarStatus == 'active' ? 'show' : ''}`}>
        <input type="text" className={`filter ${theme} ${leftBarStatus == 'active' ? 'show' : ''}`} placeholder='Pesquisar...' onChange={(e) => setSearch(e.target.value)}/>
    </div>
  )
}