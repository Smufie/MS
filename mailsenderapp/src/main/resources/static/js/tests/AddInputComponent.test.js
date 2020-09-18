import AddInputComponent from '../components/AddInputComponent';
import AddButtonListener from '../listeners/AddButtonListener';

jest.mock('../listeners/AddButtonListener');

beforeEach(() => {
    AddButtonListener.mockClear();
});

describe('add input component tests', () => {
    test('should create add input component', () => {
        // when
        const addInput = new AddInputComponent();
        // then
        expect(addInput.generatedHTML).toMatch(`"submit-button"`);
    });

    test('should render input component to target', () => {
        // given
        const articleElement = document.createElement('article');
        document.body.appendChild(articleElement);
        // when
        const addInput = new AddInputComponent();
        addInput.renderTo(articleElement);
        // then
        expect(document.getElementsByTagName('article')[0].innerHTML).toMatch(`"submit-button"`);
        expect(AddButtonListener).toHaveBeenCalledTimes(1);
    });
});
