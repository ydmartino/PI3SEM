import React, { useState } from 'react';
import axios from 'axios';

export function MsgInput({ theme, nomeChat }) {
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

    // Consolidar todas as atualizações do estado em uma única chamada
    const updatedFormData = {
      ...formData,
      fromId: localStorage.getItem('userId'),
      toId: nomeChat.id
    };

    console.log(formData)

    try {
      await axios.post('http://localhost:8080/MessageHistory', updatedFormData);
      // Limpar o estado após enviar
      setFormData({
        message: '',
        fromId: '',
        toId: ''
      });
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
    }
  };

  return (
    <form className={`inputDiv ${theme}`} onSubmit={handleSubmit}>
      <input
        type="text"
        name="message"
        className={`messageInput ${theme}`}
        placeholder="Digite sua mensagem..."
        value={formData.message}
        onChange={handleChange}
      />
      <button type="submit" className={`sendBtn ${theme}`}></button>
    </form>
  );
}
