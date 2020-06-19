import noop from './noop';
import {
  EventType, EventHandler, $TSFixMe,
} from '../index.d';


export type TEventTarget = EventTarget | HTMLInputElement | $TSFixMe;
export type TWithTargetHandler = (target: TEventTarget, event?: EventType) => void;
export type TWithTarget = (fn: TWithTargetHandler) => EventHandler;

/**
 * Calls a fn with event.target (if it exists)
 *
 * @param fn Function which will be called with event.target (if it exists)
 */
const withTarget: TWithTarget = (fn: TWithTargetHandler = noop): EventHandler => {
  return (event?: EventType): void => {
    return fn(event?.target, event);
  };
};

export default withTarget;
