import { BaseTJS } from '../BaseTJS';
import { TYPES } from '../constants';

export class TSymbol {
  #value;

  static cache = new Map();

  constructor(value, { strict } = { strict: false }) {
    const symbol = TSymbol.Symbol(value, { strict });
    this.#value = symbol;
    if (!TSymbol.cache.has(symbol)) TSymbol.cache.set(symbol, this);
    return TSymbol.cache.get(symbol);
  }

  static Symbol(value, { strict } = { strict: false }) {
    const coercedValue = !strict ? Symbol(value) : value;

    if (TSymbol.isSymbol(coercedValue)) return coercedValue;

    throw new TypeError(BaseTJS.getTypeErrorMessage(value, TYPES.SYMBOL));
  }

  static isSymbol(value) {
    return typeof value === TYPES.SYMBOL;
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

// Examples
// const n1 = new TSymbol(100);
// const n2 = new TSymbol(100);
// console.log(TSymbol.cache);
// console.log(n1, n2);
// console.log(n1 == n2); // false
// console.log(n1 === n2); // false
// console.log(TSymbol.Symbol(true));
