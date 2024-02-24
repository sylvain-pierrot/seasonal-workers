package com.nats.profile.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.google.protobuf.InvalidProtocolBufferException;
import com.nats.profile.entity.WorkerEntity;
import com.nats.profile.repository.WorkerRepository;
import io.nats.client.Connection;
import io.nats.service.ServiceMessage;
import models.Profile.User;
import request.RequestOuterClass.Request;
import response.ResponseOuterClass.Response;
import services.Profile.CreateUserProfileResponse;
import services.Profile.UpdateUserProfileResponse;
import response.ResponseOuterClass.Error;

@Component
public class NatsWorkerService {

    @Autowired
    private final WorkerRepository repository;

    public NatsWorkerService(WorkerRepository repository) {
        this.repository = repository;
    }

    public void handleCreateWorker(ServiceMessage request, Connection nc) throws InvalidProtocolBufferException {
        byte[] data = request.getData();
        Request decoded = Request.parseFrom(data);
        User user = decoded.getCreateUserProfileRequest().getProfile();
        String requestId = decoded.getRequestId();
        String kcId = user.getKcId();
        WorkerEntity worker = WorkerEntity.fromProto(user);
        repository.save(worker);

        Response response = Response.newBuilder()
                .setCreateUserProfileResponse(CreateUserProfileResponse.newBuilder().setId(kcId))
                .setRequestId(requestId)
                .build();

        request.respond(nc, response.toByteArray());

    }

    public void handleUpdateWorker(ServiceMessage request, Connection nc) throws InvalidProtocolBufferException {
        byte[] data = request.getData();
        Request decoded = Request.parseFrom(data);
        User user = decoded.getUpdateUserProfileRequest().getProfile();
        String requestId = decoded.getRequestId();
        String kcId = user.getKcId();
        WorkerEntity worker = WorkerEntity.fromProto(user);
        WorkerEntity existingWorker = repository.findByKcId(kcId);

        if (existingWorker == null) {
            Response response = Response.newBuilder()
                    .setError(Error.newBuilder().setErrorMessage("Worker not found").setErrorCode(404))
                    .setRequestId(requestId)
                    .build();
            request.respond(nc, response.toByteArray());
        }

        worker.setId(existingWorker.getId());
        repository.save(worker);

        Response response = Response.newBuilder()
                .setUpdateUserProfileResponse(UpdateUserProfileResponse.newBuilder().setId(kcId))
                .setRequestId(requestId)
                .build();

        request.respond(nc, response.toByteArray());
    }
}