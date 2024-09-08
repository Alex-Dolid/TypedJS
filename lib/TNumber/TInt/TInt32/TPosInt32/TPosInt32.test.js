import { TPosInt32, isPosInt32 } from './TPosInt32.js';
import { isPosInt16 } from '../../TInt16/TPosInt16/TPosInt16.js';

describe('TPosInt32', () => {
  it('should return a positive int32', () => {
    expect(TPosInt32(1)).toBe(1);
    expect(TPosInt32(2147483647)).toBe(2147483647);
  });

  it('should throw an error', () => {
    expect(() => TPosInt32(0)).toThrow(TypeError);
    expect(() => TPosInt32(-1)).toThrow(TypeError);
    expect(() => TPosInt32(2147483648)).toThrow(TypeError);
  });
});

describe('isPosInt32', () => {
  it('should return true', () => {
    expect(isPosInt32(1)).toBe(true);
    expect(isPosInt32(2147483647)).toBe(true);
  });

  it('should return false', () => {
    expect(isPosInt32(0)).toBe(false);
    expect(isPosInt32(-1)).toBe(false);
    expect(isPosInt32(2147483648)).toBe(false);
  });

  it('should return false if not an int32', () => {
    expect(isPosInt16(1.1)).toBe(false);
    expect(isPosInt16('1')).toBe(false);
    expect(isPosInt16([])).toBe(false);
    expect(isPosInt16({})).toBe(false);
    expect(isPosInt16(null)).toBe(false);
    expect(isPosInt16(undefined)).toBe(false);
  });
});
