import { globalFixtures } from '../fixtures';

export const fixtures = {
  nonStrict: {
    // Primitives
    Number: [1, 0, -1, undefined, undefined, undefined], // TODO continue
    String: new Array(globalFixtures.String.length).fill('string'),
    Undefined: new Array(globalFixtures.Undefined.length).fill('undefined'),
    Null: new Array(globalFixtures.Null.length).fill('object'),
    Boolean: new Array(globalFixtures.Boolean.length).fill('boolean'),
    BigInt: new Array(globalFixtures.BigInt.length).fill('bigint'),
    Symbol: new Array(globalFixtures.Symbol.length).fill('symbol'),
    // Objects
    Object: new Array(globalFixtures.Object.length).fill('object'),
    Array: new Array(globalFixtures.Array.length).fill('object'),
    Class: new Array(globalFixtures.Class.length).fill('object'),
    // Structures
    Map: new Array(globalFixtures.Map.length).fill('object'),
    WeakMap: new Array(globalFixtures.WeakMap.length).fill('object'),
    Set: new Array(globalFixtures.Set.length).fill('object'),
    WeakSet: new Array(globalFixtures.WeakSet.length).fill('object'),
    // Others Objects
    Promise: new Array(globalFixtures.Promise.length).fill('object'),
    // Proxy: new Array(globalFixtures.Proxy.length).fill('object'),
    // Reflect: new Array(globalFixtures.Reflect.length).fill('object'),
    // JSON: new Array(globalFixtures.JSON.length).fill('object'),
    // Math: new Array(globalFixtures.Math.length).fill('object'),
    Date: new Array(globalFixtures.Date.length).fill('object'),
    // Functions
    Function: new Array(globalFixtures.Function.length).fill('function'),
    // Generator: new Array(globalFixtures.Generator.length).fill('function'),
    // AsyncFunction: new Array(globalFixtures.AsyncFunction.length).fill('function'),
    // GeneratorFunction: new Array(globalFixtures.GeneratorFunction.length).fill(
    //   'function',
    // ),
    // AsyncGeneratorFunction: new Array(
    //   globalFixtures.AsyncGeneratorFunction.length,
    // ).fill('function'),
    // Others
    // TypedArray: new Array(globalFixtures.TypedArray.length).fill('object'),
    // DataView: new Array(globalFixtures.DataView.length).fill('object'),
    // Intl: new Array(globalFixtures.Intl.length).fill('object'),
  },
};
