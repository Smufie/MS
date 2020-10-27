package com.mailsender.person.service;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class MailValidator {
	
	static final File forbiddenMailFile = new File("forbidden_mail_adresses.txt");
	private static Scanner scan;
	
	public static boolean validate(String mail) {
		boolean isValid = true;
		try {
			scan = new Scanner(forbiddenMailFile);
		} catch (FileNotFoundException e) {
			throw new RuntimeException("File not found.");
		}
		while(scan.hasNextLine()) {
			String unvalidMail = scan.next();
			if(mail.contains(unvalidMail)) {
				isValid = false;
				return isValid;
			}
		}
		scan.close();
		return isValid;
		
	}
}
