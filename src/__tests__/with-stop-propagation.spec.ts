import withStopPropagation from '../with-stop-propagation';


describe('withStopPropagation', () => {
    describe('when event handler is called', () => {
        it(`calls the user's provded function`, () => {
            const userHandler = jest.fn();
            const mockEvent = {
                stopPropagation: jest.fn(),
            };
            const eventHandler = withStopPropagation(userHandler);
            eventHandler(mockEvent);
            expect(userHandler).toHaveBeenCalledWith(mockEvent);
        });
        it(`calls stopPropagation method on the event`, () => {
            const userHandler = jest.fn();
            const mockEvent = {
                stopPropagation: jest.fn(),
            };
            const eventHandler = withStopPropagation(userHandler);
            eventHandler(mockEvent);
            expect(mockEvent.stopPropagation).toHaveBeenCalled();
        });
    });
});
