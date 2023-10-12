package com.seasonalworkers.profile.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.seasonalworkers.profile.entity.WorkerEntity;
import com.seasonalworkers.profile.service.WorkerService;

@RestController
@RequestMapping("user")
public class WorkerController {
	@Autowired
	private WorkerService profileService;

	@GetMapping()
	public List<WorkerEntity> getAll() {
		return profileService.getAll();
	}

	@PostMapping()
	public WorkerEntity create(WorkerEntity profile) {
		return profileService.create(profile);
	}

	@GetMapping("/{id}")
	public String getSeasonalWorkerById(@PathVariable String id) {
		return "You ask for seasonalworker with id: " + id;
	}
}