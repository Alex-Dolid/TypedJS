import { TPosBigInt } from './TPosBigInt.js';

describe('TPosBigInt', () => {
  it('should return the value if it is a positive big int', () => {
    expect(TPosBigInt(1n)).toBe(1n);
  });

  it('should throw an error if the value is not a positive big int', () => {
    expect(() => TPosBigInt(0n)).toThrow('TypedJS: 0 is not a posbigint');
    expect(() => TPosBigInt(0)).toThrow('TypedJS: 0 is not a posbigint');
    expect(() => TPosBigInt(-1n)).toThrow('TypedJS: -1 is not a posbigint');
  });

  it('should coerce the value to a positive big int if it is not a positive big int (non-strict mode)', () => {
    expect(TPosBigInt(1)).toBe(1n);
    expect(TPosBigInt('2')).toBe(2n);
  });

  it('should throw an error if the value is not a big int (strict mode)', () => {
    expect(() => TPosBigInt(0, { strict: true })).toThrow('TypedJS: 0 is not a bigint');
    expect(() => TPosBigInt(-1, { strict: true })).toThrow('TypedJS: -1 is not a bigint');
    expect(() => TPosBigInt(0.1, { strict: true })).toThrow(
      'TypedJS: 0.1 is not a bigint',
    );
    expect(() => TPosBigInt('0.1', { strict: true })).toThrow(
      `TypedJS: "0.1" is not a bigint`,
    );
  });
});
