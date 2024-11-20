package com.quepassa.crm.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.quepassa.crm.model.MessageHistory;
import java.util.List;


@Repository
public interface MessageHistoryRepository extends JpaRepository<MessageHistory, Integer>{

    List<MessageHistory> findByFromId(int fromId);
    List<MessageHistory> findByToId(int fromId);
}
