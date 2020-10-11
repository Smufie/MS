import FetchObserver from '../../FetchObserver';

describe('fetch observer tests', () => {
    test('should initialize fetches', () => {
        // when
        const observer = new FetchObserver();
        // then
        expect(observer.fetches.size).toBe(3);
    });
});
