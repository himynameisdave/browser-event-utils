import withEventFactory from './helpers/with-event-factory.ts';

/**
 *  Accepts a function, to be called after calling event.stopImmediatePropagation
 *
 *  @param {Function} - function to be called after event.stopImmediatePropagation
 *  @return {Function} - function which returns userland event handler
 */
const withStopImmediatePropagation = withEventFactory('stopImmediatePropagation');

export default withStopImmediatePropagation;
