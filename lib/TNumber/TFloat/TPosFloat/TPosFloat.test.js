import { TPosFloat } from './TPosFloat';

describe('TPosFloat', () => {
  it('should return the value if it is a positive float', () => {
    expect(TPosFloat(0.1)).toBe(0.1);
  });

  it('should throw an error if the value is not a positive float', () => {
    expect(() => TPosFloat(-1)).toThrow();
    expect(() => TPosFloat(-0.1)).toThrow();
  });
});
