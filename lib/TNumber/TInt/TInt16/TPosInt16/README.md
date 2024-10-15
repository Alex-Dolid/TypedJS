# TPosInt16

[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) --> [TNumber](../../../README.md) --> [TInt](../../README.md) --> [TInt16](../README.md) --> `TPosInt16`

## Description

The `TPosInt16` abstraction represents a type-safe number(int16) in the JavaScript runtime for positive numbers. It is a part of the `Primitives/Scalar Data types` layer of the `TNumber` type.
That is, the job of this abstraction is to check the input value for the correspondence of the positive int16 `number` type at runtime.

The `TPosInt16` abstraction has two modes:
- `strict` - throws a `TypeError` if the input value is not a number or not a positive int16 number
- `casting` - tries to cast the input value to a number and then to a positive int16 number

## API

The `TPosInt16` type has the following API:

- `TPosInt16(value: any, options?: Options): number` - checks the input value for the correspondence of the positive int16 `number` type. If the input value is not a number or not a positive int16 number, then the function throws a `TypeError` in `strict` mode or tries to cast the input value to a number in `casting` mode. The function returns the input value if it is a positive int16 number.
  - The function used `TInt16` under the hood -> [TInt16](../README.md)
  - In order to enable `strict` mode, you need to specify `{ strict: true `} in the options
  - For using the `casting` mode, just don't specify the options or specify `{ strict: false }`
  - The positive int16 number is a number from `0` to `32767`
- Types:
  - `number` - JavaScript embedded type
  - `TNumber` - the parent abstraction type of the `TInt` type
  - `TInt` - the parent abstraction type of the `TInt16` type
  - `TInt16` - the parent abstraction type
  - `TPosInt16` or `posint16` - the own type

## Examples

    ```javascript
    import { TPosInt16 } from 'typedjs';

    // casting mode
    TPosInt16(42); // 42
    TPosInt16(42.42); // TypeError: TypedJS: 42.42 is not an int
    TPosInt16('42'); // 42
    TPosInt16('42.42'); // TypeError: TypedJS: 42.42 is not an int
    TPosInt16('42.42.42'); // TypeError: value is not a number
    TPosInt16(32767); // 32767
    TPosInt16(32768); // TypeError: TypedJS: 32768 is not a int16
    TPosInt16(-32769); // TypeError: TypedJS: -32769 is not a posint16
    TPosInt16(NaN); // TypeError: TypedJS: NaN is not a number
    TPosInt16(Infinity); // TypeError: TypedJS: Infinity is not a number
    TPosInt16(-Infinity); // TypeError: TypedJS: -Infinity is not a number

    // strict mode
    TPosInt16(42, { strict: true }); // 42
    TPosInt16(42.42, { strict: true }); // TypeError: TypedJS: 42.42 is not an int
    TPosInt16('42', { strict: true }); // TypeError: TypedJS: '42' is not a number
    TPosInt16('42.42', { strict: true }); // TypeError: TypedJS: '42.42' is not a number
    TPosInt16('42.42.42', { strict: true }); // TypeError: The value is not a number
    TPosInt16(32767, { strict: true }); // 32767
    TPosInt16(32768, { strict: true }); // TypeError: TypedJS: 32768 is not a int16
    TPosInt16(-32769, { strict: true }); // TypeError: TypedJS: -32769 is not a posint16
    TPosInt16(NaN, { strict: true }); // TypeError: TypedJS: NaN is not a number
    TPosInt16(Infinity, { strict: true }); // TypeError: TypedJS: Infinity is not a number
    TPosInt16(-Infinity, { strict: true }); // TypeError: TypedJS: -Infinity is not a number
    ```
