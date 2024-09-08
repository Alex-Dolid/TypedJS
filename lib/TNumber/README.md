# TNumber
[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) --> `TNumber`

Modules:
- [TPosNumber](./TPosNumber/README.md)
- [TNegNumber](./TNegNumber/README.md)
- ...

## Description

The `TNumber` abstraction represents a type-safe number in the JavaScript runtime. It is a part of the `Primitives/Scalar Data types` layer of the `TNumber` type.
That is, the job of this abstraction is to check the input value for the correspondence of the `number` type at runtime.

Also, the job of this abstraction is to fix weird things from JS life, such as:

- `typeof NaN === 'number'`
- `typeof Infinity === 'number'`
- `typeof -Infinity === 'number'`

The `TNumber` abstraction has two modes:

- `strict` - throws a `TypeError` if the input value is not a number
- `casting` - tries to cast the input value to a number

## API

The `TNumber` type has the following API:

- `TNumber(value: any, options?: Options): number` - checks the input value for the correspondence of the `number` type. If the input value is not a number, then the function throws a `TypeError` in `strict` mode or tries to cast the input value to a number in `casting` mode. The function returns the input value if it is a number. If the input value is `NaN`, `Infinity`, or `-Infinity`, then the function throws a `TypeError`.
  - The function used `Number` under the hood -> [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
  - In order to enable `strict` mode, you need to specify `{ strict: true `} in the options
  - For using the `casting` mode, just don't specify the options or specify `{ strict: false }`
- Types:
  - `number` - JavaScript embedded type
  - `TNumber` - the own type

## Examples

    ```javascript
    import { TNumber } from 'typedjs';

    // casting mode
    TNumber(42); // 42
    TNumber(42.42); // 42.42
    TNumer('42'); // 42
    TNumber('42.42'); // 42.42
    TNumber('42.42.42'); // TypeError: The value is not a number
    TNumber(NaN); // TypedJS: NaN is not a number
    TNumber(Infinity); // TypedJS: Infinity is not a number
    TNumber(-Infinity); // TypedJS: -Infinity is not a number

    // strict mode
    TNumber(42, { strict: true }); // 42
    TNumber(42.42, { strict: true }); // 42.42
    TNumber('42', { strict: true }); // TypedJS: '42' is not a number
    TNumber('42.42', { strict: true }); // TypedJS: '42.42' is not a number
    TNumber('42.42.42', { strict: true }); // TypeError: The value is not a number
    TNumber(NaN, { strict: true }); // TypedJS: NaN is not a number
    TNumber(Infinity, { strict: true }); // TypedJS: Infinity is not a number
    TNumber(-Infinity, { strict: true }); // TypedJS: -Infinity is not a number
    ```
