# TBoolean

[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) --> `TBoolean`

## Description

The `TBoolean` abstraction is a type-safe boolean in the JavaScript runtime. It is a part of the `Primitives/Scalar Data types` layer of the `TBoolean` type.
That is, the job of this abstraction is to check the input value for the correspondence of the boolean `boolean` type at runtime.

The `TBoolean` abstraction has two modes:

- `strict` - throws a `TypeError` if the input value is not a boolean
- `casting` - tries to cast the input value to a boolean

## API

The `TBoolean` type has the following API:

- `TBoolean(value: any, options?: Options): boolean` - checks the input value for the correspondence of the `boolean` type. If the input value is not a boolean, then the function throws a `TypeError` in `strict` mode or tries to cast the input value to a boolean in `casting` mode. The function returns the input value if it is a boolean.
  - In order to enable `strict` mode, you need to specify `{ strict: true }` in the options
  - For using the `casting` mode, just don't specify the options or specify `{ strict: false }`
- Types:
  - `boolean` - JavaScript embedded type
  - `TBoolean` - the own type

## Examples

```javascript
import { TBoolean } from 'typedjs';

// casting mode
TBoolean(true); // true
TBoolean(false); // false
TBoolean(42); // true
TBoolean(0); // false
TBoolean('true'); // true
TBoolean('false'); // false
TBoolean('42'); // true
TBoolean('0'); // false

// strict mode
TBoolean(true, { strict: true }); // true
TBoolean(false, { strict: true }); // false
TBoolean(42, { strict: true }); // TypeError: TypedJS: 42 is not a boolean
TBoolean(0, { strict: true }); // TypeError: TypedJS: 0 is not a boolean
TBoolean('true', { strict: true }); // TypeError: TypedJS: true is not a boolean
TBoolean('false', { strict: true }); // TypeError: TypedJS: false is not a boolean
TBoolean('42', { strict: true }); // TypeError: TypedJS: '42' is not a boolean
TBoolean('0', { strict: true }); // TypeError: TypedJS: '0' is not a boolean
```

