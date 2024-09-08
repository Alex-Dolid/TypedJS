import { TFloat } from './TFloat.js';

describe('TFloat', () => {
  it('should return the value if it is a float', () => {
    expect(TFloat(1.1)).toBe(1.1);
  });

  it('should throw an error if the value is not a float', () => {
    expect(() => TFloat('0')).toThrow();
    expect(() => TFloat(0)).toThrow();
    expect(() => TFloat(1)).toThrow();
  });
});
