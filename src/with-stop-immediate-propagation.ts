import withEventFactory from './helpers/with-event-factory';
import { UserEventHandler } from './index.d';


/**
 *  Accepts a function, to be called after calling event.stopImmediatePropagation
 *
 *  @param {Function} - function to be called after event.stopImmediatePropagation
 *  @return {Function} - function which returns userland event handler
 */
const withStopImmediatePropagation: UserEventHandler = withEventFactory('stopImmediatePropagation');

export default withStopImmediatePropagation;
