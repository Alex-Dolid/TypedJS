# TypedJS [Draft]

__High-level abstractions for writing type-safe JavaScript code__

Features(Goals):
- [ ] Basic type-safe JavaScript API;
  - [x] Primitives/Scalar Data types
    - [x] TString
    - [x] TNumber
    - [x] TBigInt
    - [x] TBoolean
    - [x] TSymbol
    - [x] TNull
    - [x] TUndefined
  - [ ] Reference Data types
    - [ ] TObject
    - [ ] TClass
    - [ ] TArray
    - [ ] TFunction
  - [ ] Collections/Structures
    - [ ] TMap
    - [ ] TWeakMap
    - [ ] TSet
    - [ ] TWeakSet
- [ ] Addons
  - [x] Primitives/Scalar Data types
    - [x] TPosNumber
    - [x] TNegNumber
    - [x] TInt
      - [x] TPosInt
      - [x] TNegInt
    - [x] TFloat
      - [x] TPosFloat
      - [x] TNegFloat
    - [x] TPosBigInt
    - [x] TNegBigInt
  - [ ] Reference Data types
    - [ ] TRecord
    - [ ] TExtArray
    - [ ] TTuple
  - [ ] Interfaces
    - [ ] TInterface
    - [x] TEnum
- [ ] Types check in Runtime (static typing emulation; statically-typed language emulation);
- [ ] Throw TypeError
- [ ] Mode: strict (non-casting)
- [ ] Mode: casting (non-strict)
- [ ] TypeScript support

- [ ] Suggestions
  - [ ] TInt8
  - [ ] TInt16
  - [ ] TInt32
  - [ ] TUint8
  - [ ] TUint16
  - [ ] TUint32
  - [ ] TFloat32
  - [ ] TFloat64
