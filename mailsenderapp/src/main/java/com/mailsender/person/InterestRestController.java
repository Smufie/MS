package com.mailsender.person;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class InterestRestController {

	@Autowired
	InterestService service;

	@GetMapping("/interests")
	public ResponseEntity<List<Interest>> getAllInterests() {
		return ResponseEntity.ok(service.getAllInterests());
	}

	@PostMapping("/interest/add")
	public ResponseEntity<InterestDto> addInterest(@RequestBody InterestDto newInterest) throws RuntimeException {
		return ResponseEntity.ok(service.add(newInterest));
	}

	@DeleteMapping("/interest/delete/{id}")
	@ResponseBody
	public ResponseEntity<Integer> deleteInterest(@PathVariable Integer id) throws RuntimeException {
		return ResponseEntity.ok(service.delete(id));
	}
}
