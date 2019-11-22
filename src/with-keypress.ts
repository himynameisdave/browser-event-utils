import { UserEventHandler } from './index.d';

/**
 * Generic withKeypress generator
 *
 * @param {KeyboardEvent['key']} key The key which must be pressed for the fn to be invoked
 */
const withKeyPress = (key: KeyboardEvent['key']) => (fn: UserEventHandler) => (event: KeyboardEvent) => {
    if (event.key === key) {
        return fn(event);
    }
};

export default withKeyPress;
