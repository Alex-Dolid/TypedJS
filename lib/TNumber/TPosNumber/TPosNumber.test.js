import { TPosNumber } from './TPosNumber.js';

describe('TPosNumber', () => {
  it('should return the number if it is positive', () => {
    expect(TPosNumber(1)).toBe(1);
  });

  it('should throw an error if the number is not positive', () => {
    expect(() => TPosNumber(-1)).toThrow(TypeError);
  });
});
