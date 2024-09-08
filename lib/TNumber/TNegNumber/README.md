# TNumber
[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) --> [TNumber](../../TNumber/README.md) --> `TNegNumber`

## Description

The `TNegNumber` abstraction represents a type-safe number in the JavaScript runtime for negative numbers. It is a part of the `Primitives/Scalar Data types` layer of the `TNumber` type.
That is, the job of this abstraction is to check the input value for the correspondence of the negative `number` type at runtime.

The `TNegNumber` abstraction has two modes:
- `strict` - throws a `TypeError` if the input value is not a number or not a negative number
- `casting` - tries to cast the input value to a number and then checks if it is a negative number

## API

The `TNegNumber` type has the following API:

- `TNegNumber(value: any, options?: Options): number` - checks the input value for the correspondence of the negative `number` type. If the input value is not a number or not a negative number, then the function throws a `TypeError` in `strict` mode or tries to cast the input value to a number in `casting` mode. The function returns the input value if it is a negative number.
  - The function used `TNumber` under the hood -> [TNumber](../../TNumber/README.md)
  - In order to enable `strict` mode, you need to specify `{ strict: true `} in the options
  - For using the `casting` mode, just don't specify the options or specify `{ strict: false }`
- Types:
  - `number` - JavaScript embedded type
  - `TNumber` - the parent abstraction type
  - `TNegNumber` or `negnumber` - the own type

## Examples

    ```javascript
    import { TNegNumber } from 'typedjs';

    // casting mode
    TNegNumber(-42); // -42
    TNegNumber(-42.42); // -42.42
    TNegNumber('-42'); // -42
    TNegNumber('-42.42'); // -42.42
    TNegNumber('-42.42.42'); // TypeError: The value is not a number
    TNegNumber(42); // TypeError: TypedJS: 42 is not a negnumber
    TNegNumber(NaN); // TypeError: TypedJS: NaN is not a number
    TNegNumber(Infinity); // TypeError: TypedJS: Infinity is not a number
    TNegNumber(-Infinity); // TypeError: TypedJS: -Infinity is not a number

    // strict mode
    TNegNumber(-42, { strict: true }); // -42
    TNegNumber(-42.42, { strict: true }); // -42.42
    TNegNumber('-42', { strict: true }); // TypeError: TypedJS: '-42' is not a number
    TNegNumber('-42.42', { strict: true }); // TypeError: TypedJS: '-42.42' is not a number
    TNegNumber('-42.42.42', { strict: true }); // TypeError: The value is not a number
    TNegNumber(42, { strict: true }); // TypeError: TypedJS: 42 is not a negnumber
    TNegNumber(NaN, { strict: true }); // TypeError: TypedJS: NaN is not a number
    TNegNumber(Infinity, { strict: true }); // TypeError: TypedJS: Infinity is not a number
    ```
