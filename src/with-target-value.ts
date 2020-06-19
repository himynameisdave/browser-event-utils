import withTarget from './helpers/with-target';
import noop from './helpers/noop';
import {
  EventType,
  EventHandler,
} from './index.d';


export type TWithTargetValueHandler =
  (value: string | undefined, event?: EventType) => void;

/**
 *  Accepts a function, who's first argument is event.target.value (if exists),
 *  followed by the full event object.
 *
 *  @param {Function} fn - Consumer's handler function
 *  @return {Function} - event handler function
 */
const withTargetValue = (fn: TWithTargetValueHandler = noop): EventHandler => {
  return withTarget((target?: HTMLInputElement, event?: EventType): void => {
    return fn(target?.value, event);
  });
};

export default withTargetValue;
