package com.mailsender.personcrud;

import static org.junit.Assert.*;

import org.junit.Test;

public class InterestTest {
	
	@Test
	public void shouldTranslateToDto() {
		Interest interest = new Interest();
		interest.setInterest("test");
		interest.setInterest_id(0);
		
		InterestDto dto = interest.translateToDto();
		assertEquals(dto.getInterest(), interest.getInterest());
		assertEquals(dto.getInterest_id(), interest.getInterest_id());
	}

}
