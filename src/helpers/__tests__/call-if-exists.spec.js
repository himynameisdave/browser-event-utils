import callIfExists from '../call-if-exists.js';


describe('callIfExists', () => {
    it('does nothing/returns false if event does not exist', () => {
        const mockEvent = null;
        const result = callIfExists('someMethod')(mockEvent);
        expect(result).toBe(false);
    });
    it('does nothing/returns false if event[method] does not exist', () => {
        const mockEvent = {
            preventDefault: jest.fn(),
        };
        const result = callIfExists('doesNotExist')(mockEvent);
        expect(result).toBe(false);
    });
    it('calls event[method] if it exists', () => {
        const mockEvent = {
            preventDefault: jest.fn(),
        };
        callIfExists('preventDefault')(mockEvent);
        expect(mockEvent.preventDefault).toHaveBeenCalled();
    });
});
