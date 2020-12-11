package com.mailsender;

public class GlobalTestConst {

	private static final Integer TEST_PERSON_ID = new Integer(123);
	private static final String TEST_PERSON_NAME = "Test Test";
	private static final String TEST_PERSON_MAIL = "test@testmail.com";

	public static Integer getTestPersonId() {
		return TEST_PERSON_ID;
	}

	public static String getTestPersonName() {
		return TEST_PERSON_NAME;
	}

	public static String getTestPersonMail() {
		return TEST_PERSON_MAIL;
	}

	private static final String TEST_MESSAGE = "Test message.";

	public static String getTestMessage() {
		return TEST_MESSAGE;
	}

}
