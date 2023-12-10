package com.seasonalworkers.adservice.service;

import org.springframework.stereotype.Service;

import com.seasonalworkers.adservice.entity.AdEntity;
import com.seasonalworkers.adservice.repository.AdRepository;

import org.springframework.beans.factory.annotation.Autowired;

@Service
public class AdService {

    @Autowired
    private AdRepository adRepository;

    public AdService(AdRepository adRepository) {
        this.adRepository = adRepository;
    }

    public AdEntity createAvailability(AdEntity adEntity) {
        return adRepository.save(adEntity);
    }

}
