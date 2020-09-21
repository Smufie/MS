import InputView from '../../InputView';
import ViewFactory from '../../components/views/ViewFactory';

jest.mock('../../components/views/ViewFactory');

beforeAll(() => {
    const testArticle = document.createElement('article');
    testArticle.innerHTML = 'Lorem ipsum';
    const testDiv = document.createElement('div');
    testDiv.id = 'main-section';
    testDiv.appendChild(testArticle);
    document.body.appendChild(testDiv);
});

beforeEach(() => {
    ViewFactory.mockClear();
});

describe('input view tests', () => {
    test('should initialize views', () => {
        // given
        const view = new InputView();
        // when
        const views = view.initViews();
        // then
        expect(views.size).toBe(3);
        expect(views.get('something random')).toBe(undefined);
        expect(views.get('/adduser')).not.toBe(undefined);
        expect(views.get('/deleteuser')).not.toBe(undefined);
        expect(views.get('/send')).not.toBe(undefined);
    });

    test('should display add page', () => {
        // given
        const addRoute = {
            name: 'Add',
            url: '/adduser',
        };
        // when
        const view = new InputView();
        view.routeChanged(addRoute);
        // then
        expect(view.factory.getAddPersonView).toHaveBeenCalledTimes(1);
        expect(view.factory.getAddPersonView).toBeCalledWith(addRoute);
    });

    test('should display send page', () => {
        // given
        const sendRoute = {
            name: 'Send',
            url: '/senduser',
        };
        // when
        const view = new InputView();
        view.routeChanged(sendRoute);
        // then
        expect(view.factory.getSendView).toHaveBeenCalledTimes(1);
        expect(view.factory.getSendView).toBeCalledWith(sendRoute);
    });

    test('should display delete page', () => {
        // given
        const deleteRoute = {
            name: 'Delete',
            url: '/deleteuser',
        };
        // when
        const view = new InputView();
        view.routeChanged(deleteRoute);
        // then
        expect(view.factory.getDeletePersonView).toHaveBeenCalledTimes(1);
        expect(view.factory.getDeletePersonView).toBeCalledWith(deleteRoute);
    });

    test('should display default page', () => {
        // given
        const notExistingRoute = {
            name: 'idontexist',
            url: '/idontexist',
        };
        // when
        const view = new InputView();
        view.routeChanged(notExistingRoute);
        // then
        expect(view.factory.displayDefaultPage).toHaveBeenCalledTimes(1);
    });

    test('should clear page', () => {
        // when
        const view = new InputView();
        view.clearPage();
        // then
        expect(view.inputArticle.innerHTML).toBe('');
    });
});
