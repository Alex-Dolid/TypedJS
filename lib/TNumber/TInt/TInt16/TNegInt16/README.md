# TNegInt16

[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) --> [TNumber](../../../README.md) --> [TInt](../../README.md) --> [TInt16](../README.md) --> `TNegInt16`

## Description

The `TNegInt16` abstraction represents a type-safe number(negative int16) in the JavaScript runtime. It is a part of the `Primitives/Scalar Data types` layer of the `TNumber` type.
That is, the job of this abstraction is to check the input value for the correspondence of the negative int16 `number` type at runtime.

The `TNegInt16` abstraction has two modes:
- `strict` - throws a `TypeError` if the input value is not a number or not a negative int16 number
- `casting` - tries to cast the input value to a number and then to a negative int16 number

## API

The `TNegInt16` type has the following API:

- `TNegInt16(value: any, options?: Options): number` - checks the input value for the correspondence of the negative int16 `number` type. If the input value is not a number, then the function throws a `TypeError` in `strict` mode or tries to cast the input value to a number in `casting` mode. The function returns the input value if it is a negative int16 number.
  - The function used `TInt` under the hood -> [TInt](../../README.md)
  - In order to enable `strict` mode, you need to specify `{ strict: true `} in the options
  - For using the `casting` mode, just don't specify the options or specify `{ strict: false }`
  - The negative int16 number is a number from `-32768` to `-1`
- Types:
  - `number` - JavaScript embedded type
  - `TNumber` - the parent abstraction type of the `TInt` type
  - `TInt` - the parent abstraction type of the `TInt16` type
  - `TInt16` - the parent abstraction type
  - `TNegInt16` or `negint16` - the own type

## Examples

```javascript
import { TNegInt16 } from 'typedjs';

// casting mode
TNegInt16(-42); // -42
TNegInt16(-42.42); // TypeError: TypedJS: -42.42 is not an int
TNegInt16('-42'); // -42
TNegInt16('-42.42'); // TypeError: TypedJS: -42.42 is not an int
TNegInt16('-42.42.42'); // TypeError: value is not a number
TNegInt16(-32769); // TypeError: TypedJS: -32769 is not an int16
TNegInt16(1); // TypeError: TypedJS: 1 is not a negint16
TNegInt16(0); // TypeError: TypedJS: 0 is not a negint16
TNegInt16(NaN); // TypeError: TypedJS: NaN is not a number
TNegInt16(Infinity); // TypeError: TypedJS: Infinity is not a number
TNegInt16(-Infinity); // TypeError: TypedJS: -Infinity is not a number

// strict mode
TNegInt16(-42, { strict: true }); // -42
TNegInt16(-42.42, { strict: true }); // TypeError: TypedJS: -42.42 is not an int
TNegInt16('-42', { strict: true }); // TypeError: TypedJS: '-42' is not a number
TNegInt16('-42.42', { strict: true }); // TypeError: TypedJS: -42.42 is not an int
TNegInt16('-42.42.42', { strict: true }); // TypeError: The value is not a number
TNegInt16(-32769, { strict: true }); // TypeError: TypedJS: -32769 is not an int16
TNegInt16(1, { strict: true }); // TypeError: TypedJS: 1 is not a negint16
TNegInt16(0, { strict: true }); // TypeError: TypedJS: 0 is not a negint16
TNegInt16(NaN, { strict: true }); // TypeError: TypedJS: NaN is not a number
TNegInt16(Infinity, { strict: true }); // TypeError: TypedJS: Infinity is not a number
```
