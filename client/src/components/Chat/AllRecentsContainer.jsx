import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Recent from './Recent'
import { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'
import StompService from '../Context/StompService'
import { HttpContext } from '../Context/HttpContext'

export function AllRecentsContainer({ search, setNomeChat, nomeChat, activeTab, toggleLeftBar }) {

    const { theme, toggleTheme } = useContext(ThemeContext)
    const { linkToWeb } = useContext(HttpContext)
    const [ recents, setRecents ] = useState([])

    async function getRecents () {
        const fetchRecents = await axios.get(`${linkToWeb}/MessageHistory/User/${localStorage.getItem('userId')}/RecentMessages`)
        
        if(fetchRecents.data != recents){
            const sortedRecents = fetchRecents.data.sort((a, b) => new Date(b.dateTime) - new Date(a.dateTime))
            setRecents(sortedRecents)
        }
      }
    
      useEffect(() => {
        getRecents();
      }, [])

      useEffect(() => {    
        const timer = setTimeout(() => {
          console.log(`Subscribing to messages for Recents`);
          const stompClient = StompService.getClient();
    
          // Verifica se o cliente está conectado
          if (!stompClient || !stompClient.connected) {
            console.error('STOMP não está conectado.');
            return;
          }
      
          const userId = localStorage.getItem('userId');
          // Inscreve-se no tópico de mensagens
          const subscription = stompClient.subscribe(
            `/queue/recent-messages/${userId}`,
            (receivedMsg) => {
              /*const parsedRecents = JSON.parse(receivedMsg.body)[0];
              console.log("Mensagem recebida:", parsedRecents);
              setRecents((prev) => [...prev, parsedRecents]);*/
              getRecents()
            }
          );
      
          return () => {
            subscription.unsubscribe();
            console.log('Desfeito')
          };
        }, 1000)

        return () => clearTimeout(timer)
      }, []);

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