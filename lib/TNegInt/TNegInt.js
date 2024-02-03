import { BaseTJS } from '../BaseTJS';
import { TInt } from '../TInt';
import { TYPEDJS_TYPES } from '../constants';

export class TNegInt extends TInt {
  static MAX_VALUE = -1;
  static MIN_VALUE = Number.MIN_SAFE_INTEGER;

  constructor(value, { strict } = { strict: false }) {
    super(TNegInt.NegInt(value, { strict }));
  }

  static NegInt(value, { strict } = { strict: false }) {
    const number = super.Number(value, { strict });
    const int = super.Int(number, { strict });

    if (TNegInt.isNegInt(int)) return int;

    throw new TypeError(BaseTJS.getTypeErrorMessage(int, TYPEDJS_TYPES.NEG_INT));
  }

  static isNegInt(value) {
    return (
      value >= TNegInt.MIN_VALUE && value <= TNegInt.MAX_VALUE && super.isInteger(value)
    );
  }
}

// Examples
// const n1 = new TNegInt(-100);
// const n2 = new TNegInt(-100);
// console.log(TNegInt.cache);
// console.log(n1, n2);
// console.log(n1 == n2) // true
// console.log(n1 === n2) // true
// console.log(TNegInt.NegInt('-101'))
// console.log(TNegInt.cache);
