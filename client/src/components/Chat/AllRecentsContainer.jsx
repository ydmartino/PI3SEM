import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Recent from './Recent'
import { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'

export function AllRecentsContainer({ search, setNomeChat, nomeChat, activeTab, toggleLeftBar }) {

    const { theme, toggleTheme } = useContext(ThemeContext)
    const [ recents, setRecents ] = useState([])

    async function getRecents () {
        const fetchRecents = await axios.get(`http://localhost:8080/MessageHistory/User/${localStorage.getItem('userId')}/RecentMessages`)
        
        if(fetchRecents.data != recents){
            const sortedRecents = fetchRecents.data.sort((a, b) => new Date(b.dateTime) - new Date(a.dateTime))
            setRecents(sortedRecents)
        }
      }
    
      useEffect(() => {
        getRecents();
      }, [])

  return (
    <div className={`recentConv ${activeTab === 'recents' ? 'show' : ''} ${theme}`}>
        {recents
        //.filter((contact) => contact.name.toLowerCase().includes(search.toLowerCase()))
        .map((contact) => (
            <Recent contact={contact} setNomeChat={setNomeChat} nomeChat={nomeChat} toggleLeftBar={toggleLeftBar} theme={theme} />
        ))}
    </div>
  )
}