import DefaultInputComponent from '../components/DefaultInputComponent';

describe('default input component tests', () => {
    test('should create default input component', () => {
        // when
        const defaultInput = new DefaultInputComponent();
        // then
        expect(defaultInput.generatedHTML).toMatch(`Welcome to MailSender!`);
    });

    test('should render input component to target', () => {
        // given
        const articleElement = document.createElement('article');
        document.body.appendChild(articleElement);
        // when
        const defaultInput = new DefaultInputComponent();
        defaultInput.renderTo(articleElement);
        // then
        expect(document.getElementsByTagName('article')[0].innerHTML).toMatch(
            `Welcome to MailSender!`
        );
    });
});
