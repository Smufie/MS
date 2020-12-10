package com.mailsender.messaging;

import static com.tngtech.archunit.lang.syntax.ArchRuleDefinition.classes;

import org.junit.Test;

import com.tngtech.archunit.core.domain.JavaClasses;
import com.tngtech.archunit.core.importer.ClassFileImporter;
import com.tngtech.archunit.lang.ArchRule;

public class MessagingPackageArchitectureTest {

	@Test
	public void classesImplementingMessageHandlerShouldEndWithHandler() {
		JavaClasses classes = new ClassFileImporter().importPackages("com.mailsender.messaging");
		
		ArchRule rule = classes().that().implement(MessageSender.class)
				.should().haveSimpleNameEndingWith("Handler");
		
		rule.check(classes);
	}

}
