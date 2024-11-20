package com.quepassa.crm.service;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Stream;

import org.springframework.stereotype.Service;

import com.quepassa.crm.model.MessageHistory;
import com.quepassa.crm.repository.MessageHistoryRepository;

@Service
public class MessageHistoryService {

    
    private final MessageHistoryRepository messageHistoryRepository;

    public MessageHistoryService(MessageHistoryRepository messageHistoryRepository){

        this.messageHistoryRepository = messageHistoryRepository;

    }

    public MessageHistory saveMessage(MessageHistory message) {
        return messageHistoryRepository.save(message);
    }


    public List<MessageHistory> getAllMessagesForUser(String userId){
        //Mensagens enviadas e recebidas
        List<MessageHistory> sentMessages = messageHistoryRepository.findByFromId(userId);
        List<MessageHistory> receivedMessages = messageHistoryRepository.findByToId(userId);
        //Ordena mensagens por data/hora
        return Stream   .concat(sentMessages.stream(), receivedMessages.stream())
                        .sorted(Comparator.comparing(MessageHistory::getDateTime))
                        .toList();

    }

}
