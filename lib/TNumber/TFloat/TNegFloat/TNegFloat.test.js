import { TNegFloat } from './TNegFloat.js';

describe('TNegFloat', () => {
  it('should return the value if it is a negative float', () => {
    expect(TNegFloat(-0.1)).toBe(-0.1);
    expect(TNegFloat(-1.1)).toBe(-1.1);
  });

  it('should throw an error if the value is not a negative float', () => {
    expect(() => TNegFloat(0)).toThrow();
    expect(() => TNegFloat(1)).toThrow();
    expect(() => TNegFloat(0.1)).toThrow();
  });
});
