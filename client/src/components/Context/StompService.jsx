// src/services/StompService.js
import { Client } from '@stomp/stompjs';

const StompService = (() => {
  let stompClient = null;

  const connect = (onConnectCallback, onErrorCallback) => {
    if (!stompClient) {
      const token = localStorage.getItem('authToken'); // Obtém o token de autenticação

      stompClient = new Client({
        brokerURL: `ws://localhost:8080/ws?token=${token}`,
        reconnectDelay: 5000, // Reconectar automaticamente em caso de desconexão
        onConnect: onConnectCallback,
        onStompError: onErrorCallback,
        onDisconnect: () => {
          console.log('STOMP desconectado.');
        },
      });

      stompClient.activate();
    }
  };

  const getClient = () => {
    if (!stompClient) {
      throw new Error('STOMP Client não está conectado. Chame "connect" primeiro.');
    }
    return stompClient;
  };

  const disconnect = () => {
    if (stompClient) {
      stompClient.deactivate();
      stompClient = null;
    }
  };

  return { connect, getClient, disconnect };
})();

export default StompService;
