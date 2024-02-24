package com.nats.profile.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nats.profile.entity.WorkerEntity;

@Repository
public interface WorkerRepository extends JpaRepository<WorkerEntity, UUID> {
    WorkerEntity findByKcId(String kcId);

    WorkerEntity findByEmail(String email);

}
