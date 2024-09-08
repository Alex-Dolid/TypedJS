import { TNegInt, isNegInt } from './TNegInt.js';

describe('TNegInt', () => {
  it('should return a negative int', () => {
    expect(TNegInt(-1)).toBe(-1);
    expect(TNegInt(Number.MIN_SAFE_INTEGER)).toBe(Number.MIN_SAFE_INTEGER);
  });

  it('should throw an error', () => {
    expect(() => TNegInt(0)).toThrow(TypeError);
    expect(() => TNegInt(1)).toThrow(TypeError);
  });
});

describe('isNegInt', () => {
  it('should return true', () => {
    expect(isNegInt(-1)).toBe(true);
    expect(isNegInt(Number.MIN_SAFE_INTEGER)).toBe(true);
  });

  it('should return false', () => {
    expect(isNegInt(0)).toBe(false);
    expect(isNegInt(1)).toBe(false);
  });

  it('should return false if not an int', () => {
    expect(isNegInt(1.1)).toBe(false);
    expect(isNegInt('1')).toBe(false);
    expect(isNegInt([])).toBe(false);
    expect(isNegInt({})).toBe(false);
    expect(isNegInt(null)).toBe(false);
    expect(isNegInt(undefined)).toBe(false);
  });
});
