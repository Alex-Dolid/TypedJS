import { BaseTJS } from '../BaseTJS';
import { TYPES } from '../constants';

export class TNumber extends Number {
  static cache = {};

  constructor(value, { strict } = { strict: false }) {
    const number = TNumber.Number(value, { strict });
    super(number);
    if (!TNumber.cache[number]) TNumber.cache[number] = this;
    return TNumber.cache[number];
  }

  static Number(value, { strict } = { strict: false }) {
    const coercedValue = !strict ? Number(value) : value;

    if (TNumber.isNumber(coercedValue)) return coercedValue;

    throw new TypeError(BaseTJS.getTypeErrorMessage(coercedValue, TYPES.NUMBER));
  }

  static isNumber(value) {
    return typeof value === TYPES.NUMBER && isFinite(value);
  }

  static isPositive(value) {
    return typeof value === TYPES.NUMBER && value > 0;
  }

  static isNegative(value) {
    return typeof value === TYPES.NUMBER && value < 0;
  }

  static isDouble(value) {
    return typeof value === TYPES.NUMBER && !super.isInteger(value);
  }
}

// Examples
// const n1 = new TNumber(100);
// const n2 = new TNumber(100);
// console.log(TNumber.cache);
// console.log(n1, n2);
// console.log(n1 == n2) // true
// console.log(n1 === n2) // true
// console.log(TNumber.Number('101'))
// console.log(TNumber.cache);
