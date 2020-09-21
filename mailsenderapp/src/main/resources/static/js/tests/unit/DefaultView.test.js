import DefaultView from '../../components/views/DefaultView';
import inputData from '../../../templates/template-datas/input-template-datas/input-containers-data.json';

const defaultView = inputData.default;

describe('default view tests', () => {
    test('should create add input component', () => {
        // TODO toBeInstanceOf
        // when
        const view = new DefaultView();
        // then
        expect(view.container).not.toBe(undefined);
    });

    test('should render view', () => {
        // given
        const view = new DefaultView();
        // when
        view.renderTo(document.body);
        const contentSpace = document.getElementById('input-content-space');
        // then
        expect(contentSpace).not.toBe(undefined);
        expect(contentSpace.getElementsByTagName('label')[0].innerHTML).toBe(defaultView.label);
    });
});
