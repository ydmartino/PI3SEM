import React, { useEffect, useRef } from 'react';
import { Message } from './Message';
import StompService from '../Context/StompService'; // Importa o serviço STOMP

export function MessageContainer({ nomeChat, theme, setMessages, messages, fetchMsg }) {
  const bottomRef = useRef(null);

  useEffect(() => {
    // Busca mensagens ao mudar de chat
    fetchMsg();
  }, [nomeChat]);

  useEffect(() => {
    // Sempre rola para o final quando as mensagens mudam
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (!nomeChat) return; // Não inscreve se o chat não está definido

    console.log(`Subscribing to messages for chat: ${nomeChat}`);
    const stompClient = StompService.getClient();

    // Verifica se o cliente está conectado
    if (!stompClient || !stompClient.connected) {
      console.error('STOMP não está conectado.');
      return;
    }

    // Inscreve-se no tópico de mensagens
    const subscription = stompClient.subscribe(
      `/queue/messages/${localStorage.getItem('userId')}`,
      (receivedMsg) => {
        const parsedMsg = JSON.parse(receivedMsg.body);
        if (parsedMsg.fromId === localStorage.getItem('toId')) {
          setMessages((prev) => [...prev, parsedMsg]);
        }
      }
    );

    // Cleanup ao desmontar ou quando o nome do chat mudar
    return () => {
      console.log('Unsubscribing from messages...');
      subscription.unsubscribe();
    };
  }, [nomeChat, setMessages]);

  return (
    <div className="messageContainer" style={{ overflowY: 'auto', maxHeight: '100vh' }}>
      <ul className="messageList">
        {messages.map((message) => (
          <Message key={message.id} nomeChat={nomeChat} msg={message} theme={theme} />
        ))}
        <li ref={bottomRef} style={{ visibility: 'hidden' }}>.</li>
      </ul>
    </div>
  );
}
