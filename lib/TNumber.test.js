import { TNumber } from './TNumber';

const getErrorMessage = (value, msg) => msg || `"${value}" is not a number`;

const testCases = [
  [
    'Strict mode is on',
    ['[Number]: should return number', [1, { strict: true }], 'toBe', 1],
    // String
    [
      '[String]: should throw TypeError',
      ['1', { strict: true }],
      'toThrow',
      TypeError,
    ],
    [
      '[String]: should throw TypeError with correct message',
      ['1', { strict: true }],
      'toThrow',
      new TypeError(getErrorMessage('1')),
    ],
    // Undefined
    [
      '[Undefined]: should throw TypeError',
      [undefined, { strict: true }],
      'toThrow',
      TypeError,
    ],
    [
      '[Undefined]: should throw TypeError with correct message',
      [undefined, { strict: true }],
      'toThrow',
      new TypeError(getErrorMessage(undefined)),
    ],
    // Null
    [
      '[Null]: should throw TypeError',
      [null, { strict: true }],
      'toThrow',
      TypeError,
    ],
    [
      '[Null]: should throw TypeError with correct message',
      [null, { strict: true }],
      'toThrow',
      new TypeError(getErrorMessage(null)),
    ],
    // Boolean-true
    [
      '[Boolean-true]: should throw TypeError',
      [true, { strict: true }],
      'toThrow',
      TypeError,
    ],
    [
      '[Boolean-true]: should throw TypeError with correct message',
      [true, { strict: true }],
      'toThrow',
      new TypeError(getErrorMessage(true)),
    ],
    // Boolean-false
    [
      '[Boolean-false]: should throw TypeError',
      [false, { strict: true }],
      'toThrow',
      TypeError,
    ],
    [
      '[Boolean-false]: should throw TypeError with correct message',
      [false, { strict: true }],
      'toThrow',
      new TypeError(getErrorMessage(false)),
    ],
    // BigInt
    [
      '[BigInt]: should throw TypeError',
      [BigInt(9007199254740991n), { strict: true }],
      'toThrow',
      TypeError,
    ],
    [
      '[BigInt]: should throw TypeError with correct message',
      [BigInt(9007199254740991n), { strict: true }],
      'toThrow',
      new TypeError(getErrorMessage(BigInt(9007199254740991n))),
    ],
    // Symbol
    [
      '[Symbol]: should throw TypeError',
      [Symbol('foo'), { strict: true }],
      'toThrow',
      TypeError,
    ],
    [
      '[Symbol]: should throw TypeError with correct message',
      [Symbol('foo'), { strict: true }],
      'toThrow',
      new TypeError(getErrorMessage(Symbol('foo'), 'Symbol is not a number')),
    ],
    // Object
    [
      '[Object]: should throw TypeError',
      [{}, { strict: true }],
      'toThrow',
      TypeError,
    ],
    [
      '[Symbol]: should throw TypeError with correct message',
      [{}, { strict: true }],
      'toThrow',
      new TypeError(
        getErrorMessage(Object(), '"[object Object]" is not a number'),
      ),
    ],
    // Array
    [
      '[Array]: should throw TypeError',
      [[], { strict: true }],
      'toThrow',
      TypeError,
    ],
    [
      '[Array]: should throw TypeError with correct message',
      [[], { strict: true }],
      'toThrow',
      new TypeError(
        getErrorMessage(Object(), '"[]" is not a number'),
      ),
    ],
  ],

  [
    'Strict mode is off',
    ['[Number]: should return number', [1], 'toBe', 1],
    // String
    [
      '[String]: should return number if string can coerce in number',
      ['1'],
      'toBe',
      1,
    ],
    [
      '[String]: should throw TypeError if string can not coerce in number',
      ['foo'],
      'toThrow',
      TypeError,
    ],
    [
      '[String]: should throw TypeError with correct message if string can not coerce in number',
      ['foo'],
      'toThrow',
      new TypeError(getErrorMessage('foo')),
    ],
    // Undefined
    ['[Undefined]: should throw TypeError', [undefined], 'toThrow', TypeError],
    [
      '[Undefined]: should throw TypeError with correct message',
      [undefined],
      'toThrow',
      new TypeError(getErrorMessage(undefined)),
    ],
    // Null
    ['[Null]: should return 0', [null], 'toBe', 0],
    // Boolean-true
    ['[Boolean-true]: should return 1', [true], 'toBe', 1],
    // Boolean-false
    ['[Boolean-false]: should return 0', [false], 'toBe', 0],
    // BigInt
    [
      '[BigInt]: should return possible number',
      [BigInt(9007199254740991n)],
      'toBe',
      9007199254740991,
    ],
    // Symbol
    ['[Symbol]: should throw TypeError', [Symbol('foo')], 'toThrow', TypeError],
    [
      '[Symbol]: should throw TypeError with correct message',
      [Symbol('foo')],
      'toThrow',
      new TypeError(
        getErrorMessage(
          Symbol('foo'),
          'Cannot convert a Symbol value to a number',
        ),
      ),
    ],
    // Object
    ['[Object]: should throw TypeError', [{}], 'toThrow', TypeError],
    [
      '[Symbol]: should throw TypeError with correct message',
      [{}],
      'toThrow',
      new TypeError(
        getErrorMessage(Object(), '"[object Object]" is not a number'),
      ),
    ],
    // Array
    [
      '[Array]: should throw TypeError',
      [[], { strict: true }],
      'toThrow',
      TypeError,
    ],
    [
      '[Array]: should throw TypeError with correct message',
      [['d'], { strict: true }],
      'toThrow',
      new TypeError(
        getErrorMessage(Object(), '"[]" is not a number'),
      ),
    ],
  ],
];

describe('TNumber', () => {
  testCases.forEach(([name, ...itTestCases]) => {
    describe(name, () => {
      itTestCases.forEach(([itName, args, method, expectedValue]) => {
        it(itName, () => {
          expect(
            method === 'toThrow' ? () => TNumber(...args) : TNumber(...args),
          )[method](expectedValue);
        });
      });
    });
  });
});
