import InputView from '../InputView';
import PageFactory from '../PageFactory';

jest.mock('../PageFactory');

beforeEach(() => {
    PageFactory.mockClear();
});

describe('input view tests', () => {
    test('should create input view', () => {
        // given
        // when
        const view = new InputView();
        const displayedPage = view.views.get(1);
        // then
        expect(PageFactory).toHaveBeenCalledTimes(1);
        expect(view.views).not.toBe(undefined);
        expect(view.views).toBeInstanceOf(Map);
        expect(displayedPage).toBeInstanceOf(Function);
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
        expect(view.factory.displayDeletePage).toHaveBeenCalledTimes(1);
        expect(view.factory.displayDeletePage).toBeCalledWith(addRoute);
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
        expect(view.factory.displaySendPage).toHaveBeenCalledTimes(1);
        expect(view.factory.displaySendPage).toBeCalledWith(sendRoute);
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
        expect(view.factory.displayDeletePage).toHaveBeenCalledTimes(1);
        expect(view.factory.displayDeletePage).toBeCalledWith(deleteRoute);
    });

    test('should display default page', () => {
        // given
        const notExistingRoute = {
            name: 'idontexist',
            url: '/idontexist',
            id: 612,
            wasCreated: false,
        };
        // when
        const view = new InputView();
        view.routeChanged(notExistingRoute);
        // then
        expect(view.factory.displayDefaultPage).toHaveBeenCalledTimes(1);
    });
});
