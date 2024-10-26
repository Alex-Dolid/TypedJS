# TFloat32

[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) --> [TNumber](../../README.md) --> [TFloat](../README.md) --> `TFloat32`

## Description

The `TFloat32` abstraction represents a type-safe 32-bit float number in the JavaScript runtime. It is a part of the `Primitives/Scalar Data types` layer of the `TNumber` type.
That is, the job of this abstraction is to check the input value for the correspondence of the 32-bit float `number` type at runtime.

The `TFloat32` abstraction has two modes:
- `strict` - throws a `TypeError` if the input value is not a number, not a float number, or not a 32-bit float number
- `casting` - tries to cast the input value to a number and then to a float number. If the input value is not a 32-bit float number, then the function throws a `TypeError`

## API

The `TFloat32` type has the following API:

- `TFloat32(value: any, options?: Options): number` - checks the input value for the correspondence of the 32-bit float `number` type. If the input value is not a number, then the function throws a `TypeError` in `strict` mode or tries to cast the input value to a number in `casting` mode. If the input value is not a 32-bit float number, then the function throws a `TypeError`. The function returns the input value if it is a 32-bit float number.
  - The function used `TFloat` under the hood -> [TFloat](../README.md)
  - In order to enable `strict` mode, you need to specify `{ strict: true `} in the options
  - For using the `casting` mode, just don't specify the options or specify `{ strict: false }`
  - The 32-bit float number is a number with a floating point and in the range of `[-3.4028234663852886e+38, 3.4028234663852886e+38]`
- Types:
  - `number` - JavaScript embedded type
  - `TNumber` - the parent abstraction type of `TFloat`
  - `TFloat` - the parent abstraction type
  - `TFloat32` or `float32` - the own type

## Examples

```javascript
import { TFloat32 } from 'typedjs';

// casting mode
TFloat32(42); // TypeError: TypedJS: 42 is not a float
TFloat32(42.42); // 42.42
TFloat32('42'); // TypeError: TypedJS: 42 is not a float
TFloat32('42.42'); // 42.42
TFloat32('42.42.42'); // TypeError: value is not a number
TFloat32(NaN); // TypeError: TypedJS: NaN is not a number
TFloat32(Infinity); // TypeError: TypedJS: Infinity is not a number
TFloat32(-Infinity); // TypeError: TypedJS: -Infinity is not a number
TFlot32(-3.4028234663852886e+38); // TypeError: TypedJS: -3.4028234663852886e+38 is not a float32
TFloat32(3.4028234663852886e+38); // TypeError: TypedJS: 3.4028234663852886e+38 is not a float32

// strict mode
TFloat32(42, { strict: true }); // TypeError: TypedJS: 42 is not a float
TFloat32(42.42, { strict: true }); // 42.42
TFloat32('42', { strict: true }); // TypeError: TypedJS: '42' is not a float
TFloat32('42.42', { strict: true }); // TypeError: TypedJS: '42.42' is not a float
TFloat32('42.42.42', { strict: true }); // TypeError: value is not a number
TFloat32(NaN, { strict: true }); // TypeError: TypedJS: NaN is not a number
TFloat32(Infinity, { strict: true }); // TypeError: TypedJS: Infinity is not a number
TFloat32(-Infinity, { strict: true }); // TypeError: TypedJS: -Infinity is not a number
TFlot32(-3.4028234663852886e+38, { strict: true }); // TypeError: TypedJS: -3.4028234663852886e+38 is not a float32
TFloat32(3.4028234663852886e+38, { strict: true }); // TypeError: TypedJS: 3.4028234663852886e+38 is not a float32
```
