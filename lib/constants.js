import { TUndefined } from './TUndefined/index.js';
import { TNull } from './TNull/index.js';
import { TNumber } from './TNumber/index.js';
import { TString } from './TString/index.js';
import { TBoolean } from './TBoolean/index.js';
import { TBigInt } from './TBigInt/index.js';
import { TSymbol } from './TSymbol/index.js';
import { TPosNumber } from './TPosNumber/index.js';
import { TNegNumber } from './TNegNumber/index.js';
import { TInt } from './TInt/index.js';
import { TPosInt } from './TPosInt/index.js';
import { TNegInt } from './TNegInt/index.js';
import { TFloat } from './TFloat/index.js';
import { TPosFloat } from './TPosFloat/index.js';
import { TNegFloat } from './TNegFloat/index.js';
import { TPosBigInt } from './TPosBigInt/index.js';
import { TNegBigInt } from './TNegBigInt/index.js';
import { TObject } from './TObject/index.js';
import { TArray } from './TArray/index.js';
import { TExtArray } from './TExtArray/index.js';
import { TTuple } from './TTuple/index.js';

export const JS_TYPES = {
  NUMBER: 'number',
  STRING: 'string',
  UNDEFINED: 'undefined',
  BOOLEAN: 'boolean',
  BIG_INT: 'bigint',
  SYMBOL: 'symbol',
  OBJECT: 'object',
  FUNCTION: 'function',
};

export const TYPEDJS_TYPES = {
  INT: 'int',
  INT8: 'int8',
  POS_NUMBER: 'posnumber',
  NEG_NUMBER: 'negnumber',
  POS_INT: 'posint',
  NEG_INT: 'negint',
  FLOAT: 'float',
  POS_FLOAT: 'posfloat',
  NEG_FLOAT: 'negfloat',
  POS_BIG_INT: 'posbigint',
  NEG_BIG_INT: 'negbigint',
  ENUM: 'enum',
  EXT_ARRAY: 'extarray',
  TUPLE: 'tuple',
};

export const AUX_TYPES = {
  NUMERIC: 'numeric',
};

export const TYPES = {
  ...JS_TYPES,
  NULL: 'null',
  ARRAY: 'array',
  CLASS: 'class',
  MAP: 'map',
  WEAK_MAP: 'weakmap',
  SET: 'set',
  WEAK_SET: 'weakset',
  PROMISE: 'promise',
  DATE: 'date',
  ...TYPEDJS_TYPES,
  ...AUX_TYPES,
};

export const CONSTRUCTORS = {
  NUMBER: 'Number',
  STRING: 'String',
  UNDEFINED: 'Undefined',
  NULL: 'Null',
  BOOLEAN: 'Boolean',
  BIG_INT: 'BigInt',
  SYMBOL: 'Symbol',
  OBJECT: 'Object',
  ARRAY: 'Array',
  CLASS: 'Class',
  MAP: 'Map',
  WEAK_MAP: 'WeakMap',
  SET: 'Set',
  WEAK_SET: 'WeakSet',
  PROMISE: 'Promise',
  DATE: 'Date',
  FUNCTION: 'Function',
};

export const INSTANCE_TYPES = new Map([
  // Primitives
  [TUndefined, TYPES.UNDEFINED],
  [TNull, TYPES.NULL],
  [TNumber, TYPES.NUMBER],
  [TPosNumber, TYPES.POS_NUMBER],
  [TNegNumber, TYPES.NEG_NUMBER],
  [TInt, TYPES.INT],
  [TPosInt, TYPES.POS_INT],
  [TNegInt, TYPES.NEG_INT],
  [TFloat, TYPES.FLOAT],
  [TPosFloat, TYPES.POS_FLOAT],
  [TNegFloat, TYPES.NEG_FLOAT],
  [TString, TYPES.STRING],
  [TBoolean, TYPES.BOOLEAN],
  [TBigInt, TYPES.BIG_INT],
  [TPosBigInt, TYPES.POS_BIG_INT],
  [TNegBigInt, TYPES.NEG_BIG_INT],
  [TSymbol, TYPES.SYMBOL],
  // Reference Types
  [TObject, TYPES.OBJECT],
  [TArray, TYPES.ARRAY],
  [TExtArray, TYPES.EXT_ARRAY],
  [TTuple, TYPES.TUPLE],
  // TODO Continue...
]);

export const STRICT_TYPES = new Map([
  // Primitives
  [CONSTRUCTORS.NUMBER, TYPES.NUMBER],
  [CONSTRUCTORS.STRING, TYPES.STRING],
  [CONSTRUCTORS.UNDEFINED, TYPES.UNDEFINED],
  [CONSTRUCTORS.NULL, TYPES.NULL],
  [CONSTRUCTORS.BOOLEAN, TYPES.BOOLEAN],
  [CONSTRUCTORS.BIG_INT, TYPES.BIG_INT],
  [CONSTRUCTORS.SYMBOL, TYPES.SYMBOL],
  // Objects
  [CONSTRUCTORS.OBJECT, TYPES.OBJECT],
  [CONSTRUCTORS.ARRAY, TYPES.ARRAY],
  [CONSTRUCTORS.CLASS, TYPES.CLASS],
  // Structures
  [CONSTRUCTORS.MAP, TYPES.MAP],
  [CONSTRUCTORS.WEAK_MAP, TYPES.WEAK_MAP],
  [CONSTRUCTORS.SET, TYPES.SET],
  [CONSTRUCTORS.WEAK_SET, TYPES.WEAK_SET],
  // Others Objects
  [CONSTRUCTORS.PROMISE, TYPES.PROMISE],
  // ['Proxy', 'proxy'],
  // ['Reflect', 'reflect'],
  // ['JSON', 'objectjson'],
  // ['Math', 'objectmath'],
  [CONSTRUCTORS.DATE, TYPES.DATE],
  // Functions
  [CONSTRUCTORS.FUNCTION, TYPES.FUNCTION],
  // ['Generator', 'generator'],
  // ['AsyncFunction', 'asyncfunction'],
  // ['GeneratorFunction', 'generatorfunction'],
  // ['AsyncGeneratorFunction', 'asyncgeneratorfunction'],
  // Others
  // ['TypedArray', 'typedarray'],
  // ['DataView', 'dataview'],
  // ['Intl', 'intl'],
  // TypedJS Types
]);

export const TYPE_CONSTRUCTORS = new Map([
  // Primitives
  [TYPES.UNDEFINED, TUndefined],
  [STRICT_TYPES.NULL, TNull],
  [TYPES.NUMBER, TNumber],
  [TYPEDJS_TYPES.POS_NUMBER, TPosNumber],
  [TYPEDJS_TYPES.NEG_NUMBER, TNegNumber],
  [TYPEDJS_TYPES.INT, TInt],
  [TYPEDJS_TYPES.POS_INT, TPosInt],
  [TYPEDJS_TYPES.NEG_INT, TNegInt],
  [TYPEDJS_TYPES.FLOAT, TFloat],
  [TYPEDJS_TYPES.POS_FLOAT, TPosFloat],
  [TYPEDJS_TYPES.NEG_FLOAT, TNegFloat],
  [TYPES.STRING, TString],
  [TYPES.BOOLEAN, TBoolean],
  [TYPES.BIG_INT, TBigInt],
  [TYPEDJS_TYPES.POS_BIG_INT, TPosBigInt],
  [TYPEDJS_TYPES.NEG_BIG_INT, TNegBigInt],
  [TYPES.SYMBOL, TSymbol],
]);
