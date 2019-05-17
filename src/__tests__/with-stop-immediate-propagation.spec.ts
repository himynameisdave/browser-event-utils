import withStopImmediatePropagation from '../with-stop-immediate-propagation';


describe('withStopImmediatePropagation', () => {
    describe('when event handler is called', () => {
        it(`calls the user's provded function`, () => {
            const userHandler = jest.fn();
            const mockEvent = {
                stopImmediatePropagation: jest.fn(),
            };
            const eventHandler = withStopImmediatePropagation(userHandler);
            eventHandler(mockEvent);
            expect(userHandler).toHaveBeenCalledWith(mockEvent);
        });
        it(`calls stopPropagation method on the event`, () => {
            const userHandler = jest.fn();
            const mockEvent = {
                stopImmediatePropagation: jest.fn(),
            };
            const eventHandler = withStopImmediatePropagation(userHandler);
            eventHandler(mockEvent);
            expect(mockEvent.stopImmediatePropagation).toHaveBeenCalled();
        });
    });
});
