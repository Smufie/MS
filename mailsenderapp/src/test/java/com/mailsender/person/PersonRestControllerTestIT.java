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
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;

@RunWith(SpringRunner.class)
@AutoConfigureMockMvc
@SpringBootTest
class PersonRestControllerTestIT {

	@Autowired
	private MockMvc mockMvc;

	@Test
	void shouldReturnPersons() throws Exception {
		// GIVEN
		MockHttpServletRequestBuilder personsRequest = get("/persons");
		// WHEN
		ResultActions result = mockMvc.perform(personsRequest);
		// THEN
		result.andExpect(status().isOk()).andExpect(content().string(containsString("name")))
				.andExpect(content().string(containsString("mail"))).andExpect(content().string(containsString("id")))
				.andExpect(content().string(containsString("interestsIds")));
	}

	@Test
	void shouldReturnPersonsWithTestInterest() throws Exception {
		mockMvc.perform(get("/persons/interest/0")).andExpect(status().isOk())
				.andExpect(content().string(containsString("\"interest\":\"Test\"")));
	}

}