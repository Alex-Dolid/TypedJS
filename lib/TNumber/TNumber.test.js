import { TNumber } from './TNumber';

describe('TNumber', () => {
  it('should return the value if it is a number', () => {
    expect(TNumber(1)).toBe(1);
  });

  it('should return the number if the value can be coerced to a number (non-strict mode)', () => {
    expect(TNumber('1')).toBe(1);
  });

  it('should throw a TypeError if the value can not be coerced to a number (non-strict mode)', () => {
    expect(() => TNumber('a1', { strict: true })).toThrow(TypeError);
  });

  it('should throw a TypeError if the value is not a number (strict mode)', () => {
    expect(() => TNumber('1', { strict: true })).toThrow(TypeError);
  });

  it('should throw a TypeError if the value is a infinite(neg)', () => {
    expect(() => TNumber(-Infinity)).toThrow(TypeError);
  });

  it('should throw a TypeError if the value is a infinite(pos)', () => {
    expect(() => TNumber(Infinity)).toThrow(TypeError);
  });

  it('should throw a TypeError with the correct message', () => {
    expect(() => TNumber('1', { strict: true })).toThrow(`TypedJS: "1" is not a number`);
  });
});
