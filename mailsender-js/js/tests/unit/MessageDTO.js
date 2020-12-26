import MessageDTO from '../../components/views/sendview/MessageDTO';

describe('message data tests', () => {
	test('should create message data', () => {
		// given
		const message = 'test message';
		const interestsIds = [0];
		// when
		const person = new MessageDTO(interestsIds, message);
		// then
		expect(person.message).toBe('test message');
		expect(person.interestsIds[0]).toBe(0);
	});
});
