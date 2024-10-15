# TNegInt

[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) --> [TNumber](../../README.md) --> [TInt](../README.md) --> `TNegInt`

## Description

The `TNegInt` abstraction represents a type-safe number in the JavaScript runtime for negative integers. It is a part of the `Primitives/Scalar Data types` layer of the `TNumber` type.
That is, the job of this abstraction is to check the input value for the correspondence of the negative integer `number` type at runtime.

The `TNegInt` abstraction has two modes:
- `strict` - throws a `TypeError` if the input value is not a number or not a negative integer
- `casting` - tries to cast the input value to a number and then checks if it is a negative integer

## API

The `TNegInt` type has the following API:

- `TNegInt(value: any, options?: Options): number` - checks the input value for the correspondence of the negative integer `number` type. If the input value is not a number or not a negative integer, then the function throws a `TypeError` in `strict` mode or tries to cast the input value to a number in `casting` mode. The function returns the input value if it is a negative integer.
  - The function used `TInt` under the hood -> [TInt](../README.md)
  - In order to enable `strict` mode, you need to specify `{ strict: true `} in the options
  - For using the `casting` mode, just don't specify the options or specify `{ strict: false }`
- Types:
  - `number` - JavaScript embedded type
  - `TNumber` - the parent abstraction type before `TInt`
  - `TInt` - the parent abstraction type
  - `TNegInt` or `negint` - the own type

## Examples

    ```javascript
    import { TNegInt } from 'typedjs';

    // casting mode
    TNegInt(-42); // -42
    TNegInt(-42.42); // TypeError: TypedJS: -42.42 is not an int
    TNegInt('-42'); // -42
    TNegInt('-42.42'); // TypeError: TypedJS: -42.42 is not an int
    TNegInt('-42.42.42'); // TypeError: value is not a number
    TNegInt(NaN); // TypeError: TypedJS: NaN is not a number
    TNegInt(Infinity); // TypeError: TypedJS: Infinity is not a number
    TNegInt(-Infinity); // TypeError: TypedJS: -Infinity is not a number

    // strict mode
    TNegInt(-42, { strict: true }); // -42
    TNegInt(-42.42, { strict: true }); // TypeError: TypedJS: -42.42 is not an int
    TNegInt('-42', { strict: true }); // -42
    TNegInt('-42.42', { strict: true }); // TypeError: TypedJS: -42.42 is not an int
    TNegInt('-42.42.42', { strict: true }); // TypeError: value is not a number
    TNegInt(NaN, { strict: true }); // TypeError: TypedJS: NaN is not a number
    TNegInt(Infinity, { strict: true }); // TypeError: TypedJS: Infinity is not a number
    TNegInt(-Infinity, { strict: true }); // TypeError: TypedJS: -Infinity is not a number
    ```
