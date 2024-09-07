import { TNegInt16, isNegInt16 } from './TNegInt16';

describe('TNegInt16', () => {
  it('should return a negative int16', () => {
    expect(TNegInt16(-1)).toBe(-1);
    expect(TNegInt16(-32768)).toBe(-32768);
  });

  it('should throw a TypeError', () => {
    expect(() => TNegInt16(0)).toThrow(TypeError);
    expect(() => TNegInt16(32767)).toThrow(TypeError);
    expect(() => TNegInt16(32768)).toThrow(TypeError);
    expect(() => TNegInt16(-32769)).toThrow(TypeError);
  });
});

describe('isNegInt16', () => {
  it('should return true', () => {
    expect(isNegInt16(-1)).toBe(true);
    expect(isNegInt16(-32768)).toBe(true);
  });

  it('should return false', () => {
    expect(isNegInt16(0)).toBe(false);
    expect(isNegInt16(32767)).toBe(false);
    expect(isNegInt16(32768)).toBe(false);
    expect(isNegInt16(-32769)).toBe(false);
  });

  it('should return false if the value is not an integer', () => {
    expect(isNegInt16(1.1)).toBe(false);
    expect(isNegInt16(-1.1)).toBe(false);
  });
});
