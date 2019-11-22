import { EventHandler } from '../index.d';

/**
 *  Helper util which ensures that a given property actually exists, then calls it if it does
 *
 *  @param {String} method - the event method that you want to call
 *  @return {Function} event handler function
 */
const callIfExists = (method: string): EventHandler => (event: KeyboardEvent | any) => {
    return !!(event && event[method]) && event[method]();
};

export default callIfExists;
