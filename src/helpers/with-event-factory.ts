import callIfExists from './call-if-exists';
import { EventType, EventHandler, UserEventHandler } from '../index.d';

export type TWithEventFactory = (method: string) => UserEventHandler;

/**
 *  Factory which returns the higher-order event handler function
 *
 *  @param {Function} method - the event method which you want to call
 *  @return {Function} - function which accepts the consumer's event handler function and returns the final event handler function
 */
const withEventFactory: TWithEventFactory = (method: string = ''): UserEventHandler => (fn: EventHandler): EventHandler => (event: EventType): void => {
    callIfExists(method)(event);
    return fn(event);
};

export default withEventFactory;
