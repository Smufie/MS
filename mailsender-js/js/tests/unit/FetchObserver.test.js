import FetchObserver from '../../FetchObserver';

describe('fetch observer tests', () => {
    test('should initialize fetches', () => {
        // when
        const observer = new FetchObserver();
        // then
        expect(observer.fetches.size > 3).toBe(true);
    });
});
