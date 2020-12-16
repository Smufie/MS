import PersonDTO from '../../PersonDTO';

describe('person data tests', () => {
	test('should create person data', () => {
		// given
		const name = 'test';
		const mail = 'test';
		const interests = ['test'];
		const id = 0;
		// when
		const person = new PersonDTO(name, mail, interests, id);
		// then
		expect(person.name).toBe('test');
		expect(person.mail).toBe('test');
		expect(person.interests[0]).toBe('test');
		expect(person.id).toBe(0);
	});
});
