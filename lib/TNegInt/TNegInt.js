import { BaseTJS } from '../BaseTJS';
import { TInt } from '../TInt';
import { TYPEDJS_TYPES } from '../constants';

export class TNegInt extends TInt {
  constructor(value, { strict } = { strict: false }) {
    super(TNegInt.NegInt(value, { strict }));
  }

  static NegInt(value, { strict } = { strict: false }) {
    const number = super.Number(value, { strict });
    const int = super.Int(number, { strict });

    if (super.isNegative(int)) return int;

    throw new TypeError(BaseTJS.getTypeErrorMessage(int, TYPEDJS_TYPES.NEG_INT));
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
