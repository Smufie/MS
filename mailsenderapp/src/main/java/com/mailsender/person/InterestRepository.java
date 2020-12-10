package com.mailsender.person;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
interface InterestRepository extends JpaRepository<Interest, Integer> {}
