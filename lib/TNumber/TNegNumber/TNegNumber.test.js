import { TNegNumber } from './TNegNumber.js';

describe('TNegNumber', () => {
  it('should return the number if it is negative', () => {
    expect(TNegNumber(-1)).toBe(-1);
  });

  it('should throw an error if the number is not negative', () => {
    expect(() => TNegNumber(1)).toThrow(TypeError);
  });
});
