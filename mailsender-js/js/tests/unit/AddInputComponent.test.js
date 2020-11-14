import AddInputComponent from '../../components/views/addpersonview/AddInputComponent';
import inputData from '../../../templates/template-datas/input-template-datas/add-person-input-data.json';

describe('add input component tests', () => {
    test('should create add input component', () => {
        // when
        const addInput = new AddInputComponent();
        // then
        expect(addInput.generatedHTML).not.toBe(undefined);
    });

    test('should contain proper component', () => {
        // given
        const addInput = new AddInputComponent();
        // when
        document.body.innerHTML = addInput.generatedHTML;
        // then
        const result = document.getElementsByTagName('input');

        expect(result).not.toBe(undefined);
        expect(result.length).toBe(3);

        expect(result[0].type).toBe('text');
        expect(result[0].placeholder).toBe(inputData.textFields[0].placeholderValue);

        expect(result[1].type).toBe('text');
        expect(result[1].placeholder).toBe(inputData.textFields[1].placeholderValue);

        expect(result[2].type).toBe('submit');
        expect(result[2].id).toBe(inputData.buttonId);
        expect(result[2].value).toBe(inputData.buttonValue);
    });
});
