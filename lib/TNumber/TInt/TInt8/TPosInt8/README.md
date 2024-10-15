# TPosInt8

[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) --> [TNumber](../../../README.md) --> [TInt](../../README.md) --> [TInt8](../README.md) --> `TPosInt8`

## Description

The `TPosInt8` abstraction represents a type-safe number(int8) in the JavaScript runtime for positive numbers. It is a part of the `Primitives/Scalar Data types` layer of the `TNumber` type.
That is, the job of this abstraction is to check the input value for the correspondence of the positive int8 `number` type at runtime.

The `TPosInt8` abstraction has two modes:
- `strict` - throws a `TypeError` if the input value is not a number or not a positive int8 number
- `casting` - tries to cast the input value to a number and then to a positive int8 number

## API

The `TPosInt8` type has the following API:

- `TPosInt8(value: any, options?: Options): number` - checks the input value for the correspondence of the positive int8 `number` type. If the input value is not a number or not a positive int8 number, then the function throws a `TypeError` in `strict` mode or tries to cast the input value to a number in `casting` mode. The function returns the input value if it is a positive int8 number.
  - The function used `TInt8` under the hood -> [TInt8](../README.md)
  - In order to enable `strict` mode, you need to specify `{ strict: true `} in the options
  - For using the `casting` mode, just don't specify the options or specify `{ strict: false }`
  - The positive int8 number is a number from `1` to `127`
- Types:
  - `number` - JavaScript embedded type
  - `TNumber` - the parent abstraction type of the `TInt` type
  - `TInt` - the parent abstraction type of the `TInt8` type
  - `TInt8` - the parent abstraction type
  - `TPosInt8` or `posint8` - the own type

## Examples

    ```javascript
    import { TPosInt8 } from 'typedjs';

    // casting mode
    TPosInt8(42); // 42
    TPosInt8(42.42); // TypeError: TypedJS: 42.42 is not an int
    TPosInt8('42'); // 42
    TPosInt8('42.42'); // TypeError: TypedJS: 42.42 is not an int
    TPosInt8('42.42.42'); // TypeError: value is not a number
    TPosInt8(128); // TypeError: TypedJS: 128 is not a int8
    TPosInt8(-129); // TypeError: TypedJS: -129 is not a int8
    TPosInt8(-1); // TypeError: TypedJS: 128 is not a posint8
    TPosInt8(NaN); // TypeError: TypedJS: NaN is not a number
    TPosInt8(Infinity); // TypeError: TypedJS: Infinity is not a number
    TPosInt8(-Infinity); // TypeError: TypedJS: -Infinity is not a number

    // strict mode
    TPosInt8(42, { strict: true }); // 42
    TPosInt8(42.42, { strict: true }); // TypeError: TypedJS: 42.42 is not an int
    TPosInt8('42', { strict: true }); // TypeError: TypedJS: '42' is not a number
    TPosInt8('42.42', { strict: true }); // TypeError: TypedJS: '42.42' is not a number
    TPosInt8('42.42.42', { strict: true }); // TypeError: The value is not a number
    TPosInt8(128, { strict: true }); // TypeError: TypedJS: 128 is not a int8
    TPosInt8(-129, { strict: true }); // TypeError: TypedJS: -129 is not a int8
    TPosInt8(-1, { strict: true }); // TypeError: TypedJS: -1 is not a posint8
    TPosInt8(NaN, { strict: true }); // TypeError: TypedJS: NaN is not a number
    TPosInt8(Infinity, { strict: true }); // TypeError: TypedJS: Infinity is not a number
    TPosInt8(-Infinity, { strict: true }); // TypeError: TypedJS: -Infinity is not a number
    ```
