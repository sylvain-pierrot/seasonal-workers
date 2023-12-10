package com.seasonalworkers.profile.controller;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.seasonalworkers.profile.entity.WorkerEntity;
import com.seasonalworkers.profile.service.MinioStorageService;
import com.seasonalworkers.profile.service.WorkerService;

import jakarta.validation.Valid;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

@RestController
@RequestMapping("workers")
public class WorkerController {
	@Autowired
	private WorkerService workerService;
	@Autowired
	private MinioStorageService minioStorageService;

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

	@PutMapping("/me/picture")
	public ResponseEntity<WorkerEntity> savePhoto(@RequestParam("picture") MultipartFile file) throws Exception {
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		String userId = authentication.getName();
		WorkerEntity worker = workerService.getById(userId);

		String extension = file.getOriginalFilename().substring(file.getOriginalFilename().lastIndexOf("."));
		String fileName = UUID.randomUUID().toString() + extension;
		String folderName = "pictures";
		String subFolder = "worker-" + userId;

		String fileFullPath = minioStorageService.buildPathString(folderName, subFolder, fileName);

		minioStorageService.proccessFile(file, fileFullPath);
		worker.setPicturePath(fileFullPath);
		workerService.update(worker);
		return ResponseEntity.ok(worker);
	}

	@PutMapping("/me/cv")
	public ResponseEntity<WorkerEntity> saveCv(@RequestParam("cv") MultipartFile file) throws Exception {
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		String userId = authentication.getName();
		WorkerEntity worker = workerService.getById(userId);

		String extension = file.getOriginalFilename().substring(file.getOriginalFilename().lastIndexOf("."));
		String fileName = UUID.randomUUID().toString() + extension;
		String folderName = "cv";
		String subFolder = "worker-" + userId;

		String fileFullPath = minioStorageService.buildPathString(folderName, subFolder, fileName);

		minioStorageService.proccessFile(file, fileFullPath);
		worker.setCvPath(fileFullPath);
		workerService.update(worker);
		return ResponseEntity.ok(worker);
	}

	@PostMapping()
	public ResponseEntity<WorkerEntity> create(@RequestBody @Valid WorkerEntity worker) throws Exception {
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