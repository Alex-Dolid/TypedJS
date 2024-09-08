import { TNegBigInt } from './TNegBigInt.js';

describe('TNegBigInt', () => {
  it('should return the value if it is a negative big int', () => {
    expect(TNegBigInt(-1n)).toBe(-1n);
  });

  it('should throw an error if the value is not a negative big int', () => {
    expect(() => TNegBigInt(0n)).toThrow('TypedJS: 0 is not a negbigint');
    expect(() => TNegBigInt(0)).toThrow('TypedJS: 0 is not a negbigint');
    expect(() => TNegBigInt(1n)).toThrow('TypedJS: 1 is not a negbigint');
  });

  it('should coerce the value to a negative big int if it is not a negative big int (non-strict mode)', () => {
    expect(TNegBigInt(-1)).toBe(-1n);
    expect(TNegBigInt('-2')).toBe(-2n);
  });

  it('should throw an error if the value is not a big int (strict mode)', () => {
    expect(() => TNegBigInt(0, { strict: true })).toThrow('TypedJS: 0 is not a bigint');
    expect(() => TNegBigInt(1, { strict: true })).toThrow('TypedJS: 1 is not a bigint');
    expect(() => TNegBigInt(0.1, { strict: true })).toThrow(
      'TypedJS: 0.1 is not a bigint',
    );
    expect(() => TNegBigInt('0.1', { strict: true })).toThrow(
      `TypedJS: "0.1" is not a bigint`,
    );
  });
});
