import SendInputComponent from '../components/SendInputComponent';

describe('send input component tests', () => {
    test('should create send input component', () => {
        // given
        // when
        const sendInput = new SendInputComponent();
        // then
        expect(sendInput.generatedHTML).toMatch(`"send-button"`);
    });

    test('should render input component to target', () => {
        // given
        const articleElement = document.createElement('article');
        document.body.appendChild(articleElement);
        // when
        const sendInput = new SendInputComponent();
        sendInput.renderTo(articleElement);
        // then
        expect(document.getElementsByTagName('article')[0].innerHTML).toMatch(`"send-button"`);
    });
});
