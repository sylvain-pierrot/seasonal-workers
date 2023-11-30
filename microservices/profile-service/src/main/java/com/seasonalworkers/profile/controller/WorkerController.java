package com.seasonalworkers.profile.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.seasonalworkers.profile.entity.WorkerEntity;
import com.seasonalworkers.profile.service.WorkerService;

import jakarta.validation.Valid;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

@RestController
@RequestMapping("workers")
public class WorkerController {
	@Autowired
	private WorkerService workerService;

	@DeleteMapping("/me")
	public ResponseEntity<WorkerEntity> delete() {
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		String userId = authentication.getName();
		WorkerEntity worker = workerService.getById(userId);
		worker.setDeleted(true);
		workerService.update(worker);
		return ResponseEntity.ok(worker);
	}

	@PutMapping("/me")
	public ResponseEntity<WorkerEntity> update(@RequestBody @Valid WorkerEntity worker) {
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		String userId = authentication.getName();
		worker.setId(userId);
		WorkerEntity seasonalWorker = workerService.update(worker);
		return ResponseEntity.ok(seasonalWorker);
	}

	@PostMapping()
	public ResponseEntity<WorkerEntity> create(@RequestBody @Valid WorkerEntity worker) {
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		String userId = authentication.getName();
		worker.setId(userId);
		WorkerEntity seasonalWorker = workerService.create(worker);
		return ResponseEntity.ok(seasonalWorker);
	}

	@GetMapping("/me")
	public ResponseEntity<WorkerEntity> getById() {
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		String userId = authentication.getName();
		WorkerEntity worker = workerService.getById(userId);
		if (worker.isDeleted()) {
			return ResponseEntity.notFound().build();
		}
		return ResponseEntity.ok(worker);
	}
}