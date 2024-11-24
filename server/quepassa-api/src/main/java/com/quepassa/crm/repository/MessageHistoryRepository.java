package com.quepassa.crm.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.quepassa.crm.model.MessageHistory;


@Repository
public interface MessageHistoryRepository extends JpaRepository<MessageHistory, Integer>{

    List<MessageHistory> findByFromId(String fromId);
    List<MessageHistory> findByToId(String fromId);
    List<MessageHistory> findByFromIdAndToId(String fromId, String toId);

    @Query("""
    SELECT m
    FROM MessageHistory m 
    WHERE 
        (m.fromId = :userId OR m.toId = :userId) 
        AND m.dateTime = (
            SELECT MAX(m2.dateTime) 
            FROM MessageHistory m2 
            WHERE (m2.fromId = m.fromId AND m2.toId = m.toId) 
               OR (m2.fromId = m.toId AND m2.toId = m.fromId))""")
    List<MessageHistory> findRecentMessagesForUser(@Param("userId") String userId); //Método para retornar a última mensagem de cada conversa


}
