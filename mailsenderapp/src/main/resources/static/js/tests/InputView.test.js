/* eslint-disable no-undef */
import InputView from '../InputView';
import PageFactory from '../PageFactory';

jest.mock('../PageFactory');

beforeEach(() => {
    PageFactory.mockClear();
});

describe.skip('Input view tests', () => {
    test('calls displayAddPage', () => {
        const addRoute = {
            name: 'Add',
            url: '/adduser',
            id: 1,
            wasCreated: false,
        };
        const view = new InputView();
        view.routeChanged(addRoute);

        expect(PageFactory).toHaveBeenCalledTimes(1);
        expect(view.factory.displayAddPage).toHaveBeenCalledTimes(1);
        expect(view.factory.displayAddPage).toBeCalledWith(addRoute);
    });
});
