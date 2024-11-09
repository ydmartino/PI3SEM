package com.quepassa.crm.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.quepassa.crm.model.MessageHistory;

@Repository
public interface MessageHistoryRepository extends JpaRepository<MessageHistory, Integer>{

}
