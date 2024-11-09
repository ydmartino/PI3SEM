import React from 'react'

export function Filter({ setSearch }) {
  return (
    <div className="filterSection">
        <input type="text" className='filter' placeholder='Pesquisar...' onChange={(e) => setSearch(e.target.value)}/>
    </div>
  )
}