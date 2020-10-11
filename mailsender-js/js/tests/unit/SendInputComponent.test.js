import SendInputComponent from '../../components/views/sendview/SendInputComponent';
import inputData from '../../../templates/template-datas/input-template-datas/send-input-data.json';

describe('send input component tests', () => {
    test('should create send input component', () => {
        // when
        const sendInput = new SendInputComponent();
        // then
        expect(sendInput.generatedHTML).not.toBe(undefined);
    });

    test('should contain proper component', () => {
        // when
        const sendInput = new SendInputComponent();
        document.body.innerHTML = sendInput.generatedHTML;
        const inputs = document.getElementsByTagName('input');
        const formOptions = document.getElementsByTagName('option');
        const textArea = document.getElementsByTagName('textarea');
        // then
        expect(inputs.length).toBe(1);
        expect(inputs[0].type).toBe('submit');
        expect(inputs[0].id).toBe(inputData.buttonId);
        expect(inputs[0].value).toBe(inputData.buttonValue);

        expect(formOptions).not.toBe(undefined);
        expect(formOptions.length).toBe(inputData.interest.length);

        expect(textArea.length).toBe(1);
    });
});
