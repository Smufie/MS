package com.mailsender.person;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class InterestTest {

	@Test
	public void shouldTranslateToDto() {
		// GIVEN
		Interest interest = new Interest();
		interest.setInterest("test");
		interest.setInterestId(0);
		// WHEN
		InterestDto dto = interest.translateToDto();
		// THEN
		assertEquals(dto.getInterest(), interest.getInterest());
		assertEquals(dto.getInterestId(), interest.getInterestId());
	}

}
