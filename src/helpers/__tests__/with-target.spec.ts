/* eslint-disable @typescript-eslint/explicit-function-return-type */
import withTarget from '../with-target';
import { EventType, $TSFixMe } from '../../index.d';


describe('withTarget', () => {
  it(`doesn't fall over when you pass it bad values`, () => {
    expect(() => withTarget()()).not.toThrow();
  });
  it('calls the provided method with event.target (if it exists)', () => {
    const mockEvent: EventType | $TSFixMe = {
      target: 'mockEvent',
    };
    const mock = jest.fn();
    withTarget(mock)(mockEvent);
    expect(mock).toHaveBeenCalledWith(mockEvent.target, mockEvent);
  });
});
