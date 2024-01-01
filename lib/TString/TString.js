import { BaseTJS } from '../BaseTJS';
import { TYPES } from '../constants';

export class TString extends String {
  static cache = new Map();

  constructor(value, { strict } = { strict: false }) {
    const string = TString.String(value, { strict });
    super(string);
    if (!TString.cache.has(string)) TString.cache.set(string, this);
    return TString.cache.get(string);
  }

  static String(value, { strict } = { strict: false }) {
    const coercedValue = !strict ? String(value) : value;

    if (typeof coercedValue === TYPES.STRING) return coercedValue;

    throw new TypeError(BaseTJS.getTypeErrorMessage(coercedValue, TYPES.STRING));
  }
}

// Examples
// const n1 = new TString(100);
// const n2 = new TString(100);
// console.log(TString.cache);
// console.log(n1, n2);
// console.log(n1 == n2); // true
// console.log(n1 === n2); // true
// console.log(TString.String('101'));
// console.log(TString.cache);
