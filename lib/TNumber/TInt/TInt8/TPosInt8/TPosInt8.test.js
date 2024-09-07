import { TPosInt8, isPosInt8 } from './TPosInt8';

describe('TPosInt8', () => {
  it('should return a positive int8', () => {
    expect(TPosInt8(1)).toBe(1);
    expect(TPosInt8(127)).toBe(127);
  });

  it('should throw a TypeError', () => {
    expect(() => TPosInt8(0)).toThrow(TypeError);
    expect(() => TPosInt8(-1)).toThrow(TypeError);
    expect(() => TPosInt8(-128)).toThrow(TypeError);
  });
});

describe('isPosInt8', () => {
  it('should return true', () => {
    expect(isPosInt8(1)).toBe(true);
    expect(isPosInt8(127)).toBe(true);
  });

  it('should return false', () => {
    expect(isPosInt8(0)).toBe(false);
    expect(isPosInt8(-1)).toBe(false);
    expect(isPosInt8(-128)).toBe(false);
  });
});
