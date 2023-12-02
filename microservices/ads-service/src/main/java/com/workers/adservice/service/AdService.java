package com.workers.adservice.service;

import org.springframework.stereotype.Service;

import com.workers.adservice.entity.AdEntity;
import com.workers.adservice.repository.AdRepository;

import org.springframework.beans.factory.annotation.Autowired;

@Service
public class AdService {

    @Autowired
    private AdRepository adRepository;

    public AdService(AdRepository adRepository) {
        this.adRepository = adRepository;
    }

    public AdEntity createAvailability(AdEntity adEntity) {
        adEntity.setAdType("AVAILABILITY");
        return adRepository.save(adEntity);
    }

}
