package com.mailsender.person;

import static com.tngtech.archunit.lang.syntax.ArchRuleDefinition.classes;

import org.junit.Before;
import org.junit.Test;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import com.tngtech.archunit.core.domain.JavaClasses;
import com.tngtech.archunit.core.importer.ClassFileImporter;
import com.tngtech.archunit.lang.ArchRule;

public class PersonPackageArchitectureTest {

	private static final String DTO = PersonTestConst.getArchitectureTestDto();
	private static final String REPOSITORY = PersonTestConst.getArchitectureTestRepository();
	private static final String SERVICE = PersonTestConst.getArchitectureTestService();
	private static final String CONTROLLER = PersonTestConst.getArchitectureTestController();
	private static final String PERSON_PACKAGE = PersonTestConst.getArchitectureTestPersonPackage();

	private JavaClasses classes;

	@Before
	void initClasses() {
		// GIVEN
		classes = new ClassFileImporter().importPackages(PERSON_PACKAGE);
	}
	// TODO given/when/then, should

	@Test
	public void shouldServicesHaveServiceInName() {
		// WHEN
		ArchRule rule = classes().that().areAnnotatedWith(Service.class).should().haveNameMatching(SERVICE);
		// THEN
		rule.check(classes);
	}

	@Test
	public void shouldServicesBePackagePrivate() {
		// WHEN
		ArchRule rule = classes().that().areAnnotatedWith(Service.class).should().bePackagePrivate();
		// THEN
		rule.check(classes);
	}

	@Test
	public void shouldRepositoriesHaveRepositoryInName() {
		// WHEN
		ArchRule rule = classes().that().implement(JpaRepository.class).should().haveNameMatching(REPOSITORY);
		// THEN
		rule.check(classes);
	}

	@Test
	public void shouldRepositoriesBePackagePrivate() {
		// WHEN
		ArchRule rule = classes().that().implement(JpaRepository.class).should().bePackagePrivate();
		// THEN
		rule.check(classes);
	}

	@Test
	public void shouldDtosBePublic() {
		// WHEN
		ArchRule rule = classes().that().haveNameMatching(DTO).should().bePublic();
		// THEN
		rule.check(classes);
	}

	@Test
	public void shouldEntitiesBePackagePrivate() {
		// WHEN
		ArchRule personRule = classes().that().haveSimpleName("Person").should().bePackagePrivate();
		ArchRule interestRule = classes().that().haveSimpleName("Interest").should().bePackagePrivate();
		// THEN
		personRule.check(classes);
		interestRule.check(classes);
	}

	@Test
	public void shouldControllersBePublic() {
		// WHEN
		ArchRule rule = classes().that().haveNameMatching(CONTROLLER).should().bePublic();
		// THEN
		rule.check(classes);
	}
}
