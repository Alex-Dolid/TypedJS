import { TPosInt, isPosInt } from './TPosInt.js';

describe('TPosInt', () => {
  it('should return a positive int', () => {
    expect(TPosInt(1)).toBe(1);
    expect(TPosInt(Number.MAX_SAFE_INTEGER)).toBe(Number.MAX_SAFE_INTEGER);
  });

  it('should throw an error', () => {
    expect(() => TPosInt(0)).toThrow(TypeError);
    expect(() => TPosInt(-1)).toThrow(TypeError);
  });
});

describe('isPosInt', () => {
  it('should return true', () => {
    expect(isPosInt(1)).toBe(true);
    expect(isPosInt(Number.MAX_SAFE_INTEGER)).toBe(true);
  });

  it('should return false', () => {
    expect(isPosInt(0)).toBe(false);
    expect(isPosInt(-1)).toBe(false);
  });

  it('should return false if not an int', () => {
    expect(isPosInt(1.1)).toBe(false);
    expect(isPosInt('1')).toBe(false);
    expect(isPosInt([])).toBe(false);
    expect(isPosInt({})).toBe(false);
    expect(isPosInt(null)).toBe(false);
    expect(isPosInt(undefined)).toBe(false);
  });
});
