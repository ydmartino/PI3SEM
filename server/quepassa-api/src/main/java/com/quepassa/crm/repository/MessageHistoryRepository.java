package com.quepassa.crm.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.quepassa.crm.model.MessageHistory;


@Repository
public interface MessageHistoryRepository extends JpaRepository<MessageHistory, Integer>{

    List<MessageHistory> findByFromId(String fromId);
    List<MessageHistory> findByToId(String fromId);
    List<MessageHistory> findByFromIdAndToId(String fromId, String toId);

}
