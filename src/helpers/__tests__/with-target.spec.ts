/* eslint-disable @typescript-eslint/explicit-function-return-type */
import withTarget from '../with-target';
import { EventType, $TSFixMe } from '../../index.d';


describe('withTarget', () => {
    it('calls the provided method with event.target (if it exists)', () => {
        const mockEvent: EventType | $TSFixMe = {
            target: 'mockEvent',
        };
        const mock = jest.fn();
        withTarget(mock)(mockEvent);
        expect(mock).toHaveBeenCalledWith(mockEvent);
    });
});
