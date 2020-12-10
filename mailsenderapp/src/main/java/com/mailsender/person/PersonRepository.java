package com.mailsender.person;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

@Repository
interface PersonRepository extends JpaRepository<Person, Integer> {
	
	@Transactional(readOnly=true)
	@Query("SELECT p FROM Person p INNER JOIN p.interests i WHERE i.interestId IN :interests") 
    List<Person> findAllByInterests(@Param("interests") List<Integer> interests);

}
