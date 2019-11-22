import withSpaceKeyPress from '../with-space-keypress';
import { SPACE, ENTER } from '../constants/keys';


describe('withSpaceKeyPress', () => {
    it('calls the function if space key is pressed', () => {
        const mockEvent: any = {
            key: SPACE
        };
        const callback = jest.fn();
        withSpaceKeyPress(callback)(mockEvent);
        expect(callback).toHaveBeenCalledWith(mockEvent);
    });
    it('does nothing if the key is not " "', () => {
        const mockEvent: any = {
            key: ENTER
        };
        const callback = jest.fn();
        withSpaceKeyPress(callback)(mockEvent);
        expect(callback).not.toHaveBeenCalled();
    });
});
