import { TUint16, isUint16 } from './TUint16.js';

describe('TUint16', () => {
  it('should return the value if it is a uint16', () => {
    expect(TUint16(0)).toBe(0);
    expect(TUint16(65535)).toBe(65535);
  });

  it('should throw an error if the value is not a uint16', () => {
    expect(() => TUint16(-1)).toThrow();
    expect(() => TUint16(65536)).toThrow();
  });
});

describe('isUint16', () => {
  it('should return true if the value is a uint16', () => {
    expect(isUint16(0)).toBe(true);
    expect(isUint16(65535)).toBe(true);
  });

  it('should return false if the value is not a uint16', () => {
    expect(isUint16(-1)).toBe(false);
    expect(isUint16(65536)).toBe(false);
  });

  it('should return false if the value is not an integer', () => {
    expect(isUint16(0.1)).toBe(false);
    expect(isUint16('0')).toBe(false);
  });
});
