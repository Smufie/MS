import AddButtonListener from '../components/addbutton/AddButtonListener';

describe('add button listener tests', () => {
    test('should create add button listener', () => {
        // given
        const addButton = document.createElement('input');
        addButton.id = 'submit-button';
        document.body.appendChild(addButton);
        // when
        const listener = new AddButtonListener();
        // then
        expect(listener.submitButton).not.toBe(undefined);
    });

    test.skip('should listen', () => {
        // TODO check
        // given
        const addButton = document.createElement('input');
        addButton.id = 'submit-button';
        document.body.appendChild(addButton);
        // when
        const listener = new AddButtonListener();
        listener.listen();
        // then
        expect(listener.submitButton.onclick).toBeInstanceOf(Function);
    });
});
