import InputView from '../../InputView';

beforeAll(() => {
    const testArticle = document.createElement('article');
    testArticle.innerHTML = 'Lorem ipsum';
    const testDiv = document.createElement('div');
    testDiv.id = 'main-section';
    testDiv.appendChild(testArticle);
    document.body.appendChild(testDiv);
});

describe('input view integral tests', () => {
    test('should display add person view', () => {
        // given
        const addRoute = {
            name: 'Add',
            url: '/adduser',
        };
        const view = new InputView();
        // when
        const wasRouted = view.routeChanged(addRoute);
        // then
        const contentSpace = document.getElementById('input-content-space');
        expect(contentSpace).not.toBe(undefined);

        expect(wasRouted).toBe(true);

        const container = document.getElementById('add-input-section');
        expect(container).not.toBe(undefined);
    });

    test('should display send view', () => {
        // given
        const sendRoute = {
            name: 'Send',
            url: '/send',
        };
        const view = new InputView();
        // when
        const wasRouted = view.routeChanged(sendRoute);
        // then
        const contentSpace = document.getElementById('input-content-space');
        expect(contentSpace).not.toBe(undefined);

        expect(wasRouted).toBe(true);

        const container = document.getElementById('send-input-section');
        expect(container).not.toBe(undefined);
    });

    test('should display delete person view', () => {
        // given
        const deleteRoute = {
            name: 'Delete',
            url: '/deleteuser',
        };
        const view = new InputView();
        // when
        const wasRouted = view.routeChanged(deleteRoute);
        // then
        const contentSpace = document.getElementById('input-content-space');
        expect(contentSpace).not.toBe(undefined);

        expect(wasRouted).toBe(true);

        const container = document.getElementById('delete-input-section');
        expect(container).not.toBe(undefined);
    });

    test('should display default view', () => {
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

        const container = document.getElementById('default-section');
        expect(container).not.toBe(undefined);
    });
});
