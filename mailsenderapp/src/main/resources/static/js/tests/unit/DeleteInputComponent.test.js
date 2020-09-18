import DeleteInputComponent from '../components/DeleteInputComponent';

describe('delete input component tests', () => {
    test('should create delete input component', () => {
        // given
        // when
        const deleteInput = new DeleteInputComponent();
        // then
        expect(deleteInput.generatedHTML).toMatch(`"delete-button"`);
    });

    test('should render input component to target', () => {
        // given
        const articleElement = document.createElement('article');
        document.body.appendChild(articleElement);
        // when
        const deleteInput = new DeleteInputComponent();
        deleteInput.renderTo(articleElement);
        // then
        expect(document.getElementsByTagName('article')[0].innerHTML).toMatch(`"delete-button"`);
    });
});
