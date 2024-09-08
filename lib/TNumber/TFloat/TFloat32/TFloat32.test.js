import { TFloat32, isFloat32 } from './TFloat32.js';

describe('TFloat32', () => {
  it('should return the value if it is a float32', () => {
    expect(TFloat32(-3.40282347e3)).toBe(-3.40282347e3);
    expect(TFloat32(3.40282347e3)).toBe(3.40282347e3);
  });

  it('should throw an error if the value is not a float32', () => {
    expect(() => TFloat32(-3.40282347e38 - 1)).toThrow();
    expect(() => TFloat32(3.40282347e38 + 1)).toThrow();
  });
});

describe('isFloat32', () => {
  it('should return true if the value is a float32', () => {
    expect(isFloat32(-3.40282347e3)).toBe(true);
    expect(isFloat32(3.40282347e3)).toBe(true);
  });

  it('should return false if the value is not a float32', () => {
    expect(isFloat32(-3.40282347e38 - 1)).toBe(false);
    expect(isFloat32(3.40282347e38 + 1)).toBe(false);
  });

  it('should return false if the value is not a float', () => {
    expect(isFloat32(0)).toBe(false);
    expect(isFloat32(1)).toBe(false);
    expect(isFloat32('0')).toBe(false);
  });
});
