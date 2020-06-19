/* eslint-disable @typescript-eslint/explicit-function-return-type */
import withTargetChecked from '../with-target-checked';
import { EventType } from '../index.d';


describe('withTargetChecked', () => {
    it('will not fall over if bad values are passed', () => {
        expect(() => withTargetChecked()()).not.toThrow();
    });
    it('calls consumer function with undefined if event.target.checked does not exist', () => {
        const mockConsumer = jest.fn();
        const mockEvent = {} as EventType;
        withTargetChecked(mockConsumer)(mockEvent);
        expect(mockConsumer).toHaveBeenCalledWith(undefined, mockEvent);
    });
    it('calls the consumer function with event.target.checked if it exists', () => {
        const mockConsumer = jest.fn();
        const mockIsChecked = true;
        const mockEvent = { target: { checked: mockIsChecked } } as EventType;
        withTargetChecked(mockConsumer)(mockEvent);
        expect(mockConsumer).toHaveBeenCalledWith(mockIsChecked, mockEvent);
    });
});
