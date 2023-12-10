package com.workers.adservice.entity;

import java.sql.Date;
import java.util.UUID;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "ads")
public class AdEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "ad_id")
    private UUID adId;

    @Column(name = "user_id")
    private String userId;

    @Column(name = "job_id")
    @NotNull(message = "Job id is mandatory")
    private UUID jobId;

    @Column(name = "title")
    @NotBlank(message = "Title is mandatory")
    private String title;

    @Column(name = "start_date")
    @NotNull(message = "Start date is mandatory")
    private Date startDate;

    @Column(name = "end_date")
    @NotNull(message = "Start date is mandatory")
    private Date endDate;

    @Column(name = "salary")
    @NotNull(message = "Salary is mandatory")
    private Integer salary;

    // @Column(name = "currency")
    // @NotBlank(message = "Currency is mandatory")
    // private String currency;

    @Column(name = "description")
    @NotBlank(message = "Description is mandatory")
    private String description;

    // @Column(name = "ad_type")
    // private String adType;

    @Column(name = "address_id")
    @NotNull(message = "Address id is mandatory")
    private UUID addressId;
}
