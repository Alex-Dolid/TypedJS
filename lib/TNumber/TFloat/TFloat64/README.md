# TFloat64

[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) --> [TNumber](../../README.md) --> [TFloat](../README.md) --> `TFloat64`

## Description

The `TFloat64` abstraction represents a type-safe 64-bit float number in the JavaScript runtime. It is a part of the `Primitives/Scalar Data types` layer of the `TNumber` type.
That is, the job of this abstraction is to check the input value for the correspondence of the 64-bit float `number` type at runtime.

The `TFloat64` abstraction has two modes:
- `strict` - throws a `TypeError` if the input value is not a number, not a float number, or not a 64-bit float number
- `casting` - tries to cast the input value to a number and then to a float number. If the input value is not a 64-bit float number, then the function throws a `TypeError`

## API

The `TFloat64` type has the following API:

- `TFloat64(value: any, options?: Options): number` - checks the input value for the correspondence of the 64-bit float `number` type. If the input value is not a number, then the function throws a `TypeError` in `strict` mode or tries to cast the input value to a number in `casting` mode. If the input value is not a 64-bit float number, then the function throws a `TypeError`. The function returns the input value if it is a 64-bit float number.
  - The function used `TFloat` under the hood -> [TFloat](../README.md)
  - In order to enable `strict` mode, you need to specify `{ strict: true `} in the options
  - For using the `casting` mode, just don't specify the options or specify `{ strict: false }`
  - The 64-bit float number is a number with a floating point and in the range of `[-1.7976931348623157e+308, 1.7976931348623157e+308]`
- Types:
  - `number` - JavaScript embedded type
  - `TNumber` - the parent abstraction type of `TFloat`
  - `TFloat` - the parent abstraction type
  - `TFloat64` or `float64` - the own type

## Examples

```javascript
import { TFloat64 } from 'typedjs';

// casting mode
TFloat64(42); // TypeError: TypedJS: 42 is not a float
TFloat64(42.42); // 42.42
TFloat64('42'); // TypeError: TypedJS: 42 is not a float
TFloat64('42.42'); // 42.42
TFloat64('42.42.42'); // TypeError: value is not a number
TFloat64(NaN); // TypeError: TypedJS: NaN is not a number
TFloat64(Infinity); // TypeError: TypedJS: Infinity is not a number
TFloat64(-Infinity); // TypeError: TypedJS: -Infinity is not a number
TFloat64(-1.7976931348623157e+308); // TypeError: TypedJS: -1.7976931348623157e+308 is not a float64
TFloat64(1.7976931348623157e+308); // TypeError: TypedJS: 1.7976931348623157e+308 is not a float64

// strict mode
TFloat64(42, { strict: true }); // TypeError: TypedJS: 42 is not a float
TFloat64(42.42, { strict: true }); // 42.42
TFloat64('42', { strict: true }); // TypeError: TypedJS: '42' is not a float
TFloat64('42.42', { strict: true }); // TypeError: TypedJS: '42.42' is not a float
TFloat64('42.42.42', { strict: true }); // TypeError: value is not a number
TFloat64(NaN, { strict: true }); // TypeError: TypedJS: NaN is not a number
TFloat64(Infinity, { strict: true }); // TypeError: TypedJS: Infinity is not a number
TFloat64(-Infinity, { strict: true }); // TypeError: TypedJS: -Infinity is not a number
TFloat64(-1.7976931348623157e+308, { strict: true }); // TypeError: TypedJS: -1.7976931348623157e+308 is not a float64
TFloat64(1.7976931348623157e+308, { strict: true }); // TypeError: TypedJS: 1.7976931348623157e+308 is not a float64
```
