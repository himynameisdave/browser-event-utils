import withTarget from './helpers/with-target';
import noop from './helpers/noop';
import {
  EventType,
  EventHandler,
  $TSFixMe,
} from './index.d';


export type TWithNumericTargetValueHandler = (value: number | null, event: EventType) => void;

/**
 *  Accepts a function, who's first argument will be Number(event.target.value),
 *  followed by the full event object.
 *
 *  @param {Function} fn - Consumer's handler function
 *  @return {Function} - event handler function
 */
const withNumericTargetValue = (fn: TWithNumericTargetValueHandler = noop): EventHandler => {
  return withTarget((target: EventTarget | $TSFixMe, event: EventType): void => {
    const numericValue = Number(target?.value);
    return fn(!isNaN(numericValue) ? numericValue : 0, event);
  });
};

export default withNumericTargetValue;
