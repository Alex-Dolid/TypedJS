import { BaseTJS } from '../BaseTJS';
import { TYPES } from '../constants';

class BaseTBigInt {
  #value;

  constructor(value) {
    this.#value = BigInt(value);
  }

  toString(radix) {
    return this.#value.toString(radix);
  }

  valueOf() {
    return this.#value;
  }

  toJSON() {
    return this.toString();
  }
}

export class TBigInt extends BaseTBigInt {
  static cache = new Map();

  constructor(value, { strict } = { strict: false }) {
    const bigInt = TBigInt.BigInt(value, { strict });
    super(bigInt);
    if (!TBigInt.cache.has(bigInt)) TBigInt.cache.set(bigInt, this);
    return TBigInt.cache.get(bigInt);
  }

  static BigInt(value, { strict } = { strict: false }) {
    const coercedValue = !strict ? BigInt(value) : value;

    if (TBigInt.isBigInt(coercedValue)) return coercedValue;

    throw new TypeError(BaseTJS.getTypeErrorMessage(coercedValue, TYPES.BIG_INT));
  }

  static isBigInt(value) {
    return typeof value === TYPES.BIG_INT;
  }

  static isPositive(value) {
    return typeof value === TYPES.BIG_INT && value > 0n;
  }

  static isNegative(value) {
    return typeof value === TYPES.BIG_INT && value < 0n;
  }
}

// Examples
// const n1 = new TBigInt(100);
// const n2 = new TBigInt(100);
// console.log(TBigInt.cache);
// console.log(n1, n2);
// console.log(n1 == n2) // true
// console.log(n1 === n2) // true
// console.log(TBigInt.BigInt('101'))
// console.log(TBigInt.cache);
// console.log(n1 + n2);
// console.log(n1.toString());
// console.log(JSON.stringify(n1));
