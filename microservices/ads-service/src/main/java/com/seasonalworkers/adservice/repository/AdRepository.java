package com.seasonalworkers.adservice.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.seasonalworkers.adservice.entity.AdEntity;

@Repository
public interface AdRepository extends JpaRepository<AdEntity, UUID> {


}
