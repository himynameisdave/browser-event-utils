/**
 *  Helper util which ensures that a given property actually exists, then calls it if it does
 *
 *  @param {String} prop - the event method that you want to call
 *  @return {Function} event handler function
 */
const callIfExists = (prop) => (event) => !!(event && event[prop]) && event[prop]();

export default callIfExists;
