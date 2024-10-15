# TNegInt8

[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) --> [TNumber](../../../README.md) --> [TInt](../../README.md) --> [TInt8](../README.md) --> `TNegInt8`

## Description

The `TNegInt8` abstraction represents a type-safe number(int8) in the JavaScript runtime for negative numbers. It is a part of the `Primitives/Scalar Data types` layer of the `TNumber` type.
That is, the job of this abstraction is to check the input value for the correspondence of the negative int8 `number` type at runtime.

The `TNegInt8` abstraction has two modes:
- `strict` - throws a `TypeError` if the input value is not a number or not a negative int8 number
- `casting` - tries to cast the input value to a number and then to a negative int8 number

## API

The `TNegInt8` type has the following API:

- `TNegInt8(value: any, options?: Options): number` - checks the input value for the correspondence of the negative int8 `number` type. If the input value is not a number or not a negative int8 number, then the function throws a `TypeError` in `strict` mode or tries to cast the input value to a number in `casting` mode. The function returns the input value if it is a negative int8 number.
  - The function used `TInt8` under the hood -> [TInt8](../README.md)
  - In order to enable `strict` mode, you need to specify `{ strict: true `} in the options
  - For using the `casting` mode, just don't specify the options or specify `{ strict: false }`
  - The negative int8 number is a number from `-1` to `-128`
- Types:
  - `number` - JavaScript embedded type
  - `TNumber` - the parent abstraction type of the `TInt` type
  - `TInt` - the parent abstraction type of the `TInt8` type
  - `TInt8` - the parent abstraction type
  - `TNegInt8` or `negint8` - the own type

## Examples

    ```javascript
    import { TNegInt8 } from 'typedjs';

    // casting mode
    TNegInt8(-42); // -42
    TNegInt8(-42.42); // TypeError: TypedJS: -42.42 is not an int
    TNegInt8('-42'); // -42
    TNegInt8('-42.42'); // TypeError: TypedJS: -42.42 is not an int
    TNegInt8('-42.42.42'); // TypeError: value is not a number
    TNegInt8(-128); // -128
    TNegInt8(128); // TypeError: TypedJS: 128 is not an int8
    TNegInt8(0); // TypeError: TypedJS: 0 is not a negint8
    TNegInt8(NaN); // TypeError: TypedJS: NaN is not a number
    TNegInt8(Infinity); // TypeError: TypedJS: Infinity is not a number
    TNegInt8(-Infinity); // TypeError: TypedJS: -Infinity is not a number

    // strict mode
    TNegInt8(-42, { strict: true }); // -42
    TNegInt8(-42.42, { strict: true }); // TypeError: TypedJS: -42.42 is not an int
    TNegInt8('-42', { strict: true }); // TypeError: TypedJS: '-42' is not a number
    TNegInt8('-42.42', { strict: true }); // TypeError: TypedJS: '-42.42' is not a number
    TNegInt8('-42.42.42', { strict: true }); // TypeError: The value is not a number
    TNegInt8(-128, { strict: true }); // -128
    TNegInt8(128, { strict: true }); // TypeError: TypedJS: 128 is not an int8
    TNegInt8(0, { strict: true }); // TypeError: TypedJS: 0 is not a negint8
    TNegInt8(NaN, { strict: true }); // TypeError: TypedJS: NaN is not a number
    TNegInt8(Infinity, { strict: true }); // TypeError: TypedJS: Infinity is not a number
    TNegInt8(-Infinity, { strict: true }); // TypeError: TypedJS: -Infinity is not a number
    ```
