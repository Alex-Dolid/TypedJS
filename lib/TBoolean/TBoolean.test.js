import { TBoolean } from './TBoolean.js';

describe('TBoolean', () => {
  it('should return the value if it is a boolean', () => {
    expect(TBoolean(true)).toBe(true);
    expect(TBoolean(false)).toBe(false);
  });

  it('should coerce the value to a boolean if it is not a boolean (non-strict mode)', () => {
    expect(TBoolean(0)).toBe(false);
    expect(TBoolean(1)).toBe(true);
    expect(TBoolean('2')).toBe(true);
  });

  it('should throw an error if the value is not a boolean (strict mode)', () => {
    expect(() => TBoolean(0, { strict: true })).toThrow('TypedJS: 0 is not a boolean');
    expect(() => TBoolean(1, { strict: true })).toThrow('TypedJS: 1 is not a boolean');
    expect(() => TBoolean(0.1, { strict: true })).toThrow(
      'TypedJS: 0.1 is not a boolean',
    );
    expect(() => TBoolean('0.1', { strict: true })).toThrow(
      `TypedJS: "0.1" is not a boolean`,
    );
  });
});
