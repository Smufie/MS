import DeleteInputComponent from '../../components/views/deletepersonview/DeleteInputComponent';
import inputData from '../../../templates/template-datas/input-template-datas/delete-person-input-data.json';

describe('delete input component tests', () => {
    test('should create delete input component', () => {
        // when
        const deleteInput = new DeleteInputComponent();
        // then
        expect(deleteInput.generatedHTML).not.toBe(undefined);
    });

    test('should contain proper component', () => {
        // given
        const deleteInput = new DeleteInputComponent();
        // when
        document.body.innerHTML = deleteInput.generatedHTML;
        const inputs = document.getElementsByTagName('input');
        // then
        expect(inputs).not.toBe(undefined);
        expect(inputs.length).toBe(2);
        expect(inputs[0].type).toBe('text');
        expect(inputs[1].type).toBe('submit');
        expect(inputs[0].placeholder).toBe(inputData.placeholderValue);
        expect(inputs[1].id).toBe(inputData.buttonId);
        expect(inputs[1].value).toBe(inputData.buttonValue);
    });
});
