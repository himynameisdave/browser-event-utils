import { EventType, EventHandler, UserEventHandler } from './index.d';
import noop from './helpers/noop';

/**
 * Generic withKeypress generator
 *
 * @param {string} key The key which must be pressed for the fn to be invoked
 */
const withKeyPress = (key: string): UserEventHandler => (fn: EventHandler = noop): EventHandler => (event: EventType = {} as any): void => {
    if (event.key === key) {
        return fn(event);
    }
};

export default withKeyPress;
