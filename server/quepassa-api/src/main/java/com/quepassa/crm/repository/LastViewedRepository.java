package com.quepassa.crm.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.quepassa.crm.model.LastViewed;
import com.quepassa.crm.model.PKLastViewed;

@Repository
public interface LastViewedRepository extends JpaRepository<LastViewed, PKLastViewed>{
    
}