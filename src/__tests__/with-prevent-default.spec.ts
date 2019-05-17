import withPreventDefault from '../with-prevent-default';


describe('withPreventDefault', () => {
    describe('when event handler is called', () => {
        it(`calls the user's provded function`, () => {
            const userHandler = jest.fn();
            const mockEvent = {
                preventDefault: jest.fn(),
            };
            const eventHandler = withPreventDefault(userHandler);
            eventHandler(mockEvent);
            expect(userHandler).toHaveBeenCalledWith(mockEvent);
        });
        it(`calls preventDefault method on the event`, () => {
            const userHandler = jest.fn();
            const mockEvent = {
                preventDefault: jest.fn(),
            };
            const eventHandler = withPreventDefault(userHandler);
            eventHandler(mockEvent);
            expect(mockEvent.preventDefault).toHaveBeenCalled();
        });
    });
});
