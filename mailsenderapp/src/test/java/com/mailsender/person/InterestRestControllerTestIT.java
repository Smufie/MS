package com.mailsender.person;

import static org.junit.Assert.assertNotNull;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

@RunWith(SpringRunner.class)
@AutoConfigureMockMvc
@SpringBootTest
public class InterestRestControllerTestIT {

	@Autowired
	private MockMvc mockMvc;

	@Test
	public void shouldReturnAllInterests() throws Exception {
		MvcResult response = mockMvc.perform(MockMvcRequestBuilders.get("/interests")).andReturn();

		String result = response.getResponse().getContentAsString();
		assertNotNull(result);
	}
}
