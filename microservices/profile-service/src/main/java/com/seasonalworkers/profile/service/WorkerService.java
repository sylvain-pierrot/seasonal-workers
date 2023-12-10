package com.seasonalworkers.profile.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.seasonalworkers.profile.entity.WorkerEntity;
import com.seasonalworkers.profile.repository.WorkerRepository;

@Service
public class WorkerService {

    @Autowired
    private final WorkerRepository repository;

    public WorkerService(WorkerRepository repository) {
        this.repository = repository;
    }

    public WorkerEntity create(WorkerEntity worker) {
        return repository.save(worker);
    }

    public WorkerEntity update(WorkerEntity worker) {
        return repository.save(worker);
    }

    public WorkerEntity getById(String id) {
        return repository.findById(id).orElseThrow(
                () -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Worker not found"));
    }

}