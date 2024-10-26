# TString

[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) --> `TString`

## Description

`TString` is a basic type-safe JavaScript API for string data type.

The `TString` abstraction represents a type-safe string in the JavaScript runtime. It is a part of the `Primitives/Scalar Data types` layer of the `TString` type.
That is, the job of this abstraction is to check the input value for the correspondence of the `string` type at runtime.

The `TString` abstraction has two modes:

- `strict` - throws a `TypeError` if the input value is not a string
- `casting` - tries to cast the input value to a string

## API

The `TString` type has the following API:

- `TString(value: any, options?: Options): string` - checks the input value for the correspondence of the `string` type. If the input value is not a string, then the function throws a `TypeError` in `strict` mode or tries to cast the input value to a string in `casting` mode. The function returns the input value if it is a string.
  - The function used `String` under the hood -> [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
  - In order to enable `strict` mode, you need to specify `{ strict: true }` in the options
  - For using the `casting` mode, just don't specify the options or specify `{ strict: false }`
- Types:
  - `string` - JavaScript embedded type
  - `TString` - the own type

## Examples

```javascript
import { TString } from 'typedjs';

// casting mode
TString('Hello, World!'); // 'Hello, World!'
TString(42); // '42'
TString(42.42); // '42.42'
TString(true); // 'true'
TString(false); // 'false'
TString(null); // 'null'
TString(undefined); // 'undefined'

// strict mode
TString('Hello, World!', { strict: true }); // 'Hello, World!'
TString(42, { strict: true }); // TypeError: TypedJS: 42 is not a string
TString(42.42, { strict: true }); // TypeError: TypedJS: 42.42 is not a string
TString(true, { strict: true }); // TypeError: TypedJS: true is not a string
TString(false, { strict: true }); // TypeError: TypedJS: false is not a string
TString(null, { strict: true }); // TypeError: TypedJS: null is not a string
TString(undefined, { strict: true }); // TypeError: TypedJS: undefined is not a string
```

