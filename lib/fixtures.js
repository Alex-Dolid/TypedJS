function joeFn(){}
async function joeFnAsync(){}
function* joeGenerator() {}
function JoeFnConstructor() { this.doe = 'joe' }
const joeObject = { joeObjMethod() {} }
class JoeClassWithConstructor { constructor() { this.doe = 'joe' } };
class JoeClass { joeClassMethod(){} };

export const fixtures = {
  // Primitives
  Number: [1, 0, -1, Infinity, -Infinity, NaN, -0.1, 0.1],
  String: ['', ' ', '1', ' 1 ', 'joe'],
  Undefined: [undefined],
  Null: [null],
  Boolean: [true, false],
  BigInt: [90071992547409914n, -90071992547409914n],
  Symbol: [Symbol('joe')],
  // Objects
  Object: [{}, { joe: 'doe' }],
  Array: [[], [1, 2], ['joe', 'doe'], [true, false]],
  Class: [JoeClass, JoeClassWithConstructor],
  // Structures
  Map: [new Map([])],
  WeakMap: [new WeakMap([])],
  Set: [new Set([])],
  WeakSet: [new WeakMap([])],
  // Others Objects
  Promise: [new Promise()],
  Proxy: [new Proxy()],
  Reflect: [Reflect],
  JSON: [JSON],
  Math: [Math],
  Date: [new Date()],
  // Functions
  Function: [() => {}, joeFn, JoeFnConstructor, joeObject.joeObjMethod, JoeClass.joeClassMethod],
  Generator: [joeGenerator],
  AsyncFunction: [async () => {}, joeFnAsync],
  GeneratorFunction: [function* () {}],
  AsyncGeneratorFunction: [async function* () {}],
  // Others
  TypedArray: [new Int8Array(), new Uint8Array(), new Uint8ClampedArray(), new Int16Array(), new Int32Array(), new Uint32Array(), new Float32Array(), new Float64Array(), new BigInt64Array(), new BigUint64Array()]
}