import RouteCollection from '../../RouteCollection';

describe.only('route collection tests', () => {
    test('should return correct route', () => {
        // given
        const url = '/adduser';
        // when
        const collection = new RouteCollection();
        const route = collection.getRoute(url);
        // then
        expect(route).not.toBe(undefined);
        expect(route.name).toBe('Add');
    });

    test('should return default route', () => {
        // given
        const url = 'awoidwiod';
        // when
        const collection = new RouteCollection();
        const route = collection.getRoute(url);
        // then
        expect(route.name).toBe('MailSender');
    });
});
