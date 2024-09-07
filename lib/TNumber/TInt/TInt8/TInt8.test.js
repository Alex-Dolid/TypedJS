import { TInt8, isInt8, MAX_VALUE, MIN_VALUE } from './TInt8';

describe('TInt8', () => {
  it('should return the value if it is an int8', () => {
    expect(TInt8(0)).toBe(0);
    expect(TInt8(MAX_VALUE)).toBe(MAX_VALUE);
    expect(TInt8(MIN_VALUE)).toBe(MIN_VALUE);
  });

  it('should throw an error if the value is not an int8', () => {
    expect(() => TInt8(MAX_VALUE + 1)).toThrow(TypeError);
    expect(() => TInt8(MIN_VALUE - 1)).toThrow(TypeError);
  });
});

describe('isInt8', () => {
  it('should return true if the value is an int8', () => {
    expect(isInt8(0)).toBe(true);
    expect(isInt8(MAX_VALUE)).toBe(true);
    expect(isInt8(MIN_VALUE)).toBe(true);
  });

  it('should return false if the value is not an int8', () => {
    expect(isInt8(MAX_VALUE + 1)).toBe(false);
    expect(isInt8(MIN_VALUE - 1)).toBe(false);
  });

  it('should return false if the value is not an integer', () => {
    expect(isInt8(0.5)).toBe(false);
    expect(isInt8('0')).toBe(false);
    expect(isInt8(null)).toBe(false);
    expect(isInt8(undefined)).toBe(false);
    expect(isInt8({})).toBe(false);
    expect(isInt8([])).toBe(false);
  });
});
