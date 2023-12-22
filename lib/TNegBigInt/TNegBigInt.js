import { BaseTJS } from '../BaseTJS';
import { TBigInt } from '../TBigInt';
import { TYPEDJS_TYPES } from '../constants';

export class TNegBigInt extends TBigInt {
  constructor(value, { strict } = { strict: false }) {
    super(TNegBigInt.NegBigInt(value, { strict }));
  }

  static NegBigInt(value, { strict } = { strict: false }) {
    const bigInt = this.BigInt(value, { strict });

    if (this.isNegative(bigInt)) return bigInt;

    throw new TypeError(BaseTJS.getTypeErrorMessage(bigInt, TYPEDJS_TYPES.NEG_BIG_INT));
  }
}

// Examples
// const n1 = new TNegBigInt(-100);
// const n2 = new TNegBigInt(-100);
// console.log(TNegBigInt.cache);
// console.log(n1, n2);
// console.log(n1 == n2) // true
// console.log(n1 === n2) // true
// console.log(TNegBigInt.NegBigInt('-101'))
// console.log(TNegBigInt.cache);
// console.log(n1 + n2);
// console.log(n1.toString());
// console.log(JSON.stringify(n1));
