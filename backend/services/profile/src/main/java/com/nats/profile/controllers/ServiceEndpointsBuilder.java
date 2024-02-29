package com.nats.profile.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.nats.profile.service.NatsWorkerService;

import io.nats.client.Connection;
import io.nats.service.Group;
import io.nats.service.Service;
import io.nats.service.ServiceBuilder;
import io.nats.service.ServiceEndpoint;

@Component
public class ServiceEndpointsBuilder {

    @Autowired
    private NatsWorkerService workerService;

    public Service createService(Connection natsConnection) {
        Group workersGroup = new Group("PROFILE.workers");

        ServiceEndpoint createWorker = ServiceEndpoint.builder()
                .group(workersGroup)
                .endpointName("create")
                .handler(msg -> {
                    try {
                        workerService.handleCreateWorker(msg, natsConnection);
                    } catch (Exception e) {
                        e.printStackTrace();
                    }
                })

                .build();

        ServiceEndpoint updateWorker = ServiceEndpoint.builder()
                .group(workersGroup)
                .endpointName("update")
                .handler(msg -> {
                    try {
                        workerService.handleUpdateWorker(msg, natsConnection);
                    } catch (Exception e) {
                        e.printStackTrace();
                    }
                })
                .build();

        return new ServiceBuilder()
                .connection(natsConnection)
                .name("PROFILE")
                .description("Profile service")
                .version("0.0.1")
                .addServiceEndpoint(createWorker)
                .addServiceEndpoint(updateWorker)
                .build();
    }
}

// Here list of all the methods from we need to implement the endpoints

// Delete
// public ResponseEntity<WorkerEntity> delete() {
// Authentication authentication =
// SecurityContextHolder.getContext().getAuthentication();
// String userId = authentication.getName();
// WorkerEntity worker = workerService.getById(userId);
// worker.setDeleted(true);
// workerService.update(worker);
// return ResponseEntity.ok(worker);
// }

// Update User
// public ResponseEntity<WorkerEntity> update(@RequestBody @Valid WorkerEntity
// worker) {
// Authentication authentication =
// SecurityContextHolder.getContext().getAuthentication();
// String userId = authentication.getName();
// worker.setId(userId);
// WorkerEntity seasonalWorker = workerService.update(worker);
// return ResponseEntity.ok(seasonalWorker);
// }

// Update picture
// public ResponseEntity<WorkerEntity> savePhoto(@RequestParam("picture")
// MultipartFile file) throws Exception {
// Authentication authentication =
// SecurityContextHolder.getContext().getAuthentication();
// String userId = authentication.getName();
// WorkerEntity worker = workerService.getById(userId);

// String extension =
// file.getOriginalFilename().substring(file.getOriginalFilename().lastIndexOf("."));
// String fileName = UUID.randomUUID().toString() + extension;
// String folderName = "pictures";
// String subFolder = "worker-" + userId;

// String fileFullPath = minioStorageService.buildPathString(folderName,
// subFolder, fileName);

// minioStorageService.proccessFile(file, fileFullPath);
// worker.setPicturePath(fileFullPath);
// workerService.update(worker);
// return ResponseEntity.ok(worker);
// }
// ------------
// save cv
// public ResponseEntity<WorkerEntity> saveCv(@RequestParam("cv") MultipartFile
// file) throws Exception {
// Authentication authentication =
// SecurityContextHolder.getContext().getAuthentication();
// String userId = authentication.getName();
// WorkerEntity worker = workerService.getById(userId);

// String extension =
// file.getOriginalFilename().substring(file.getOriginalFilename().lastIndexOf("."));
// String fileName = UUID.randomUUID().toString() + extension;
// String folderName = "cv";
// String subFolder = "worker-" + userId;

// String fileFullPath = minioStorageService.buildPathString(folderName,
// subFolder, fileName);

// minioStorageService.proccessFile(file, fileFullPath);
// worker.setCvPath(fileFullPath);
// workerService.update(worker);
// return ResponseEntity.ok(worker);
// }
// -----
