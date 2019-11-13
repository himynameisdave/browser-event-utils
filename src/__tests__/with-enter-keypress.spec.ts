import withEnterKeyPress from '../with-enter-keypress';
import { ESCAPE, ENTER } from '../constants/keys';


describe('withEnterKeyPress', () => {
    it('calls the function if Enter key is pressed', () => {
        const mockEvent: any = {
            key: ENTER
        };
        const callback = jest.fn();
        withEnterKeyPress(callback)(mockEvent);
        expect(callback).toHaveBeenCalledWith(mockEvent);
    });
    it('does nothing if the key is not "Enter"', () => {
        const mockEvent: any = {
            key: ESCAPE
        };
        const callback = jest.fn();
        withEnterKeyPress(callback)(mockEvent);
        expect(callback).not.toHaveBeenCalled();
    });
});
