package com.mailsender.person;

import java.util.ArrayList;
import java.util.List;

public class PersonTestConst {

	// PERSON TEST
	private static List<Interest> PERSON_TEST_PERSON_INTERESTS = PersonTestConst.initTestsInterests();

	static List<Interest> initTestsInterests() {
		Interest interest = new Interest();
		interest.setInterest("test");
		interest.setInterestId(0);

		List<Interest> testInterests = new ArrayList<Interest>();
		testInterests.add(interest);
		return testInterests;
	}

	public static List<Interest> getPersonTestPersonInterests() {
		return PERSON_TEST_PERSON_INTERESTS;
	}

	// PERSON PACKAGE ARCHITECTURE TEST
	private static final String ARCHITECTURE_TEST_DTO = ".*Dto";
	private static final String ARCHITECTURE_TEST_REPOSITORY = ".*Repository";
	private static final String ARCHITECTURE_TEST_SERVICE = ".*Service";
	private static final String ARCHITECTURE_TEST_CONTROLLER = ".*Controller";
	private static final String ARCHITECTURE_TEST_PERSON_PACKAGE = "com.mailsender.person";

	public static String getArchitectureTestDto() {
		return ARCHITECTURE_TEST_DTO;
	}

	public static String getArchitectureTestRepository() {
		return ARCHITECTURE_TEST_REPOSITORY;
	}

	public static String getArchitectureTestService() {
		return ARCHITECTURE_TEST_SERVICE;
	}

	public static String getArchitectureTestController() {
		return ARCHITECTURE_TEST_CONTROLLER;
	}

	public static String getArchitectureTestPersonPackage() {
		return ARCHITECTURE_TEST_PERSON_PACKAGE;
	}

}
