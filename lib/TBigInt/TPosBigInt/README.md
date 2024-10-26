# TPosBigInt

[BigInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt) --> [TBigInt](../../TBigInt/README.md) --> `TPosBigInt`

## Description

The `TPosBigInt` abstraction is a part of the `Primitives/Scalar Data types` layer of the `TBigInt` type. That is, the job of this abstraction is to check the input value for the correspondence of the `BigInt` type at runtime and to check the input value for the positivity.

The `TPosBigInt` abstraction has two modes:

- `strict` - throws a `TypeError` if the input value is not a BigInt or the input value is not a positive BigInt
- `casting` - tries to cast the input value to a BigInt and to a positive BigInt

## API

The `TPosBigInt` type has the following API:

- `TPosBigInt(value: any, options?: Options): BigInt` - checks the input value for the correspondence of the `BigInt` type and for the positivity. If the input value is not a BigInt or the input value is not a positive BigInt, then the function throws a `TypeError` in `strict` mode or tries to cast the input value to a BigInt and to a positive BigInt in `casting` mode. The function returns the input value if it is a BigInt and a positive BigInt.
  - The function used `BigInt` under the hood -> [BigInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt)
  - In order to enable `strict` mode, you need to specify `{ strict: true }` in the options
  - For using the `casting` mode, just don't specify the options or specify `{ strict: false }`
- Types:
  - `bigint` - JavaScript embedded type
  - `TBigInt` - the parent abstraction type
  - `TPosBigInt` - the own type

## Examples

```javascript
import { TPosBigInt } from 'typedjs';

// casting mode
TPosBigInt(42n); // 42n
TPosBigInt(42); // 42n
TPosBigInt('42'); // 42n
TPosBigInt(-42); // TypeError: TypedJS: -42 is not a posbigint

// strict mode
TPosBigInt(42n, { strict: true }); // 42n
TPosBigInt(42, { strict: true }); // 42n
TPosBigInt('42', { strict: true }); // TypeError: TypedJS: '42' is not a bigint
TPosBigInt(-42, { strict: true }); // TypeError: TypedJS: -42 is not a posbigint
```
