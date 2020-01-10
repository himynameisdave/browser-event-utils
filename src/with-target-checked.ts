import withTarget from './helpers/with-target';
import noop from './helpers/noop';
import { EventType, EventHandler } from './index.d';

export type TWithTargetCheckedHandler = (value: string | null, event: EventType) => void;

/**
 *  Accepts a function, who's first argument is event.target.checked (if exists),
 *  followed by the full event object.
 *
 *  @param {Function} fn - Consumer's handler function
 *  @return {Function} - event handler function
 */
const withTargetChecked = (fn: TWithTargetCheckedHandler = noop): EventHandler => withTarget((target, event): void => fn(target?.checked, event));

export default withTargetChecked;
