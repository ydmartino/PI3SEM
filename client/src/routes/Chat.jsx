import React, { useState, useEffect } from 'react';
import '../assets/chat.css';
import { MessageSection } from '../components/Chat/MessageSection';
import ContactSection from '../components/Chat/ContactSection';
import { useContext } from 'react';
import { ThemeContext } from '../components/Context/ThemeContext';
import StompService from '../components/Context/StompService'; // Importa o serviço STOMP

function Chat() {
  const { theme } = useContext(ThemeContext);
  const [nomeChat, setNomeChat] = useState('');
  const [search, setSearch] = useState('');
  const [leftBarStatus, setLeftBarStatus] = useState('inactive');
  const [messages, setMessages] = useState([]); // Estado para armazenar mensagens

  function toggleLeftBar() {
    setLeftBarStatus((prevStatus) => (prevStatus === 'active' ? 'inactive' : 'active'));
  }

  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.removeItem('toId');
    };

    // Adiciona o evento
    window.addEventListener('beforeunload', handleBeforeUnload);

    // Remove o evento ao desmontar o componente
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  // Inicializa o STOMP
  useEffect(() => {
    StompService.connect(
      () => {
        console.log('STOMP conectado no Chat');
      },
      (error) => {
        console.error('Erro ao conectar ao STOMP:', error);
      }
    );

    // Cleanup da conexão STOMP ao desmontar
    return () => {
      StompService.disconnect();
    };
  }, []);

  return (
    <div className={`page ${theme}`}>
      <div className="chatContainer">
        <ContactSection
          leftBarStatus={leftBarStatus}
          toggleLeftBar={toggleLeftBar}
          setSearch={setSearch}
          search={search}
          setNomeChat={setNomeChat}
          nomeChat={nomeChat}
        />
        <MessageSection
          nomeChat={nomeChat}
          leftBarStatus={leftBarStatus}
          messages={messages}
          setMessages={setMessages}
        />
      </div>
    </div>
  );
}

export default Chat;
