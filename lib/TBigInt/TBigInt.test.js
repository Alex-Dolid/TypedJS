import { TBigInt } from './TBigInt.js';

describe('TBigInt', () => {
  it('should return the value if it is a big int', () => {
    expect(TBigInt(0n)).toBe(0n);
    expect(TBigInt(1n)).toBe(1n);
  });

  it('should coerce the value to a big int if it is not a big int (non-strict mode)', () => {
    expect(TBigInt(0)).toBe(0n);
    expect(TBigInt(1)).toBe(1n);
    expect(TBigInt('2')).toBe(2n);
  });

  it('should throw an error if the value is not a big int (strict mode)', () => {
    expect(() => TBigInt(0, { strict: true })).toThrow('TypedJS: 0 is not a bigint');
    expect(() => TBigInt(1, { strict: true })).toThrow('TypedJS: 1 is not a bigint');
    expect(() => TBigInt(0.1, { strict: true })).toThrow('TypedJS: 0.1 is not a bigint');
    expect(() => TBigInt('0.1', { strict: true })).toThrow(
      `TypedJS: "0.1" is not a bigint`,
    );
  });
});
