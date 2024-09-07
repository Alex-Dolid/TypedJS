import { TNegInt8, isNegInt8, MAX_VALUE, MIN_VALUE } from './TNegInt8';

describe('TNegInt8', () => {
  it('should return the value if it is a neg int8', () => {
    expect(TNegInt8(MAX_VALUE)).toBe(MAX_VALUE);
    expect(TNegInt8(MIN_VALUE)).toBe(MIN_VALUE);
  });

  it('should throw an error if the value is not a neg int8', () => {
    expect(() => TNegInt8(0)).toThrow(TypeError);
    expect(() => TNegInt8(MIN_VALUE - 1)).toThrow(TypeError);
    expect(() => TNegInt8(MAX_VALUE * -1)).toThrow(TypeError);
  });
});

describe('isNegInt8', () => {
  it('should return true if the value is a neg int8', () => {
    expect(isNegInt8(0)).toBe(false);
    expect(isNegInt8(MAX_VALUE)).toBe(true);
    expect(isNegInt8(MIN_VALUE)).toBe(true);
  });

  it('should return false if the value is not a neg int8', () => {
    expect(isNegInt8(MIN_VALUE - 1)).toBe(false);
    expect(isNegInt8(MAX_VALUE * -1)).toBe(false);
  });

  it('should return false if the value is not an integer', () => {
    expect(isNegInt8(0.5)).toBe(false);
    expect(isNegInt8('0')).toBe(false);
    expect(isNegInt8(null)).toBe(false);
    expect(isNegInt8(undefined)).toBe(false);
    expect(isNegInt8({})).toBe(false);
    expect(isNegInt8([])).toBe(false);
  });
});
