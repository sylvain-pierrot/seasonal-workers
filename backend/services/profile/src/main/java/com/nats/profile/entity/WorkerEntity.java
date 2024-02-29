package com.nats.profile.entity;

import java.util.UUID;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;
import lombok.Getter;
import lombok.Setter;
import models.Profile.User;

@Getter
@Setter
@Entity
@Table(name = "workers", uniqueConstraints = {
        @UniqueConstraint(columnNames = "kc_id"),
        @UniqueConstraint(columnNames = "email")
})
public class WorkerEntity {
    @Id()
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(name = "kc_id")
    private String kcId;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    private String email;

    private String gender;

    @Column(name = "birth_date")
    private String birthDate;

    private String country;

    private String phone;

    private String description;

    private boolean deleted;

    public static WorkerEntity fromProto(User worker) {
        WorkerEntity entity = new WorkerEntity();
        entity.kcId = worker.getKcId();
        entity.firstName = worker.getFirstName();
        entity.lastName = worker.getLastName();
        entity.email = worker.getEmail();
        entity.gender = worker.getGender();
        entity.birthDate = worker.getBirthDate();
        entity.country = worker.getCountry();
        entity.phone = worker.getPhone();
        entity.description = worker.getDescription();
        entity.deleted = worker.getDeleted();
        return entity;
    }

    public User toProto() {
        User.Builder builder = User.newBuilder();
        builder.setKcId(kcId);
        builder.setFirstName(firstName);
        builder.setLastName(lastName);
        builder.setEmail(email);
        builder.setGender(gender);
        builder.setBirthDate(birthDate);
        builder.setCountry(country);
        builder.setPhone(phone);
        builder.setDescription(description);
        builder.setDeleted(deleted);
        return builder.build();
    }

    public void setKcId(String kcId) {
        this.kcId = kcId;
    }

    public UUID getId() {
        return this.id;
    }

    public void setId(UUID id) {
        this.id = id;
    }
}
