# TBigInt

[BigInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt) --> `TBigInt`

Modules:

- [TPosBigInt](./TPosBigInt/README.md)
- [TNegBigInt](./TNegBigInt/README.md)

## Description

`TBigInt` is a type-safe JavaScript API that represents a BigInt value.

The `TBigInt` abstraction is a part of the `Primitives/Scalar Data types` layer of the `TBigInt` type. That is, the job of this abstraction is to check the input value for the correspondence of the `BigInt` type at runtime.

The `TBigInt` abstraction has two modes:

- `strict` - throws a `TypeError` if the input value is not a BigInt
- `casting` - tries to cast the input value to a BigInt

## API

The `TBigInt` type has the following API:

- `TBigInt(value: any, options?: Options): BigInt` - checks the input value for the correspondence of the `BigInt` type. If the input value is not a BigInt, then the function throws a `TypeError` in `strict` mode or tries to cast the input value to a BigInt in `casting` mode. The function returns the input value if it is a BigInt.
  - The function used `BigInt` under the hood -> [BigInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt)
  - In order to enable `strict` mode, you need to specify `{ strict: true }` in the options
  - For using the `casting` mode, just don't specify the options or specify `{ strict: false }`
- Types:
  - `bigint` - JavaScript embedded type
  - `TBigInt` - the own type

## Examples

```javascript
import { TBigInt } from 'typedjs';

// casting mode
TBigInt(42n); // 42n
TBigInt(42); // 42n
TBigInt('42'); // 42n
TBigInt('42.42'); // 42n

// strict mode
TBigInt(42n, { strict: true }); // 42n
TBigInt(42, { strict: true }); // 42n
TBigInt('42', { strict: true }); // TypeError: The '42' is not a bigint
TBigInt('42.42', { strict: true }); // TypeError: The '42.42' is not a bigint
```
