package com.mailsender.personcrud;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class InterestRestController {

	@Autowired
	InterestService service;
	
	@GetMapping("/interests")
	public List<Interest> getAllInterests() {
		return service.getAllInterests();
	}
}
