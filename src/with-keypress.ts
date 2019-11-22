import { KeysType } from './constants/keys';
import { UserEventHandler } from './index.d'

/**
 * Generic withKeypress generator
 *
 * @param {KeysType} key The key which must be pressed for the fn to be invoked
 */
const withKeyPress = (key: KeysType) => (fn: UserEventHandler) => (event: KeyboardEvent) => {
    if (event.key === key) {
        return fn(event);
    }
};

export default withKeyPress;
