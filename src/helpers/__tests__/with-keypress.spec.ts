import withKeypress from '../with-keypress';
import { ENTER } from '../../constants/keys';


describe('withKeypress', () => {
    it('calls the provided function if event.key is present', () => {
        const callback = jest.fn();
        const mockEvent: any = {
            key: ENTER,
        };     
        const handler = withKeypress(ENTER)(callback);
        handler(mockEvent);
        expect(callback).toBeCalledTimes(1);
    });
    it('does nothing if event.key is not present', () => {
        const callback = jest.fn();
        const mockEvent: any = {
            key: '__FAKE_KEY',
        };     
        const handler = withKeypress(ENTER)(callback);
        handler(mockEvent);
        expect(callback).not.toHaveBeenCalled();
    });
});
