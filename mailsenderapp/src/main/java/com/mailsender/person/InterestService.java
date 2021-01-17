package com.mailsender.person;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mailsender.person.exceptions.InterestNotFoundException;

@Service
class InterestService {

	@Autowired
	InterestRepository repository;

	public List<Interest> getAllInterests() {
		return repository.findAll();
	}

	public InterestDto add(InterestDto newInterest) {
		Interest interest = new Interest();

		interest.setInterest(newInterest.getInterest());

		repository.save(interest);

		newInterest.setInterestId(interest.getInterestId());
		return newInterest;
	}

	public Integer delete(Integer id) {
		Interest interest = repository.findById(id)
				.orElseThrow(() -> new InterestNotFoundException("Interest not found for this id: " + id));

		repository.delete(interest);
		return id;
	}

}
