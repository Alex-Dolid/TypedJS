import { TInt32, isInt32 } from './TInt32.js';
import { isInt16 } from '../TInt16/TInt16.js';

describe('TInt32', () => {
  it('should return the same value if it is an int32', () => {
    expect(TInt32(1)).toBe(1);
    expect(TInt32(-1)).toBe(-1);
    expect(TInt32(2147483647)).toBe(2147483647);
    expect(TInt32(-2147483648)).toBe(-2147483648);
  });

  it('should throw an error if the value is not an int32', () => {
    expect(() => TInt32(2147483648)).toThrow(TypeError);
    expect(() => TInt32(-2147483649)).toThrow(TypeError);
  });
});

describe('isInt32', () => {
  it('should return true if the value is an int32', () => {
    expect(isInt32(1)).toBe(true);
    expect(isInt32(-1)).toBe(true);
    expect(isInt32(2147483647)).toBe(true);
    expect(isInt32(-2147483648)).toBe(true);
  });

  it('should return false if the value is not an int32', () => {
    expect(isInt32(2147483648)).toBe(false);
    expect(isInt32(-2147483649)).toBe(false);
  });

  it('should return false if the value is not an integer', () => {
    expect(isInt16(0.5)).toBe(false);
    expect(isInt16('0')).toBe(false);
    expect(isInt16(null)).toBe(false);
    expect(isInt16(undefined)).toBe(false);
    expect(isInt16({})).toBe(false);
    expect(isInt16([])).toBe(false);
  });
});
