import React, { useState } from 'react';
import StompService from '../Context/StompService'

export function MsgInput({ theme, setMessages }) {
  const [formData, setFormData] = useState({ message: '' });

  // Função para enviar mensagens
  const sendMessage = (msg) => {
    const stompClient = StompService.getClient(); // Obtém o cliente do singleton
    if (stompClient && stompClient.connected) {
      const data = {
        fromId: localStorage.getItem('userId'),
        toId: localStorage.getItem('toId'),
        message: msg,
      };

      stompClient.publish({
        destination: `/app/SendMessage`,
        headers: { Authorization: `Bearer ${localStorage.getItem('authToken')}` },
        body: JSON.stringify(data),
      });

      const hora = new Date();
      const toSend = {
        message: msg,
        dateTime: hora.toISOString(),
        fromId: localStorage.getItem('userId'),
        toId: localStorage.getItem('toId'),
      };
      setMessages((prev) => [...prev, toSend]);
    } else {
      console.error('STOMP não está conectado.');
    }
  };

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(formData.message);
    setFormData({ message: '' });
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
        maxLength={255}
      />
      <p className={`counter ${theme}`}>{formData.message.length}</p>
      <button type="submit" className={`sendBtn ${theme}`}></button>
    </form>
  );
}
