package com.seasonalworkers.profile.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seasonalworkers.profile.entity.WorkerEntity;
import com.seasonalworkers.profile.repository.WorkerRepository;

@Service
public class WorkerService {
    @Autowired
    private WorkerRepository profileRepository;

    public WorkerEntity create(WorkerEntity profile) {
        return profileRepository.save(profile);
    }

    public WorkerEntity getById(int id) {
        return profileRepository.findById(id);
    }

    public List<WorkerEntity> getAll() {
        return profileRepository.findAll();
    }
}
