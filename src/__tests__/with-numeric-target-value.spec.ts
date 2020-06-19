import withNumericTargetValue from '../with-numeric-target-value';
import { EventType } from '../index.d';


describe('withNumericTargetValue', () => {
  it('will not fall over if bad values are passed', () => {
    expect(() => withNumericTargetValue()()).not.toThrow();
  });
  it('calls the hanlder with a correct numeric value', () => {
    const handler = jest.fn();
    const mockEvent = { target: { value: '100' } } as EventType;
    withNumericTargetValue(handler)(mockEvent);
    expect(handler).toHaveBeenCalledWith(100, mockEvent);
  });
  it('casts non-numeric nullish values properly', () => {
    const handler = jest.fn();
    const mockEvent = { target: { value: null } } as EventType;
    withNumericTargetValue(handler)(mockEvent);
    expect(handler).toHaveBeenCalledWith(0, mockEvent);
  });
  it('will never pass a NaN through as the numeric value', () => {
    const handler = jest.fn();
    const mockEvent = { target: { } } as EventType;
    withNumericTargetValue(handler)(mockEvent);
    expect(handler).not.toHaveBeenCalledWith(NaN, mockEvent);
  });
});
