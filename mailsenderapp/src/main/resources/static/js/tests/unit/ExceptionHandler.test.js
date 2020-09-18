import ExceptionHandler from '../ExceptionHandler';

describe('exception handler tests', () => {
    test('should display error', () => {
        // given
        const output = document.createElement('div');
        output.id = 'output';
        document.body.appendChild(output);
        const errorMessage = 'error';
        // when
        ExceptionHandler.error(errorMessage);
        // then
        expect(output.innerHTML).toMatch(`${errorMessage}`);
    });
});
