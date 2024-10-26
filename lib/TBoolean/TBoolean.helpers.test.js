import { isBoolean } from './TBoolean.helpers.js';

describe('TBoolean helpers', () => {
  describe('isBoolean', () => {
    it('should return true if the value is a boolean', () => {
      expect(isBoolean(true)).toBe(true);
      expect(isBoolean(false)).toBe(true);
    });

    it('should return false if the value is not a boolean', () => {
      expect(isBoolean(1)).toBe(false);
      expect(isBoolean('true')).toBe(false);
    });
  });
});
