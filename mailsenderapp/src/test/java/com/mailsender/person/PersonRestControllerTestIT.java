package com.mailsender.person;

import static org.hamcrest.Matchers.containsString;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

@RunWith(SpringRunner.class)
@AutoConfigureMockMvc
@SpringBootTest
class PersonRestControllerTestIT {

	@Autowired
	private MockMvc mockMvc;

	@Test
	void shouldReturnPersons() throws Exception {
		// THEN
		mockMvc.perform(get("/persons")).andExpect(status().isOk()).andExpect(content().string(containsString("mail")));
	}

	@Test
	void shouldReturnPersonsWithTestInterest() throws Exception {
		// THEN
		mockMvc.perform(get("/persons/interest/0")).andExpect(status().isOk())
				.andExpect(content().string(containsString("\"interest\":\"Test\"")));
	}

}