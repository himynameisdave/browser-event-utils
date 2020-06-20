import withKeyPress from '../with-keypress';


describe('withKeyPress', () => {
  it(`doesn't fall over when you pass it bad values`, () => {
    expect(() => withKeyPress()()()).not.toThrow();
  });
  it('calls the provided function if event.key is present', () => {
    const callback = jest.fn();
    const mockEvent: any = {
      key: 'Enter',
    };     
    const handler = withKeyPress('Enter')(callback);
    handler(mockEvent);
    expect(callback).toBeCalledTimes(1);
  });
  it('does nothing if event.key is not present', () => {
    const callback = jest.fn();
    const mockEvent: any = {
      key: '__FAKE_KEY',
    };     
    const handler = withKeyPress('Enter')(callback);
    handler(mockEvent);
    expect(callback).not.toHaveBeenCalled();
  });
});
