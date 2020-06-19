import withSelectOnFocus from '../with-select-on-focus';
import { $TSFixMe } from '../index.d';


describe('withSelectOnFocus', () => {
  it('does not fall over with bad values', () => {
    expect(() => withSelectOnFocus()()).not.toThrow();
  });
  it('calls event.target.select, if it exists', () => {
    const mockEvent = {
      target: {
        select: jest.fn(),
      },
    } as $TSFixMe;
    withSelectOnFocus()(mockEvent);
    expect(mockEvent.target.select).toHaveBeenCalledTimes(1);
  });
  it('passes target and event along to the callback function', () => {
    const mockEvent = {
      target: {
        select: jest.fn(),
      },
    } as $TSFixMe;
    const mockHandler = jest.fn();
    withSelectOnFocus(mockHandler)(mockEvent);
    expect(mockEvent.target.select).toHaveBeenCalledTimes(1);
    expect(mockHandler).toHaveBeenCalledTimes(1);
    expect(mockHandler).toHaveBeenCalledWith(mockEvent.target, mockEvent);
  });
});
