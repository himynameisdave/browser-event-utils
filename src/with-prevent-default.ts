import withEventFactory from './helpers/with-event-factory';
import { UserEventHandler } from './index.d';


/**
 *  Accepts a function, to be called after calling event.preventDefault
 *
 *  @param {Function} - function to be called after event.preventDefault
 *  @return {Function} - function which returns userland event handler
 */
const withPreventDefault: UserEventHandler = withEventFactory('preventDefault');

export default withPreventDefault;
