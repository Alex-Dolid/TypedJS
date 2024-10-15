# TPosInt32

[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) --> [TNumber](../../../README.md) --> [TInt](../../README.md) --> [TInt32](../README.md) --> `TPosInt32`

## Description

The `TPosInt32` abstraction represents a type-safe number(int32) in the JavaScript runtime for positive numbers. It is a part of the `Primitives/Scalar Data types` layer of the `TNumber` type.
That is, the job of this abstraction is to check the input value for the correspondence of the positive int32 `number` type at runtime.

The `TPosInt32` abstraction has two modes:
- `strict` - throws a `TypeError` if the input value is not a number or not a positive int32 number
- `casting` - tries to cast the input value to a number and then to a positive int32 number

## API

The `TPosInt32` type has the following API:

- `TPosInt32(value: any, options?: Options): number` - checks the input value for the correspondence of the positive int32 `number` type. If the input value is not a number or not a positive int32 number, then the function throws a `TypeError` in `strict` mode or tries to cast the input value to a number in `casting` mode. The function returns the input value if it is a positive int32 number.
  - The function used `TInt32` under the hood -> [TInt32](../README.md)
  - In order to enable `strict` mode, you need to specify `{ strict: true `} in the options
  - For using the `casting` mode, just don't specify the options or specify `{ strict: false }`
  - The int32 number is a number from `1` to `2147483647`
- Types:
  - `number` - JavaScript embedded type
  - `TNumber` - the parent abstraction type of the `TInt` type
  - `TInt` - the parent abstraction type of the `TInt32` type
  - `TInt32` - the parent abstraction type
  - `TPosInt32` or `posint32` - the own type

## Examples

```javascript
import { TPosInt32 } from 'typedjs';

// casting mode
TPosInt32(42); // 42
TPosInt32(42.42); // TypeError: TypedJS: 42.42 is not an int
TPosInt32('42'); // 42
TPosInt32('42.42'); // TypeError: TypedJS: 42.42 is not an int
TPosInt32('42.42.42'); // TypeError: value is not a number
TPosInt32(2147483647); // 2147483647
TPosInt32(2147483648); // TypeError: TypedJS: 2147483648 is not a posint32
TPosInt32(NaN); // TypeError: TypedJS: NaN is not a number
TPosInt32(Infinity); // TypeError: TypedJS: Infinity is not a number
TPosInt32(-Infinity); // TypeError: TypedJS: -Infinity is not a number

// strict mode
TPosInt32(42, { strict: true }); // 42
TPosInt32(42.42, { strict: true }); // TypeError: TypedJS: 42.42 is not an int
TPosInt32('42', { strict: true }); // TypeError: TypedJS: '42' is not a number
TPosInt32('42.42', { strict: true }); // TypeError: TypedJS: '42.42' is not a number
TPosInt32('42.42.42', { strict: true }); // TypeError: The value is not a number
TPosInt32(2147483647, { strict: true }); // 2147483647
TPosInt32(2147483648, { strict: true }); // TypeError: TypedJS: 2147483648 is not a posint32
TPosInt32(NaN, { strict: true }); // TypeError: TypedJS: NaN is not a number
TPosInt32(Infinity, { strict: true }); // TypeError: TypedJS: Infinity is not a number
TPosInt32(-Infinity, { strict: true }); // TypeError: TypedJS: -Infinity is not a number
```
