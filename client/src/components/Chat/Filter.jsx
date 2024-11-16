import React from 'react'

export function Filter({ setSearch, theme }) {
  return (
    <div className="filterSection">
        <input type="text" className={`filter ${theme}`} placeholder='Pesquisar...' onChange={(e) => setSearch(e.target.value)}/>
    </div>
  )
}