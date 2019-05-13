import withEventFactory from './helpers/with-event-factory';

/**
 *  Accepts a function, to be called after calling event.stopPropagation
 *
 *  @param {Function} - function to be called after event.stopPropagation
 *  @return {Function} - function which returns userland event handler
 */
const withStopPropagation : Function = withEventFactory('stopPropagation');

export default withStopPropagation;
