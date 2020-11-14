package com.mailsender.personcrud;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
class InterestService {

	@Autowired
	InterestRepository repository;
	
	public List<Interest> getAllInterests() {
		return repository.findAll();
	}

}
