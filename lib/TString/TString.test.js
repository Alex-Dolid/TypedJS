import { TString } from './TString.js';

describe('TString', () => {
  it('should return the value if it is a string', () => {
    expect(TString('')).toBe('');
    expect(TString('foo')).toBe('foo');
  });

  it('should coerce the value to a string if it is not a string (non-strict mode)', () => {
    expect(TString(0)).toBe('0');
    expect(TString(null)).toBe('null');
  });

  it('should throw an error if the value is not a string (strict mode)', () => {
    expect(() => TString(0, { strict: true })).toThrow('TypedJS: 0 is not a string');
    expect(() => TString(null, { strict: true })).toThrow(
      'TypedJS: null is not a string',
    );
  });
});
