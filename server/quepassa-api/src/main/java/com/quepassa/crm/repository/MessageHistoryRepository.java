package com.quepassa.crm.repository;

import java.util.List;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.quepassa.crm.model.MessageHistory;
import com.quepassa.crm.service.MessageWithSenderDTO;


@Repository
public interface MessageHistoryRepository extends JpaRepository<MessageHistory, Integer>{


    List<MessageHistory> findByFromId(UUID fromId);
    List<MessageHistory> findByToId(UUID fromId);
    List<MessageHistory> findByFromIdAndToId(UUID fromId, UUID toId);

    @Query("""
        SELECT new com.quepassa.crm.service.MessageWithSenderDTO(
            m.id, m.message,
            cFrom.name, cTo.name,
            m.dateTime, m.fromId, m.toId
        )
        FROM MessageHistory m
        JOIN Contacts cFrom ON cFrom.id = m.fromId
        JOIN Contacts cTo ON cTo.id = m.toId
        WHERE (m.fromId = :userId OR m.toId = :userId)
        AND m.dateTime = (
            SELECT MAX(m2.dateTime)
            FROM MessageHistory m2
            WHERE (m2.fromId = m.fromId AND m2.toId = m.toId)
               OR (m2.fromId = m.toId AND m2.toId = m.fromId)
        )""")
    List<MessageWithSenderDTO> findRecentMessagesForUser(@Param("userId") UUID userId);
        

}
