import { EventType, EventHandler, $TSFixMe } from '../index.d';
import noop from './noop';


export type TEventTarget = EventTarget | HTMLInputElement | $TSFixMe;
export type TWithTargetHandler = (target: TEventTarget, event: EventType) => void;
export type TWithTarget = (fn: TWithTargetHandler) => EventHandler;

/**
 * Calls a fn with event.target (if it exists)
 *
 * @param fn Function which will be called with event.target (if it exists)
 */
const withTarget: TWithTarget = (fn: TWithTargetHandler = noop): EventHandler => (event: EventType = {} as $TSFixMe): void => {
    return fn(event?.target, event);
};

export default withTarget;
