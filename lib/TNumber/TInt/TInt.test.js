import { TInt } from './TInt';

describe('TInt', () => {
  it('should return the value if it is an integer', () => {
    expect(TInt(1)).toBe(1);
  });

  it('should throw an error if the value is not an integer', () => {
    expect(() => TInt(1.1)).toThrow(TypeError);
  });
});
