package com.quepassa.crm.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.quepassa.crm.model.LastViewed;
import com.quepassa.crm.repository.LastViewedRepository;

@Service
public class LastViewedService {

    @Autowired
    private LastViewedRepository lastViewedRepository;

    public LastViewed saveLastViewed(LastViewed lastViewed){
        return lastViewedRepository.save(lastViewed);
    }

    public List<LastViewed> getAllLastViewed(){
        return lastViewedRepository.findAll();
    }

}
