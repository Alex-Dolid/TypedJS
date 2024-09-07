import { TInt16, isInt16 } from './TInt16';

describe('TInt16', () => {
  it('should return the value if it is an int16', () => {
    expect(TInt16(0)).toBe(0);
    expect(TInt16(32767)).toBe(32767);
    expect(TInt16(-32768)).toBe(-32768);
  });

  it('should throw an error if the value is not an int16', () => {
    expect(() => TInt16(32768)).toThrow(TypeError);
    expect(() => TInt16(-32769)).toThrow(TypeError);
  });
});

describe('isInt16', () => {
  it('should return true if the value is an int16', () => {
    expect(isInt16(0)).toBe(true);
    expect(isInt16(32767)).toBe(true);
    expect(isInt16(-32768)).toBe(true);
  });

  it('should return false if the value is not an int16', () => {
    expect(isInt16(32768)).toBe(false);
    expect(isInt16(-32769)).toBe(false);
  });

  it('should return false if the value is not an integer', () => {
    expect(isInt16(0.5)).toBe(false);
    expect(isInt16('0')).toBe(false);
    expect(isInt16(null)).toBe(false);
    expect(isInt16(undefined)).toBe(false);
    expect(isInt16({})).toBe(false);
    expect(isInt16([])).toBe(false);
  });
});
