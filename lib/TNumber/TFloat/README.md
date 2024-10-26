# TFloat

[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) --> [TNumber](../README.md) --> `TFloat`

Modules:

- [TPosFloat](./TPosFloat/README.md)
- [TNegFloat](./TNegFloat/README.md)
- [TFloat32](./TFloat32/README.md)
- [TFloat64](./TFloat64/README.md)

## Description

The `TFloat` abstraction represents a type-safe number(float) in the JavaScript runtime. It is a part of the `Primitives/Scalar Data types` layer of the `TNumber` type.
That is, the job of this abstraction is to check the input value for the correspondence of the float `number` type at runtime.

The `TFloat` abstraction has two modes:
- `strict` - throws a `TypeError` if the input value is not a number or not a float number
- `casting` - tries to cast the input value to a number and then to a float number

## API

The `TFloat` type has the following API:

- `TFloat(value: any, options?: Options): number` - checks the input value for the correspondence of the float `number` type. If the input value is not a number, then the function throws a `TypeError` in `strict` mode or tries to cast the input value to a number in `casting` mode. The function returns the input value if it is a float number.
  - The function used `TNumber` under the hood -> [TNumber](../README.md)
  - In order to enable `strict` mode, you need to specify `{ strict: true `} in the options
  - For using the `casting` mode, just don't specify the options or specify `{ strict: false }`
  - The float number is a number with a floating point
- Types:
  - `number` - JavaScript embedded type
  - `TNumber` - the parent abstraction type
  - `TFloat` or `float` - the own type

## Examples

```javascript
import { TFloat } from 'typedjs';

// casting mode
TFloat(42); // TypeError: TypedJS: 42 is not a float
TFloat(42.42); // 42.42
TFloat('42'); // TypeError: TypedJS: 42 is not a float
TFloat('42.42'); // 42.42
TFloat('42.42.42'); // TypeError: value is not a number
TFloat(NaN); // TypeError: TypedJS: NaN is not a number
TFloat(Infinity); // TypeError: TypedJS: Infinity is not a number
TFloat(-Infinity); // TypeError: TypedJS: -Infinity is not a number

// strict mode
TFloat(42, { strict: true }); // TypeError: TypedJS: 42 is not a float
TFloat(42.42, { strict: true }); // 42.42
TFloat('42', { strict: true }); // TypeError: TypedJS: '42' is not a float
TFloat('42.42', { strict: true }); // TypeError: TypedJS: '42.42' is not a float
TFloat('42.42.42', { strict: true }); // TypeError: value is not a number
TFloat(NaN, { strict: true }); // TypeError: TypedJS: NaN is not a number
TFloat(Infinity, { strict: true }); // TypeError: TypedJS: Infinity is not a number
TFloat(-Infinity, { strict: true }); // TypeError: TypedJS: -Infinity is not a number
```
