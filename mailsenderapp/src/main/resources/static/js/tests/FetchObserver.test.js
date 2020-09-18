import FetchObserver from '../FetchObserver';

describe('fetch observer tests', () => {
    test('should create fetch observer', () => {
        // given
        // when
        const observer = new FetchObserver();
        // then
        expect(observer).not.toBe(undefined);
    });
});
