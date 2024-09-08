# TInt

[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) --> [TNumber](../README.md) --> `TInt`

Modules:

- [TPosInt](./TPosInt/README.md)
- [TNegInt](./TNegInt/README.md)
- [TInt8](./TInt8/README.md)
  - [TPosInt8](./TInt8/TPosInt8/README.md)
  - [TNegInt8](./TInt8/TNegInt8/README.md)
- [TUint8](./TUint8/README.md)
- [TInt16](./TInt16/README.md)
  - [TPosInt16](./TInt16/TPosInt16/README.md)
  - [TNegInt16](./TInt16/TNegInt16/README.md)
- [TUint16](./TUint16/README.md)
- [TInt32](./TInt32/README.md)
  - [TPosInt32](./TInt32/TPosInt32/README.md)
  - [TNegInt32](./TInt32/TNegInt32/README.md)
- [TUint32](./TUint32/README.md)

## Description

The `TInt` abstraction represents a type-safe number(int) in the JavaScript runtime. It is a part of the `Primitives/Scalar Data types` layer of the `TNumber` type.
That is, the job of this abstraction is to check the input value for the correspondence of the integer `number` type at runtime.

The `TInt` abstraction has two modes:
- `strict` - throws a `TypeError` if the input value is not a number or not an integer
- `casting` - tries to cast the input value to a number and then to an integer

## API

The `TInt` type has the following API:

- `TInt(value: any, options?: Options): number` - checks the input value for the correspondence of the `number` type. If the input value is not a number, then the function throws a `TypeError` in `strict` mode or tries to cast the input value to a number in `casting` mode. The function returns the input value if it is a integer number.
  - The function used `TNumber` under the hood -> [TNumber](../README.md)
  - In order to enable `strict` mode, you need to specify `{ strict: true `} in the options
  - For using the `casting` mode, just don't specify the options or specify `{ strict: false }`
- Types:
  - `number` - JavaScript embedded type
  - `TNumber` - the parent abstraction type
  - `TInt` or `int` - the own type

## Examples

    ```javascript
    import { TInt } from 'typedjs';

    // casting mode
    TInt(42); // 42
    TInt(42.42); // TypeError: TypedJS: 42.42 is not an int
    TInt('42'); // 42
    TInt('42.42'); // TypeError: TypedJS: 42.42 is not an int
    TInt('42.42.42'); // TypeError: value is not a number
    TInt(NaN); // TypeError: TypedJS: NaN is not a number
    TInt(Infinity); // TypeError: TypedJS: Infinity is not a number
    TInt(-Infinity); // TypeError: TypedJS: -Infinity is not a number

    // strict mode
    TInt(42, { strict: true }); // 42
    TInt(42.42, { strict: true }); // TypeError: TypedJS: 42.42 is not an int
    TInt('42', { strict: true }); // TypeError: TypedJS: '42' is not an int
    TInt('42.42', { strict: true }); // TypeError: TypedJS: '42.42' is not an int
    TInt('42.42.42', { strict: true }); // TypeError: value is not a number
    TInt(NaN, { strict: true }); // TypeError: TypedJS: NaN is not a number
    TInt(Infinity, { strict: true }); // TypeError: TypedJS: Infinity is not a number
    TInt(-Infinity, { strict: true }); // TypeError: TypedJS: -Infinity is not a number
    ```
