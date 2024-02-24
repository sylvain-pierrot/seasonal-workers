package com.nats.profile.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;

import com.nats.profile.controllers.ServiceEndpointsBuilder;

import io.nats.client.Connection;
import io.nats.client.ErrorListener;
import io.nats.client.Nats;
import io.nats.client.Options;
import io.nats.service.Service;

@Configuration
public class NatsConfiguration implements CommandLineRunner {

    @Autowired
    private ServiceEndpointsBuilder serviceBuilder;

    @Override
    public void run(String... args) {
        try {
            Connection natsConnection = connect();
            Service profileService = serviceBuilder.createService(natsConnection);
            profileService.startService();
            System.out.println("Connected to NATS server: " +
                    natsConnection.getConnectedUrl());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public Connection connect() throws Exception {
        Options options = new Options.Builder()
                .server("nats://localhost:4222")
                .errorListener(new ErrorListener() {
                })
                .build();

        return Nats.connect(options);
    }

}
