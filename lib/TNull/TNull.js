import { BaseTJS } from '../BaseTJS';
import { TYPES } from '../constants';

export class TNull {
  static cache = new Map();

  constructor(value, { strict } = { strict: false }) {
    const newValue = TNull.Null(value, { strict });
    if (!TNull.cache.has(newValue)) TNull.cache.set(newValue, this);
    return TNull.cache.get(newValue);
  }

  static Null(value, { strict } = { strict: false }) {
    if (strict && !TNull.isNull(value)) {
      throw new TypeError(BaseTJS.getTypeErrorMessage(value, TYPES.NULL));
    }

    return null;
  }

  static isNull(value) {
    return value === null;
  }

  toString() {
    return String(null);
  }

  valueOf() {
    return null;
  }

  toJSON() {
    return null;
  }
}

// Examples
// const n1 = new TNull(100);
// const n2 = new TNull(100);
// console.log(TNull.cache);
// console.log(n1, n2);
// console.log(n1 == n2); // true
// console.log(n1 === n2); // true
// console.log(TNull.Null(true));
