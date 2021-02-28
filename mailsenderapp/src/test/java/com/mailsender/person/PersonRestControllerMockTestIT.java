package com.mailsender.person;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;

import java.nio.charset.Charset;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureWebMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.mailsender.GlobalTestConst;
import com.mailsender.queue.SendCommandRestController;

@WebMvcTest(PersonRestController.class)
@AutoConfigureMockMvc
@AutoConfigureWebMvc
class PersonRestControllerMockTestIT {

	private static final MediaType APPLICATION_JSON_UTF8 = new MediaType(MediaType.APPLICATION_JSON.getType(),
			MediaType.APPLICATION_JSON.getSubtype(), Charset.forName("utf8"));

	private PersonDto defaultPerson;

	private String jsonPerson;

	private final ObjectMapper mapper = new ObjectMapper();

	@Autowired
	private MockMvc mockMvc;

	@MockBean
	private PersonService personService;

	@MockBean
	private SendCommandRestController sendController;

	@BeforeEach
	public void before() {
		defaultPerson = new PersonDto(GlobalTestConst.getTestPersonName(), GlobalTestConst.getTestPersonMail(),
				PersonTestConst.getPersonTestPersonInterestsDto(), GlobalTestConst.getTestPersonId());
		jsonPerson = asJsonString(defaultPerson);
	}

	@Test
	public void shouldAddReturnCorrectPerson() throws Exception {
		// GIVEN
		when(personService.add(any(PersonDto.class))).thenReturn(defaultPerson);
		// THEN
		this.mockMvc.perform(post("/person/add").contentType(APPLICATION_JSON_UTF8).content(jsonPerson))
				.andExpect(content().string(jsonPerson));
	}

	@Test
	public void shouldEditReturnCorrectPerson() throws Exception {
		// GIVEN
		when(personService.edit(any(PersonDto.class))).thenReturn(defaultPerson);
		// THEN
		this.mockMvc.perform(post("/person/edit").contentType(APPLICATION_JSON_UTF8).content(jsonPerson))
				.andExpect(content().string(jsonPerson));
	}

	@Test
	public void shouldDeleteReturnCorrectId() throws Exception {
		// GIVEN
		when(personService.delete(any(Integer.class))).thenReturn(defaultPerson.getId());
		// THEN
		this.mockMvc.perform(delete("/person/delete/" + defaultPerson.getId()))
				.andExpect(content().string(defaultPerson.getId().toString()));
	}

	private String asJsonString(final Object obj) {
		try {
			final String jsonContent = mapper.writeValueAsString(obj);
			return jsonContent;
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
}
