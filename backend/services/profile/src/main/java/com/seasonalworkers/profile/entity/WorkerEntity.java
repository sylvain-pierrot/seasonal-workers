package com.seasonalworkers.profile.entity;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "workers")
public class WorkerEntity {
    @Id
    private String id;

    @Column(name = "first_name")
    @NotBlank(message = "First name is mandatory")
    private String firstName;

    @Column(name = "last_name")
    @NotBlank(message = "Last name is mandatory")
    private String lastName;

    @NotBlank(message = "Email is mandatory")
    private String email;

    @NotBlank(message = "Gender is mandatory")
    private String gender;

    @NotNull(message = "Birthday is mandatory")
    private Date birthday;

    @NotBlank(message = "Nationality is mandatory")
    private String nationality;

    @NotBlank(message = "Phone number is mandatory")
    private String phone;

    @NotBlank(message = "Description is mandatory")
    private String description;

    @Column(name = "cv_path")
    private String cvPath;

    @Column(name = "picture_path")
    private String picturePath;

    private Date lastAuth;

    private boolean deleted;
}