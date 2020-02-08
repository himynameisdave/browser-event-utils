import {
  EventType,
  EventHandler,
  $TSFixMe,
} from '../index.d';


export type TCallIfExists = (method: string) => EventHandler;
/**
 *  Helper util which ensures that a given property actually exists, then calls it if it does
 *
 *  @param {string} method - the event method that you want to call
 *  @return {Function} event handler function
 */
const callIfExists: TCallIfExists = (method: string = ''): EventHandler => (event: EventType): void => { // eslint-disable-line arrow-body-style
  return (event?.[method] as $TSFixMe)?.(); // eslint-disable-line @typescript-eslint/no-unnecessary-condition
};

export default callIfExists;
