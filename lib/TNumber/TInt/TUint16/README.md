# TUint16

[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) --> [TNumber](../../README.md) --> [TInt](../README.md) --> `TUint16`

## Description

The `TUint16` abstraction represents a type-safe number(uint16) in the JavaScript runtime. It is a part of the `Primitives/Scalar Data types` layer of the `TNumber` type.
That is, the job of this abstraction is to check the input value for the correspondence of the uint16 `number` type at runtime.

The `TUint16` abstraction has two modes:
- `strict` - throws a `TypeError` if the input value is not a number or not an uint16 number
- `casting` - tries to cast the input value to a number and then to an uint16 number

## API

The `TUint16` type has the following API:

- `TUint16(value: any, options?: Options): number` - checks the input value for the correspondence of the uint16 `number` type. If the input value is not a number, then the function throws a `TypeError` in `strict` mode or tries to cast the input value to a number in `casting` mode. The function returns the input value if it is an uint16 number.
  - The function used `TInt` under the hood -> [TInt](../README.md)
  - In order to enable `strict` mode, you need to specify `{ strict: true `} in the options
  - For using the `casting` mode, just don't specify the options or specify `{ strict: false }`
  - The uint16 number is a number from `0` to `65535`
- Types:
  - `number` - JavaScript embedded type
  - `TNumber` - the parent abstraction type of the `TInt` type
  - `TInt` - the parent abstraction type
  - `TUint16` or `uint16` - the own type

## Examples

```javascript
import { TUint16 } from 'typedjs';

// casting mode
TUint16(42); // 42
TUint16(42.42); // TypeError: TypedJS: 42.42 is not an int
TUint16('42'); // 42
TUint16('42.42'); // TypeError: TypedJS: 42.42 is not an int
TUint16('42.42.42'); // TypeError: value is not a number
TUint16(65536); // TypeError: TypedJS: 65536 is not an uint16
TUint16(-1); // TypeError: TypedJS: -1 is not an uint16
TUint16(NaN); // TypeError: TypedJS: NaN is not a number
TUint16(Infinity); // TypeError: TypedJS: Infinity is not a number
TUint16(-Infinity); // TypeError: TypedJS: -Infinity is not a number

// strict mode
TUint16(42, { strict: true }); // 42
TUint16(42.42, { strict: true }); // TypeError: TypedJS: 42.42 is not an int
TUint16('42', { strict: true }); // TypeError: TypedJS: '42' is not a number
TUint16('42.42', { strict: true }); // TypeError: TypedJS: '42.42' is not a number
TUint16('42.42.42', { strict: true }); // TypeError: The value is not a number
TUint16(65536, { strict: true }); // TypeError: TypedJS: 65536 is not an uint16
TUint16(-1, { strict: true }); // TypeError: TypedJS: -1 is not an uint16
TUint16(NaN, { strict: true }); // TypeError: TypedJS: NaN is not a number
TUint16(Infinity, { strict: true }); // TypeError: TypedJS: Infinity is not a number
TUint16(-Infinity, { strict: true }); // TypeError: TypedJS: -Infinity is not a number
```
