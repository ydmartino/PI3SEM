import React, { useEffect, useState, useRef } from 'react';
import { Client } from '@stomp/stompjs';

const StompComponent = () => {
  const [messages, setMessages] = useState([]);
  const [status, setStatus] = useState('Desconectado');
  const stompClientRef = useRef(null); // useRef para persistir o cliente STOMP

  useEffect(() => {
    const token = localStorage.getItem('authToken'); // Adquire o valor de 'token' no localStorage

    // Configuração do cliente STOMP
    const stompClient = new Client({
      brokerURL: 'http://localhost:8080/ws', // URL do servidor STOMP
      reconnectDelay: 5000, // Tentativa de reconexão em 5 segundos
      connectHeaders:{
        Authorization:'Bearer ${token}'
      },
      onConnect: () => {
        console.log('STOMP conectado');
        setStatus('Conectado');

        // Inscrevendo-se em um tópico
        stompClient.subscribe(`/queue/messages/${localStorage.getItem('userId')}`, (message) => {
          console.log('Mensagem recebida:', message.body);
          setMessages((prev) => [...prev, message.body]);
        });
      },
      onStompError: (error) => {
        console.error('Erro no STOMP:', error);
        setStatus('Erro de conexão');
      },
      onDisconnect: () => {
        console.log('STOMP desconectado');
        setStatus('Desconectado');
      },
    });

    // Armazena o cliente no useRef
    stompClientRef.current = stompClient;

    // Ativa a conexão
    stompClient.activate();

    // Cleanup
    return () => {
      console.log('Desconectando STOMP...');
      stompClient.deactivate();
    };
  }, []);

  // Função para enviar mensagens
  const sendMessage = (msg) => {
    const stompClient = stompClientRef.current; // Obtém o cliente do useRef
    if (stompClient && stompClient.connected) {
        const data = {
            fromId: localStorage.getItem('userId'),
            toId: localStorage.getItem('toId'),
            message: msg
        }
      stompClient.publish({
        destination: `/app/SendMessage`, // Endereço no servidor para enviar a mensagem
        body: JSON.stringify(data),
    });
      console.log('Mensagem enviada:', data);
    } else {
      console.error('STOMP não está conectado.');
    }
  };

  return (
    <div>
      <h1>STOMP com React</h1>
      <p>Status: {status}</p>
      <button onClick={() => sendMessage('Ola do cliente STOMP!')}>Enviar Mensagem</button>
      <h2>Mensagens Recebidas:</h2>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
    </div>
  );
};

export default StompComponent;
