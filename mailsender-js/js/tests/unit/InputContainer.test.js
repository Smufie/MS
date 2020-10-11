import InputContainer from '../../containers/InputContainer';

describe('input container tests', () => {
    test('should create container', () => {
        // given
        const html = '<div></div>';
        const id = 'example';
        // when
        const container = new InputContainer(html, id);
        // then
        expect(container.getHTML()).toBe(html);
        expect(container.getId()).toBe(id);
    });
});
