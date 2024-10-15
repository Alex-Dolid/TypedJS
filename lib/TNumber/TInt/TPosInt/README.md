# TPosInt

[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) --> [TNumber](../../README.md) --> [TInt](../README.md) --> `TPosInt`

## Description

The `TPosInt` abstraction represents a type-safe number in the JavaScript runtime for positive integers. It is a part of the `Primitives/Scalar Data types` layer of the `TNumber` type.
That is, the job of this abstraction is to check the input value for the correspondence of the positive integer `number` type at runtime.

The `TPosInt` abstraction has two modes:
- `strict` - throws a `TypeError` if the input value is not a number or not a positive integer
- `casting` - tries to cast the input value to a number and then checks if it is a positive integer

## API

The `TPosInt` type has the following API:

- `TPosInt(value: any, options?: Options): number` - checks the input value for the correspondence of the positive integer `number` type. If the input value is not a number or not a positive integer, then the function throws a `TypeError` in `strict` mode or tries to cast the input value to a number in `casting` mode. The function returns the input value if it is a positive integer.
  - The function used `TInt` under the hood -> [TInt](../README.md)
  - In order to enable `strict` mode, you need to specify `{ strict: true `} in the options
  - For using the `casting` mode, just don't specify the options or specify `{ strict: false }`
- Types:
  - `number` - JavaScript embedded type
  - `TNumber` - the parent abstraction type before `TInt`
  - `TInt` - the parent abstraction type
  - `TPosInt` or `posint` - the own type

## Examples

    ```javascript
    import { TPosInt } from 'typedjs';

    // casting mode
    TPosInt(42); // 42
    TPosInt(42.42); // TypeError: TypedJS: 42.42 is not a an int
    TPosInt('42'); // 42
    TPosInt('42.42'); // TypeError: TypedJS: 42.42 is not an int
    TPosInt('42.42.42'); // TypeError: value is not a number
    TPosInt(NaN); // TypeError: TypedJS: NaN is not a number
    TPosInt(Infinity); // TypeError: TypedJS: Infinity is not a number
    TPosInt(-Infinity); // TypeError: TypedJS: -Infinity is not a number

    // strict mode
    TPosInt(42, { strict: true }); // 42
    TPosInt(42.42, { strict: true }); // TypeError: TypedJS: 42.42 is not an int
    TPosInt('42', { strict: true }); // TypeError: TypedJS: '42' is not a number
    TPosInt('42.42', { strict: true }); // TypeError: TypedJS: 42.42 is not an int
    TPosInt('42.42.42', { strict: true }); // TypeError: value is not a number
    TPosInt(NaN, { strict: true }); // TypeError: TypedJS: NaN is not a number
    TPosInt(Infinity, { strict: true }); // TypeError: TypedJS: Infinity is not a number
    TPosInt(-Infinity, { strict: true }); // TypeError: TypedJS: -Infinity is not a number
    ```
