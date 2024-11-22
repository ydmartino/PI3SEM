import SockJS from 'sockjs-client/dist/sockjs';
import { Client } from '@stomp/stompjs';

let stompClient = null;
let global = window

export const connectWebSocket = (onMessageReceived) => {
    const socket = new SockJS('http://localhost:8080/ws');
    stompClient = new Client({
        webSocketFactory: () => socket,
        reconnectDelay: 5000, // Tentar reconectar após 5 segundos
        debug: (str) => console.log(str),
        onConnect: () => {
            console.log('WebSocket connected');
            
            // Subscribing to a specific user's queue (change to your user ID dynamically)
            stompClient.subscribe('/queue/messages/2', (message) => {
                onMessageReceived(JSON.parse(message.body));
            });
        },
        onStompError: (error) => {
            console.error('WebSocket error:', error);
        },
    });

    stompClient.activate();
};

export const sendMessage = (message) => {
    if (stompClient && stompClient.connected) {
        stompClient.publish({
            destination: '/app/SendMessage',
            body: JSON.stringify(message),
        });
    } else {
        console.error('WebSocket is not connected.');
    }
};