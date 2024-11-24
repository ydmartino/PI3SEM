import React, { useEffect, useState, useRef } from 'react';
import { Client } from '@stomp/stompjs';
import axios from 'axios';

export function MsgInput({ theme, nomeChat, fetchMsg, messages, setMessages }) {

  const [status, setStatus] = useState('Desconectado');
  const stompClientRef = useRef(null); // useRef para persistir o cliente STOMP

  useEffect(() => {
    const token = localStorage.getItem('authToken'); // Adquire o valor de 'token' no localStorage

    // Configuração do cliente STOMP
    const stompClient = new Client({
      brokerURL: 'http://localhost:8080/ws', // URL do servidor STOMP
      reconnectDelay: 5000, // Tentativa de reconexão em 5 segundos
      connectHeaders:{
        Authorization:`Bearer ${token}`
      },
      onConnect: () => {
        console.log('STOMP conectado');
        setStatus('Conectado');

        // Inscrevendo-se em um tópico
        stompClient.subscribe(`/queue/messages/${localStorage.getItem('userId')}`, (receivedMsg) => {
          console.log('Mensagem recebida:', receivedMsg.body);
          setMessages((prev) => [...prev, receivedMsg.body]);
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
        destination: `/app/SendMessage`,
        headers: {Authorization:`Bearer ${localStorage.getItem('authToken')}`},
        body: JSON.stringify(data),
    });
      console.log('Mensagem enviada:', data);
    } else {
      console.error('STOMP não está conectado.');
    }
  };
  
  const [formData, setFormData] = useState({
    message: ''
  });

  const handleDate = () => {
    return new Date().toLocaleString('pt-BR');
  };

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    sendMessage(formData.message)

    setFormData({
      message: ''
    });
  };

  return (
    <form className={`inputDiv ${theme}`} onSubmit={handleSubmit}>
      <input
        type="text"
        name="message"
        className={`messageInput ${theme}`}
        placeholder="Sua mensagem (Max: 255 carácteres)"
        value={formData.message}
        onChange={handleChange}
        autoComplete='none'
        maxLength={255}
      />
      <p className={`counter ${theme}`}>{formData.message.length}</p>
      <button type="submit" className={`sendBtn ${theme}`}></button>
    </form>
  );
}
