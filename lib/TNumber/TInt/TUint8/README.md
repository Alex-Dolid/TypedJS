# TUint8

[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) --> [TNumber](../../README.md) --> [TInt](../README.md) --> `TUint8`

## Description

The `TUint8` abstraction represents a type-safe number(uint8) in the JavaScript runtime. It is a part of the `Primitives/Scalar Data types` layer of the `TNumber` type.
That is, the job of this abstraction is to check the input value for the correspondence of the uint8 `number` type at runtime.

The `TUint8` abstraction has two modes:

- `strict` - throws a `TypeError` if the input value is not a number or not an uint8 number
- `casting` - tries to cast the input value to a number and then to an uint8 number

## API

The `TUint8` type has the following API:

- `TUint8(value: any, options?: Options): number` - checks the input value for the correspondence of the uint8 `number` type. If the input value is not a number, then the function throws a `TypeError` in `strict` mode or tries to cast the input value to a number in `casting` mode. The function returns the input value if it is an uint8 number.
  - The function used `TInt` under the hood -> [TInt](../README.md)
  - In order to enable `strict` mode, you need to specify `{ strict: true `} in the options
  - For using the `casting` mode, just don't specify the options or specify `{ strict: false }`
  - The uint8 number is a number from `0` to `255`
- Types:
  - `number` - JavaScript embedded type
  - `TNumber` - the parent abstraction type of the `TInt` type
  - `TInt` - the parent abstraction type
  - `TUint8` or `uint8` - the own type

## Examples

```javascript
import { TUint8 } from 'typedjs';

// casting mode
TUint8(42); // 42
TUint8(42.42); // TypeError: TypedJS: 42.42 is not an int
TUint8('42'); // 42
TUint8('42.42'); // TypeError: TypedJS: 42.42 is not an int
TUint8('42.42.42'); // TypeError: value is not a number
TUint8(256); // TypeError: TypedJS: 256 is not an uint8
TUint8(-1); // TypeError: TypedJS: -1 is not an uint8
TUint8(NaN); // TypeError: TypedJS: NaN is not a number
TUint8(Infinity); // TypeError: TypedJS: Infinity is not a number
TUint8(-Infinity); // TypeError: TypedJS: -Infinity is not a number

// strict mode
TUint8(42, { strict: true }); // 42
TUint8(42.42, { strict: true }); // TypeError: TypedJS: 42.42 is not an int
TUint8('42', { strict: true }); // TypeError: TypedJS: '42' is not a number
TUint8('42.42', { strict: true }); // TypeError: TypedJS: '42.42' is not a number
TUint8('42.42.42', { strict: true }); // TypeError: The value is not a number
TUint8(256, { strict: true }); // TypeError: TypedJS: 256 is not an uint8
TUint8(-1, { strict: true }); // TypeError: TypedJS: -1 is not an uint8
TUint8(NaN, { strict: true }); // TypeError: TypedJS: NaN is not a number
TUint8(Infinity, { strict: true }); // TypeError: TypedJS: Infinity is not a number
TUint8(-Infinity, { strict: true }); // TypeError: TypedJS: -Infinity is not a number
```
