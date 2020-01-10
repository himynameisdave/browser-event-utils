import { EventType, EventHandler } from '../index.d';

export type TCallIfExists = (method: string) => EventHandler;
/**
 *  Helper util which ensures that a given property actually exists, then calls it if it does
 *
 *  @param {string} method - the event method that you want to call
 *  @return {Function} event handler function
 */
const callIfExists: TCallIfExists = (method: string = ''): EventHandler => (event: EventType): void => {
    //  TODO: replace with optional chaining (eg: `?.`)
    return !!(event && event[method]) && (event[method] as unknown as Function)();
};

export default callIfExists;
