import { isNumber, isPositive, isNegative, isFloat } from './TNumber.helpers.js';

describe('TNumber helpers', () => {
  describe('isNumber', () => {
    it('should return true if the value is a number', () => {
      expect(isNumber(1)).toBe(true);
    });

    it('should return false if the value is not a number', () => {
      expect(isNumber('1')).toBe(false);
    });

    it('should return false if the value is a infinite(neg)', () => {
      expect(isNumber(-Infinity)).toBe(false);
    });

    it('should return false if the value is a infinite(pos)', () => {
      expect(isNumber(Infinity)).toBe(false);
    });
  });

  describe('isPositive', () => {
    it('should return true if the value is a positive number', () => {
      expect(isPositive(1)).toBe(true);
    });

    it('should return false if the value is not a positive number', () => {
      expect(isPositive(-1)).toBe(false);
    });

    it('should return false if the value is not a number', () => {
      expect(isPositive('1')).toBe(false);
    });

    it('should return false if the value is a infinite(neg)', () => {
      expect(isPositive(-Infinity)).toBe(false);
    });

    it('should return false if the value is a infinite(pos)', () => {
      expect(isPositive(Infinity)).toBe(false);
    });
  });

  describe('isNegative', () => {
    it('should return true if the value is a negative number', () => {
      expect(isNegative(-1)).toBe(true);
    });

    it('should return false if the value is not a negative number', () => {
      expect(isNegative(1)).toBe(false);
    });

    it('should return false if the value is not a number', () => {
      expect(isNegative('1')).toBe(false);
    });

    it('should return false if the value is a infinite(neg)', () => {
      expect(isNegative(-Infinity)).toBe(false);
    });

    it('should return false if the value is a infinite(pos)', () => {
      expect(isNegative(Infinity)).toBe(false);
    });
  });

  describe('isFloat', () => {
    it('should return true if the value is a float number', () => {
      expect(isFloat(1.1)).toBe(true);
    });

    it('should return false if the value is not a float number', () => {
      expect(isFloat(1)).toBe(false);
    });

    it('should return false if the value is not a number', () => {
      expect(isFloat('1')).toBe(false);
    });

    it('should return false if the value is a infinite(neg)', () => {
      expect(isFloat(-Infinity)).toBe(false);
    });

    it('should return false if the value is a infinite(pos)', () => {
      expect(isFloat(Infinity)).toBe(false);
    });
  });
});
