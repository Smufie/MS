import InputView from '../../InputView';

beforeAll(() => {
    const testArticle = document.createElement('article');
    testArticle.innerHTML = 'Lorem ipsum';
    const testDiv = document.createElement('div');
    testDiv.id = 'main-section';
    testDiv.appendChild(testArticle);
    document.body.appendChild(testDiv);
});

describe('input view unit tests', () => {
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

    test('should route to add person view', () => {
        // given
        const addRoute = {
            name: 'Add',
            url: '/adduser',
        };
        // when
        const view = new InputView();
        const wasRouted = view.routeChanged(addRoute);
        // then
        expect(wasRouted).toBe(true);
    });

    test('should route to send view', () => {
        // given
        const sendRoute = {
            name: 'Send',
            url: '/send',
        };
        // when
        const view = new InputView();
        const wasRouted = view.routeChanged(sendRoute);
        // then
        expect(wasRouted).toBe(true);
    });

    test('should route to delete person view', () => {
        // given
        const deleteRoute = {
            name: 'Delete',
            url: '/deleteuser',
        };
        // when
        const view = new InputView();
        const wasRouted = view.routeChanged(deleteRoute);
        // then
        expect(wasRouted).toBe(true);
    });

    test('should route to default view', () => {
        // given
        const notExistingRoute = {
            name: 'idontexist',
            url: '/idontexist',
        };
        // when
        const view = new InputView();
        const wasRouted = view.routeChanged(notExistingRoute);
        // then
        expect(wasRouted).toBe(false);
    });

    test('should clear page', () => {
        // when
        const view = new InputView();
        view.clearPage();
        // then
        expect(view.inputArticle.innerHTML).toBe('');
    });
});
