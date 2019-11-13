import withEscapeKeyPress from '../with-escape-keypress';
import { ESCAPE, ENTER } from '../constants/keys';


describe('withEscapeKeyPress', () => {
    it('calls the function if escape key is pressed', () => {
        const mockEvent: any = {
            key: ESCAPE
        };
        const callback = jest.fn();
        withEscapeKeyPress(callback)(mockEvent);
        expect(callback).toHaveBeenCalledWith(mockEvent);
    });
    it('does nothing if the key is not "Escape"', () => {
        const mockEvent: any = {
            key: ENTER
        };
        const callback = jest.fn();
        withEscapeKeyPress(callback)(mockEvent);
        expect(callback).not.toHaveBeenCalled();
    });
});
