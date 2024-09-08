# TNumber
[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) --> [TNumber](../../TNumber/README.md) --> `TPosNumber`

## Description

The `TPosNumber` abstraction represents a type-safe number in the JavaScript runtime for positive numbers. It is a part of the `Primitives/Scalar Data types` layer of the `TNumber` type.
That is, the job of this abstraction is to check the input value for the correspondence of the positive `number` type at runtime.

The `TPosNumber` abstraction has two modes:
- `strict` - throws a `TypeError` if the input value is not a number
- `casting` - tries to cast the input value to a number

## API

The `TPosNumber` type has the following API:

- `TPosNumber(value: any, options?: Options): number` - checks the input value for the correspondence of the positive `number` type. If the input value is not a number or not a positive number, then the function throws a `TypeError` in `strict` mode or tries to cast the input value to a number in `casting` mode. The function returns the input value if it is a positive number.
  - The function used `TNumber` under the hood -> [TNumber](../../TNumber/README.md)
  - In order to enable `strict` mode, you need to specify `{ strict: true `} in the options
  - For using the `casting` mode, just don't specify the options or specify `{ strict: false }`
- Types:
  - `number` - JavaScript embedded type
  - `TNumber` - the parent abstraction type
  - `TPosNumber` or `posnumber` - the own type

## Examples

    ```javascript
    import { TPosNumber } from 'typedjs';

    // casting mode
    TPosNumber(42); // 42
    TPosNumber(42.42); // 42.42
    TPosNumber('42'); // 42
    TPosNumber('42.42'); // 42.42
    TPosNumber('42.42.42'); // TypeError: The value is not a number
    TPosNumber(-42); // TypedJS: -42 is not a posnumber
    TPosNumber(NaN); // TypedJS: NaN is not a number
    TPosNumber(Infinity); // TypedJS: Infinity is not a number
    TPosNumber(-Infinity); // TypedJS: -Infinity is not a number

    // strict mode
    TPosNumber(42, { strict: true }); // 42
    TPosNumber(42.42, { strict: true }); // 42.42
    TPosNumber('42', { strict: true }); // TypedJS: '42' is not a number
    TPosNumber('42.42', { strict: true }); // TypedJS: '42.42' is not a number
    TPosNumber('42.42.42', { strict: true }); // TypeError: The value is not a number
    TPosNumber(-42, { strict: true }); // TypedJS: -42 is not a posnumber
    TPosNumber(NaN, { strict: true }); // TypedJS: NaN is not a number
    TPosNumber(Infinity, { strict: true }); // TypedJS: Infinity is not a number
    TPosNumber(-Infinity, { strict: true }); // TypedJS: -Infinity is not a number
    ```
