import withKeyPress from './helpers/with-keypress';
import { ENTER } from './constants/keys';

/**
 *  Accepts a function, to be called if event.key === 'Enter'
 *
 *  @param {Function} - function to be called if 'Enter' is pressed
 *  @return {Function} - function which returns userland event handler
 */
const withEnterKeyPress = withKeyPress(ENTER);

export default withEnterKeyPress;
