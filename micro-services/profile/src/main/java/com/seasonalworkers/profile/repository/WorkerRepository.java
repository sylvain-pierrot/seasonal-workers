package com.seasonalworkers.profile.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.seasonalworkers.profile.entity.WorkerEntity;

@Repository
public interface WorkerRepository extends JpaRepository<WorkerEntity, Integer> {
    WorkerEntity findById(int id);
}