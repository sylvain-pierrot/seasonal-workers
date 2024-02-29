package com.nats.profile;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class NatsApplication {

    public static void main(String[] args) {
        try {
            SpringApplication.run(NatsApplication.class, args);

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

}
