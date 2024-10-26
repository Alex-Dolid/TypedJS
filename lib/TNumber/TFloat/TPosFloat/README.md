# TPosFloat

[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) --> [TNumber](../../README.md) --> [TFloat](../README.md) --> `TPosFloat`

## Description

The `TPosFloat` abstraction represents a type-safe positive float number in the JavaScript runtime. It is a part of the `Primitives/Scalar Data types` layer of the `TNumber` type.
That is, the job of this abstraction is to check the input value for the correspondence of the positive float `number` type at runtime.

The `TPosFloat` abstraction has two modes:
- `strict` - throws a `TypeError` if the input value is not a number, not a float number, or not a positive float number
- `casting` - tries to cast the input value to a number and then to a float number. If the input value is not a positive float number, then the function throws a `TypeError`

## API

The `TPosFloat` type has the following API:

- `TPosFloat(value: any, options?: Options): number` - checks the input value for the correspondence of the positive float `number` type. If the input value is not a number, then the function throws a `TypeError` in `strict` mode or tries to cast the input value to a number in `casting` mode. If the input value is not a positive float number, then the function throws a `TypeError`. The function returns the input value if it is a positive float number.
  - The function used `TFloat` under the hood -> [TFloat](../README.md)
  - In order to enable `strict` mode, you need to specify `{ strict: true `} in the options
  - For using the `casting` mode, just don't specify the options or specify `{ strict: false }`
  - The positive float number is a number with a floating point and greater than 0
- Types:
  - `number` - JavaScript embedded type
  - `TNumber` - the parent abstraction type of `TFloat`
  - `TFloat` - the parent abstraction type
  - `TPosFloat` or `posfloat` - the own type

## Examples

```javascript
import { TPosFloat } from 'typedjs';

// casting mode
TPosFloat(42); // TypeError: TypedJS: 42 is not a float
TPosFloat(42.42); // 42.42
TPosFloat('42'); // TypeError: TypedJS: 42 is not a float
TPosFloat('42.42'); // 42.42
TPosFloat('42.42.42'); // TypeError: value is not a number
TPosFloat(NaN); // TypeError: TypedJS: NaN is not a number
TPosFloat(Infinity); // TypeError: TypedJS: Infinity is not a number
TPosFloat(-Infinity); // TypeError: TypedJS: -Infinity is not a number
TPosFloat(-42); // TypeError: TypedJS: -42 is not a posfloat
TPosFloat(-42.42); // TypeError: TypedJS: -42.42 is not a posfloat

// strict mode
TPosFloat(42, { strict: true }); // TypeError: TypedJS: 42 is not a float
TPosFloat(42.42, { strict: true }); // 42.42
TPosFloat('42', { strict: true }); // TypeError: TypedJS: '42' is not a float
TPosFloat('42.42', { strict: true }); // TypeError: TypedJS: '42.42' is not a float
TPosFloat('42.42.42', { strict: true }); // TypeError: value is not a number
TPosFloat(NaN, { strict: true }); // TypeError: TypedJS: NaN is not a number
TPosFloat(Infinity, { strict: true }); // TypeError: TypedJS: Infinity is not a number
TPosFloat(-Infinity, { strict: true }); // TypeError: TypedJS: -Infinity is not a number
TPosFloat(-42, { strict: true }); // TypeError: TypedJS: -42 is not a posfloat
TPosFloat(-42.42, { strict: true }); // TypeError: TypedJS: -42.42 is not a posfloat
```
