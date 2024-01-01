import { BaseTJS } from '../BaseTJS';
import { TYPES } from '../constants';

export class TBoolean extends Boolean {
  static cache = new Map();

  constructor(value, { strict } = { strict: false }) {
    const boolean = TBoolean.Boolean(value, { strict });
    super(boolean);
    if (!TBoolean.cache.has(boolean)) TBoolean.cache.set(boolean, this);
    return TBoolean.cache.get(boolean);
  }

  static Boolean(value, { strict } = { strict: false }) {
    const coercedValue = !strict ? Boolean(value) : value;

    if (typeof coercedValue === TYPES.BOOLEAN) return coercedValue;

    throw new TypeError(BaseTJS.getTypeErrorMessage(coercedValue, TYPES.BOOLEAN));
  }
}

// Examples
// const n1 = new TBoolean(100);
// const n2 = new TBoolean(100);
// console.log(TBoolean.cache);
// console.log(n1, n2);
// console.log(n1 == n2); // true
// console.log(n1 === n2); // true
// console.log(TBoolean.Boolean(false));
// console.log(TBoolean.cache);
