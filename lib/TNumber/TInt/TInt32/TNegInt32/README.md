# TNegInt32

[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) --> [TNumber](../../../README.md) --> [TInt](../../README.md) --> [TInt32](../README.md) --> `TNegInt32`

## Description

The `TNegInt32` abstraction represents a type-safe number(int32) in the JavaScript runtime for negative numbers. It is a part of the `Primitives/Scalar Data types` layer of the `TNumber` type.
That is, the job of this abstraction is to check the input value for the correspondence of the negative int32 `number` type at runtime.

The `TNegInt32` abstraction has two modes:
- `strict` - throws a `TypeError` if the input value is not a number or not a negative int32 number
- `casting` - tries to cast the input value to a number and then checks if it is a negative int32 number

## API

The `TNegInt32` type has the following API:

- `TNegInt32(value: any, options?: Options): number` - checks the input value for the correspondence of the negative int32 `number` type. If the input value is not a number, then the function throws a `TypeError` in `strict` mode or tries to cast the input value to a number in `casting` mode. The function returns the input value if it is a negative int32 number.
  - The function used `TInt32` under the hood -> [TInt32](../README.md)
  - In order to enable `strict` mode, you need to specify `{ strict: true `} in the options
  - For using the `casting` mode, just don't specify the options or specify `{ strict: false }`
  - The negative int32 number is a number from `-2147483648` to `-1`
- Types:
  - `number` - JavaScript embedded type
  - `TNumber` - the parent abstraction type of the `TInt` type
  - `TInt` - the parent abstraction type of the `TInt32` type
  - `TInt32` - the parent abstraction type
  - `TNegInt32` or `negint32` - the own type

## Examples

```javascript
import { TNegInt32 } from 'typedjs';

// casting mode
TNegInt32(-42); // -42
TNegInt32(-42.42); // TypeError: TypedJS: -42.42 is not an int
TNegInt32('-42'); // -42
TNegInt32('-42.42'); // TypeError: TypedJS: -42.42 is not an int
TNegInt32('-42.42.42'); // TypeError: value is not a number
TNegInt32(-2147483649); // TypeError: TypedJS: -2147483649 is not a negint32
TNegInt32(2147483648); // TypeError: TypedJS: 2147483648 is not a negint32
TNegInt32(NaN); // TypeError: TypedJS: NaN is not a number
TNegInt32(Infinity); // TypeError: TypedJS: Infinity is not a number
TNegInt32(-Infinity); // TypeError: TypedJS: -Infinity is not a number

// strict mode
TNegInt32(-42, { strict: true }); // -42
TNegInt32(-42.42, { strict: true }); // TypeError: TypedJS: -42.42 is not an int
TNegInt32('-42', { strict: true }); // -42
TNegInt32('-42.42', { strict: true }); // TypeError: TypedJS: -42.42 is not an int
TNegInt32('-42.42.42', { strict: true }); // TypeError: The value is not a number
TNegInt32(-2147483649, { strict: true }); // TypeError: TypedJS: -2147483649 is not a negint32
TNegInt32(2147483648, { strict: true }); // TypeError: TypedJS: 2147483648 is not a negint32
TNegInt32(NaN, { strict: true }); // TypeError: TypedJS: NaN is not a number
TNegInt32(Infinity, { strict: true }); // TypeError: TypedJS: Infinity is not a number
TNegInt32(-Infinity, { strict: true }); // TypeError: TypedJS: -Infinity is not a number
```
