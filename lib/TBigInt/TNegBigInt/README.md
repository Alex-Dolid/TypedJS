# TNegBigInt

[BigInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt) --> [TBigInt](../../TBigInt/README.md) --> `TNegBigInt`

## Description

The `TNegBigInt` abstraction is a part of the `Primitives/Scalar Data types` layer of the `TBigInt` type. That is, the job of this abstraction is to check the input value for the correspondence of the `BigInt` type at runtime and to check the input value for the negativity.

The `TNegBigInt` abstraction has two modes:

- `strict` - throws a `TypeError` if the input value is not a BigInt or the input value is not a negative BigInt
- `casting` - tries to cast the input value to a BigInt and to a negative BigInt

## API

The `TNegBigInt` type has the following API:

- `TNegBigInt(value: any, options?: Options): BigInt` - checks the input value for the correspondence of the `BigInt` type and for the negativity. If the input value is not a BigInt or the input value is not a negative BigInt, then the function throws a `TypeError` in `strict` mode or tries to cast the input value to a BigInt and to a negative BigInt in `casting` mode. The function returns the input value if it is a BigInt and a negative BigInt.
  - The function used `BigInt` under the hood -> [BigInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt)
  - In order to enable `strict` mode, you need to specify `{ strict: true }` in the options
  - For using the `casting` mode, just don't specify the options or specify `{ strict: false }`
- Types:
  - `bigint` - JavaScript embedded type
  - `TBigInt` - the parent abstraction type
  - `TNegBigInt` - the own type

## Examples

```javascript
import { TNegBigInt } from 'typedjs';

// casting mode
TNegBigInt(-42n); // -42n
TNegBigInt(-42); // -42n
TNegBigInt('-42'); // -42n

// strict mode
TNegBigInt(-42n, { strict: true }); // -42n
TNegBigInt(-42, { strict: true }); // -42n
TNegBigInt('-42', { strict: true }); // TypeError: The '-42' is not a bigint
```
