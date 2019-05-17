import callIfExists from './call-if-exists';

/**
 *  Factory which returns the higher-order event handler function
 *
 *  @param {Function} method - the event method which you want to call
 *  @return {Function} - function which accepts the consumer's event handler function and returns the final event handler function
 */
const withEventFactory = (method: string = ''): Function => (fn: Function = (): null => null): Function => (event: any = {}): Function => {
    callIfExists(method)(event);
    return fn(event);
};

export default withEventFactory;
