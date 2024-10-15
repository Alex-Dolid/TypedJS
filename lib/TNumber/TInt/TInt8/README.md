# TInt8

[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) --> [TNumber](../../README.md) --> [TInt](../README.md) --> `TInt8`

Modules:

- [TPosInt8](./TPosInt8/README.md)
- [TNegInt8](./TNegInt8/README.md)

## Description

The `TInt8` abstraction represents a type-safe number(int8) in the JavaScript runtime. It is a part of the `Primitives/Scalar Data types` layer of the `TNumber` type.
That is, the job of this abstraction is to check the input value for the correspondence of the int8 `number` type at runtime.

The `TInt8` abstraction has two modes:
- `strict` - throws a `TypeError` if the input value is not a number or not an int8 number
- `casting` - tries to cast the input value to a number and then to an int8 number

## API

The `TInt8` type has the following API:

- `TInt8(value: any, options?: Options): number` - checks the input value for the correspondence of the int8 `number` type. If the input value is not a number, then the function throws a `TypeError` in `strict` mode or tries to cast the input value to a number in `casting` mode. The function returns the input value if it is an int8 number.
  - The function used `TInt` under the hood -> [TInt](../README.md)
  - In order to enable `strict` mode, you need to specify `{ strict: true `} in the options
  - For using the `casting` mode, just don't specify the options or specify `{ strict: false }`
  - The int8 number is a number from `-128` to `127`
- Types:
  - `number` - JavaScript embedded type
  - `TNumber` - the parent abstraction type of the `TInt` type
  - `TInt` - the parent abstraction type
  - `TInt8` or `int8` - the own type

## Examples

    ```javascript
    import { TInt8 } from 'typedjs';

    // casting mode
    TInt8(42); // 42
    TInt8(42.42); // TypeError: TypedJS: 42.42 is not an int
    TInt8('42'); // 42
    TInt8('42.42'); // TypeError: TypedJS: 42.42 is not an int
    TInt8('42.42.42'); // TypeError: value is not a number
    TInt8(128); // TypeError: TypedJS: 128 is not an int8
    TInt8(-129); // TypeError: TypedJS: -129 is not an int8
    TInt8(NaN); // TypeError: TypedJS: NaN is not a number
    TInt8(Infinity); // TypeError: TypedJS: Infinity is not a number
    TInt8(-Infinity); // TypeError: TypedJS: -Infinity is not a number

    // strict mode
    TInt8(42, { strict: true }); // 42
    TInt8(42.42, { strict: true }); // TypeError: TypedJS: 42.42 is not an int
    TInt8('42', { strict: true }); // TypeError: TypedJS: '42' is not a number
    TInt8('42.42', { strict: true }); // TypeError: TypedJS: '42.42' is not a number
    TInt8('42.42.42', { strict: true }); // TypeError: The value is not a number
    TInt8(128, { strict: true }); // TypeError: TypedJS: 128 is not an int8
    TInt8(-129, { strict: true }); // TypeError: TypedJS: -129 is not an int8
    TInt8(NaN, { strict: true }); // TypeError: TypedJS: NaN is not a number
    TInt8(Infinity, { strict: true }); // TypeError: TypedJS: Infinity is not a number
    TInt8(-Infinity, { strict: true }); // TypeError: TypedJS: -Infinity is not a number
    ```
