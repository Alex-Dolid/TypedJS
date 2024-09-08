import { TFloat64, isFloat64 } from './TFloat64.js';

describe('TFloat64', () => {
  it('should return the value if it is a float64', () => {
    expect(TFloat64(-1.7976931348623157e3)).toBe(-1.7976931348623157e3);
    expect(TFloat64(1.7976931348623157e3)).toBe(1.7976931348623157e3);
  });

  it('should throw an error if the value is not a float64', () => {
    expect(() => TFloat64(-1.7976931348623157e308 - 1)).toThrow();
    expect(() => TFloat64(1.7976931348623157e308 + 1)).toThrow();
  });
});

describe('isFloat64', () => {
  it('should return true if the value is a float64', () => {
    expect(isFloat64(-1.7976931348623157e3)).toBe(true);
    expect(isFloat64(1.7976931348623157e3)).toBe(true);
  });

  it('should return false if the value is not a float64', () => {
    expect(isFloat64(-1.7976931348623157e308 - 1)).toBe(false);
    expect(isFloat64(1.7976931348623157e308 + 1)).toBe(false);
  });

  it('should return false if the value is not a float', () => {
    expect(isFloat64('0')).toBe(false);
    expect(isFloat64(1)).toBe(false);
  });
});
