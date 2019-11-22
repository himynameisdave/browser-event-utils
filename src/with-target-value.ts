import { EventHandler } from './index.d';

export type WithTargetValue = (value: string | undefined, event: KeyboardEvent | InputEvent | any) => void;




/**
 *  Accepts a function, who's first argument is event.target.value (if exists),
 *  followed by the full event object.
 *
 *  @param {Function} fn - Consumer's handler function
 *  @return {Function} - event handler function
 */
const withTargetValue = (fn: WithTargetValue) => (event: InputEvent | any) => {
    if (!event || !event.target) {
        return fn(undefined, event);
    }
    return fn(event.target.value, event);
};

export default withTargetValue;
