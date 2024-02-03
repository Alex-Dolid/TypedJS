import { BaseTJS } from '../../BaseTJS/index.js';
import { TBigInt } from '../index.js';
import { TYPEDJS_TYPES } from '../../constants.js';

export class TPosBigInt extends TBigInt {
  constructor(value, { strict } = { strict: false }) {
    super(TPosBigInt.PosBigInt(value, { strict }));
  }

  static PosBigInt(value, { strict } = { strict: false }) {
    const bigInt = this.BigInt(value, { strict });

    if (this.isPositive(bigInt)) return bigInt;

    throw new TypeError(BaseTJS.getTypeErrorMessage(bigInt, TYPEDJS_TYPES.POS_BIG_INT));
  }
}

// Examples
// const n1 = new TPosBigInt(100);
// const n2 = new TPosBigInt(100);
// console.log(TPosBigInt.cache);
// console.log(n1, n2);
// console.log(n1 == n2) // true
// console.log(n1 === n2) // true
// console.log(TPosBigInt.PosBigInt('101'))
// console.log(TPosBigInt.cache);
// console.log(n1 + n2);
// console.log(n1.toString());
// console.log(JSON.stringify(n1));
