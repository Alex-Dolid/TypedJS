import { isBigInt, isPositive, isNegative } from './TBigInt.helpers.js';

describe('TBigInt helpers', () => {
  describe('isBigInt', () => {
    it('should return true if the value is a BigInt', () => {
      expect(isBigInt(1n)).toBe(true);
    });

    it('should return false if the value is not a BigInt', () => {
      expect(isBigInt(1)).toBe(false);
      expect(isBigInt('1')).toBe(false);
    });
  });

  describe('isPositive', () => {
    it('should return true if the value is a positive BigInt', () => {
      expect(isPositive(1n)).toBe(true);
    });

    it('should return false if the value is not a positive BigInt', () => {
      expect(isPositive(-1n)).toBe(false);
    });

    it('should return false if the value is not a BigInt', () => {
      expect(isPositive('1')).toBe(false);
      expect(isPositive(1)).toBe(false);
    });
  });

  describe('isNegative', () => {
    it('should return true if the value is a negative BigInt', () => {
      expect(isNegative(-1n)).toBe(true);
    });

    it('should return false if the value is not a negative BigInt', () => {
      expect(isNegative(1n)).toBe(false);
    });

    it('should return false if the value is not a BigInt', () => {
      expect(isNegative('1')).toBe(false);
      expect(isNegative(1)).toBe(false);
    });
  });
});
