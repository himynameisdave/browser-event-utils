import withEventFactory from '../with-event-factory';


describe('withEventFactory', () => {
    describe('the final returned event handler ', () => {
        it('calls the provided method (if it exists)', () => {
            const mockMethod = 'someMethod';
            const mockEvent = {
                [mockMethod]: jest.fn(),
            };
            const mockConsumerHandler = () => null;
            withEventFactory(mockMethod)(mockConsumerHandler)(mockEvent);
            expect(mockEvent[mockMethod]).toHaveBeenCalled();
        });
        it(`calls the consumer's event handler with the event object`, () => {
            const mockMethod = 'someMethod';
            const mockEvent = {
                [mockMethod]: jest.fn(),
            };
            const mockConsumerHandler = jest.fn();
            withEventFactory(mockMethod)(mockConsumerHandler)(mockEvent);
            expect(mockConsumerHandler).toHaveBeenCalled();
        });
        it('does not fall over if arguments are omitted', () => {
            expect(() => withEventFactory()()()).not.toThrow();
        });
    });
});
