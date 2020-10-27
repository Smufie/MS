package com.mailsender.person.repository;

import org.springframework.stereotype.Repository;

import com.mailsender.person.Person;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

@Repository
public interface PersonRepository extends JpaRepository<Person, Integer> {
	
	@Query("SELECT p FROM Person p WHERE p.interests IN (:interests)") 
    List<Person> xyz(@Param("interests") List<String> interests);

}
