import PersonData from '../PersonData';

describe('person data tests', () => {
    test('should create person data', () => {
        // given
        const name = 'name';
        const id = 0;
        // when
        const person = new PersonData(name, id);
        // then
        expect(person.name).toBe('name');
        expect(person.id).toBe(0);
    });
});
