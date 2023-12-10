package com.seasonalworkers.adservice.controller;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.seasonalworkers.adservice.entity.AdEntity;
import com.seasonalworkers.adservice.service.AdService;

import jakarta.validation.Valid;

import org.springframework.security.core.Authentication;

@RestController
@RequestMapping("ads")
public class AdController {

    @Autowired
    private AdService adService;

    @PostMapping("/workers/availability")
    public ResponseEntity<AdEntity> createAvailability(@RequestBody @Valid AdEntity ad) throws Exception {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String userId = authentication.getName();
        ad.setUserId(userId);
        AdEntity adResponse = adService.createAvailability(ad);
        return ResponseEntity.ok(adResponse);
    }

}
