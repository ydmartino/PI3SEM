import { connectWebSocket, sendMessage } from '../Context/WebsocketService'
import React, { useState } from 'react';
import axios from 'axios';

export function MsgInput({ theme, nomeChat, fetchMsg }) {
  const [formData, setFormData] = useState({
    message: '',
    fromId: '',
    toId: ''
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

    const updatedFormData = {
      ...formData,
      fromId: localStorage.getItem('userId'),
      toId: nomeChat.id
    };

    sendMessage(updatedFormData);

      setFormData({
        message: '',
        fromId: '',
        toId: ''
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
