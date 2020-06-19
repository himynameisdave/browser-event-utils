import withTarget from './helpers/with-target';
import noop from './helpers/noop';
import {
  EventType,
  EventHandler,
} from './index.d';


export type TWithSelectOnFocus =
  (target?: HTMLInputElement | null, event?: EventType) => void;

/**
 * Attempts to call event.target.select(), if it exists.
 * Passes (event.target, event) along to the provided.
 *
 * @param {TWithSelectOnFocus} [fn] - Optional callback function.
 * @return {Function} - event handler function
 */
const withSelectOnFocus = (fn: TWithSelectOnFocus = noop): EventHandler => {
  return withTarget((target?: HTMLInputElement, event?: EventType): void => {
    target?.select();
    return fn(target, event);
  });
};

export default withSelectOnFocus;
