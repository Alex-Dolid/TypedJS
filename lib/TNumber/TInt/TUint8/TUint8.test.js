import { TUint8, isUint8 } from './TUint8.js';

describe('TUint8', () => {
  it('should return the value if it is a uint8', () => {
    expect(TUint8(0)).toBe(0);
    expect(TUint8(255)).toBe(255);
  });

  it('should throw an error if the value is not a uint8', () => {
    expect(() => TUint8(-1)).toThrow();
    expect(() => TUint8(256)).toThrow();
  });
});

describe('isUint8', () => {
  it('should return true if the value is a uint8', () => {
    expect(isUint8(0)).toBe(true);
    expect(isUint8(255)).toBe(true);
  });

  it('should return false if the value is not a uint8', () => {
    expect(isUint8(-1)).toBe(false);
    expect(isUint8(256)).toBe(false);
  });

  it('should return false if the value is not an integer', () => {
    expect(isUint8(0.1)).toBe(false);
    expect(isUint8('0')).toBe(false);
  });
});
