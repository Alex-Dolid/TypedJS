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

export const TYPES = {
  NUMBER: 'number',
  STRING: 'string',
  UNDEFINED: 'undefined',
  NULL: 'null',
  BOOLEAN: 'boolean',
  BIG_INT: 'bigint',
  SYMBOL: 'symbol',
  OBJECT: 'object',
  ARRAY: 'array',
  CLASS: 'class',
  MAP: 'map',
  WEAK_MAP: 'weakmap',
  SET: 'set',
  WEAK_SET: 'weakset',
  PROMISE: 'promise',
  DATE: 'date',
  FUNCTION: 'function',
};

export const TYPEDJS_TYPES = {
  INT: 'int',
  POS_NUMBER: 'posnumber',
  NEG_NUMBER: 'negnumber',
  POS_INT: 'posint',
  NEG_INT: 'negint',
  DOUBLE: 'double',
  POS_DOUBLE: 'posdouble',
  NEG_DOUBLE: 'negdouble',
  POS_BIG_INT: 'posbigint',
  NEG_BIG_INT: 'negbigint',
};

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
]);
