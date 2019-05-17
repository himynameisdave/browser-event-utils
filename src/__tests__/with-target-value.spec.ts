import withTargetValue from '../with-target-value';


describe('withTargetValue', () => {
    it('will not fall over if bad values are passed', () => {
        expect(() => withTargetValue()()).not.toThrow();
    });
    it('calls consumer function with undefined if event.target.value does not exist', () => {
        const mockConsumer = jest.fn();
        const mockEvent = {};
        withTargetValue(mockConsumer)(mockEvent);
        expect(mockConsumer).toHaveBeenCalledWith(undefined, mockEvent);
    });
    it('calls the consumer function with event.target.value if it exists', () => {
        const mockConsumer = jest.fn();
        const mockValue = 'testing';
        const mockEvent = { target: { value: mockValue } };
        withTargetValue(mockConsumer)(mockEvent);
        expect(mockConsumer).toHaveBeenCalledWith(mockValue, mockEvent);
    });
});
