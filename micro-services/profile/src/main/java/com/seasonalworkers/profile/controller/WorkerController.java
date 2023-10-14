package com.seasonalworkers.profile.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.seasonalworkers.profile.entity.WorkerEntity;
import com.seasonalworkers.profile.service.WorkerService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("workers")
public class WorkerController {
	@Autowired
	private WorkerService workerService;

	@PostMapping()
	public ResponseEntity<WorkerEntity> create(@RequestBody @Valid WorkerEntity worker) {
		WorkerEntity seasonalWorker = workerService.create(worker);
		return ResponseEntity.ok(seasonalWorker);
	}

	@GetMapping("/{id}")
	public ResponseEntity<WorkerEntity> getById(@PathVariable Long id) {
		WorkerEntity worker = workerService.getById(id);
		return ResponseEntity.ok(worker);
	}
}