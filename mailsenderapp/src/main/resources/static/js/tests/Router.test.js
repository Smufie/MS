import Router from '../Router';
import InputView from '../InputView';

jest.mock('../InputView');

beforeEach(() => {
    InputView.mockClear();
});

describe('router tests', () => {
    test('should create router', () => {
        // given
        const menu = document.createElement('div');
        menu.id = 'menu';
        const exampleLink = document.createElement('a');
        menu.appendChild(exampleLink);
        document.body.appendChild(menu);
        // when
        const router = new Router();
        // then
        expect(window.onpopstate).toBeInstanceOf(Function);
        expect(router.routes).toBeInstanceOf(Array);
    });

    test('should route to default', () => {
        // given
        // when
        // then
    });
});
