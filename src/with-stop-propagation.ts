import withEventFactory from './helpers/with-event-factory';
import { UserEventHandler } from './index.d';


/**
 *  Accepts a function, to be called after calling event.stopPropagation
 *
 *  @param {Function} - function to be called after event.stopPropagation
 *  @return {Function} - function which returns userland event handler
 */
const withStopPropagation: UserEventHandler = withEventFactory('stopPropagation');

export default withStopPropagation;
