import { TPosInt16, isPosInt16 } from './TPosInt16.js';

describe('TPosInt16', () => {
  it('should return a positive int16', () => {
    expect(TPosInt16(1)).toBe(1);
    expect(TPosInt16(32767)).toBe(32767);
  });

  it('should throw an error', () => {
    expect(() => TPosInt16(0)).toThrow(TypeError);
    expect(() => TPosInt16(32768)).toThrow(TypeError);
    expect(() => TPosInt16(-32768)).toThrow(TypeError);
  });
});

describe('isPosInt16', () => {
  it('should return true', () => {
    expect(isPosInt16(1)).toBe(true);
    expect(isPosInt16(32767)).toBe(true);
  });

  it('should return false', () => {
    expect(isPosInt16(0)).toBe(false);
    expect(isPosInt16(32768)).toBe(false);
    expect(isPosInt16(-32768)).toBe(false);
  });

  it('should return false if not an int16', () => {
    expect(isPosInt16(1.1)).toBe(false);
    expect(isPosInt16('1')).toBe(false);
    expect(isPosInt16([])).toBe(false);
    expect(isPosInt16({})).toBe(false);
    expect(isPosInt16(null)).toBe(false);
    expect(isPosInt16(undefined)).toBe(false);
  });
});
