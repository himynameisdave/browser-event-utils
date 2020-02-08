import callIfExists from '../call-if-exists';


describe('callIfExists', () => {
    it('does nothing/returns undefined if event does not exist', () => {
        const mockEvent = null;
        const result = callIfExists('someMethod')(mockEvent);
        expect(result).toBeUndefined();
    });
    it('does nothing/returns undefined if event[method] does not exist', () => {
        const mockEvent = {
            preventDefault: jest.fn(),
        };
        const result = callIfExists('doesNotExist')(mockEvent);
        expect(result).toBeUndefined();
    });
    it('calls event[method] if it exists', () => {
        const mockEvent = {
            preventDefault: jest.fn(),
        };
        callIfExists('preventDefault')(mockEvent);
        expect(mockEvent.preventDefault).toHaveBeenCalled();
    });
});
