import { TUint32, isUint32 } from './TUint32.js';

describe('TUint32', () => {
  it('should return the value if it is a uint32', () => {
    expect(TUint32(0)).toBe(0);
    expect(TUint32(4294967295)).toBe(4294967295);
  });

  it('should throw an error if the value is not a uint32', () => {
    expect(() => TUint32(-1)).toThrow();
    expect(() => TUint32(4294967296)).toThrow();
  });
});

describe('isUint32', () => {
  it('should return true if the value is a uint32', () => {
    expect(isUint32(0)).toBe(true);
    expect(isUint32(4294967295)).toBe(true);
  });

  it('should return false if the value is not a uint32', () => {
    expect(isUint32(-1)).toBe(false);
    expect(isUint32(4294967296)).toBe(false);
  });

  it('should return false if the value is not an integer', () => {
    expect(isUint32(0.1)).toBe(false);
    expect(isUint32('0')).toBe(false);
  });
});
