import { BaseTJS } from '../BaseTJS';
import { TYPES } from '../constants';

export class TUndefined {
  static cache = new Map();

  constructor(value, { strict } = { strict: false }) {
    const newValue = TUndefined.Undefined(value, { strict });
    if (!TUndefined.cache.has(newValue)) TUndefined.cache.set(newValue, this);
    return TUndefined.cache.get(newValue);
  }

  static Undefined(value, { strict } = { strict: false }) {
    if (strict && TUndefined.isDefined(value)) {
      throw new TypeError(BaseTJS.getTypeErrorMessage(value, TYPES.UNDEFINED));
    }

    return undefined;
  }

  static isDefined(value) {
    return typeof value !== TYPES.UNDEFINED;
  }

  toString() {
    return String(undefined);
  }

  valueOf() {
    return undefined;
  }

  toJSON() {
    return undefined;
  }
}

// Examples
// const n1 = new TUndefined(100);
// const n2 = new TUndefined(100);
// console.log(TUndefined.cache);
// console.log(n1, n2);
// console.log(n1 > '');
// console.log(n1 == n2); // true
// console.log(n1 === n2); // true
// console.log(TUndefined.Undefined(true));
