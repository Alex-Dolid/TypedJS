import { TNegInt32, isNegInt32 } from './TNegInt32.js';

describe('TNegInt32', () => {
  it('should return the value if it is a negInt32', () => {
    expect(TNegInt32(-1)).toBe(-1);
    expect(TNegInt32(-2147483648)).toBe(-2147483648);
  });

  it('should throw an error if the value is not a negInt32', () => {
    expect(() => TNegInt32(0)).toThrow(TypeError);
    expect(() => TNegInt32(2147483647)).toThrow(TypeError);
  });
});

describe('isNegInt32', () => {
  it('should return true if the value is a negInt32', () => {
    expect(isNegInt32(-1)).toBe(true);
    expect(isNegInt32(-2147483648)).toBe(true);
  });

  it('should return false if the value is not a negInt32', () => {
    expect(isNegInt32(0)).toBe(false);
    expect(isNegInt32(2147483647)).toBe(false);
  });

  it('should return false if the value is not an integer', () => {
    expect(isNegInt32(0.5)).toBe(false);
    expect(isNegInt32('0')).toBe(false);
    expect(isNegInt32(null)).toBe(false);
    expect(isNegInt32(undefined)).toBe(false);
    expect(isNegInt32({})).toBe(false);
    expect(isNegInt32([])).toBe(false);
  });
});
