import FetchObserver from '../../FetchObserver';

describe('fetch observer tests', () => {
    test('should initialize fetches', () => {
        // when
        const observer = new FetchObserver();
        // then
        expect(observer.fetches.size > 4).toBe(true);
    });

    test('should return request', () => {
        // given
        const observer = new FetchObserver();
        // when
        const request = observer.getRequest("getpersons");
        // then
        expect(request).not.toBe(undefined);
    });
});
