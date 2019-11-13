import withKeyPress from './helpers/with-keypress';
import { ESCAPE } from './constants/keys';

/**
 *  Accepts a function, to be called if event.key === 'Escape'
 *
 *  @param {Function} - function to be called if 'Escape'
 *  @return {Function} - function which returns userland event handler
 */
const withEscapeKeypress = withKeyPress(ESCAPE);

export default withEscapeKeypress;
