import withKeyPress from './helpers/with-keypress';
import { SPACE } from './constants/keys';

/**
 *  Accepts a function, to be called if event.key === 'SPACE'
 *
 *  @param {Function} - function to be called if ' ' is pressed
 *  @return {Function} - function which returns userland event handler
 */
const withSpaceKeyPress = withKeyPress(SPACE);

export default withSpaceKeyPress;
