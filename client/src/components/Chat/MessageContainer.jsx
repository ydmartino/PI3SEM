import React, { useEffect, useRef } from 'react';
import { Message } from './Message';

export function MessageContainer({ nomeChat, theme, setMessages, messages, fetchMsg }) {
  const bottomRef = useRef(null);

  useEffect(() => {
    // Busca mensagens quando o componente é montado ou o nome do chat muda
    fetchMsg();
  }, [nomeChat]);

  useEffect(() => {
    // Sempre rola para o final quando as mensagens mudam
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

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
