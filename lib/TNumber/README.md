# TNumber

[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) --> `TNumber`

Modules:

- [TPosNumber](./TPosNumber/README.md)
- [TNegNumber](./TNegNumber/README.md)
- [TInt](./TInt/README.md)
  - [TPosInt](./TInt/TPosInt/README.md)
  - [TNegInt](./TInt/TNegInt/README.md)
  - [TInt8](./TInt/TInt8/README.md)
    - [TPosInt8](./TInt/TInt8/TPosInt8/README.md)
    - [TNegInt8](./TInt/TInt8/TNegInt8/README.md)
  - [TUint8](./TInt/TUint8/README.md)
  - [TInt16](./TInt/TInt16/README.md)
    - [TPosInt16](./TInt/TInt16/TPosInt16/README.md)
    - [TNegInt16](./TInt/TInt16/TNegInt16/README.md)
  - [TUint16](./TInt/TUint16/README.md)
  - [TInt32](./TInt/TInt32/README.md)
    - [TPosInt32](./TInt/TInt32/TPosInt32/README.md)
    - [TNegInt32](./TInt/TInt32/TNegInt32/README.md)
  - [TUint32](./TInt/TUint32/README.md)
- [TFloat](./TFloat/README.md)
  - [TPosFloat](./TFloat/TPosFloat/README.md)
  - [TNegFloat](./TFloat/TNegFloat/README.md)
  - [TFloat32](./TFloat/TFloat32/README.md)
  - [TFloat64](./TFloat/TFloat64/README.md)

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
    TNumber(NaN); // TypeError: TypedJS: NaN is not a number
    TNumber(Infinity); // TypeError: TypedJS: Infinity is not a number
    TNumber(-Infinity); // TypeError: TypedJS: -Infinity is not a number

    // strict mode
    TNumber(42, { strict: true }); // 42
    TNumber(42.42, { strict: true }); // 42.42
    TNumber('42', { strict: true }); // TypeError: TypedJS: '42' is not a number
    TNumber('42.42', { strict: true }); // TypeError: TypedJS: '42.42' is not a number
    TNumber('42.42.42', { strict: true }); // TypeError: The value is not a number
    TNumber(NaN, { strict: true }); // TypeError: TypedJS: NaN is not a number
    TNumber(Infinity, { strict: true }); // TypeError: TypedJS: Infinity is not a number
    TNumber(-Infinity, { strict: true }); // TypeError: TypedJS: -Infinity is not a number
    ```
