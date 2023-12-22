import { BaseTJS } from '../BaseTJS';
import { TInt } from '../TInt';
import { TYPEDJS_TYPES } from '../constants';

export class TPosInt extends TInt {
  constructor(value, { strict } = { strict: false }) {
    const newValue = TPosInt.PosInt(value, { strict });
    super(newValue);
  }

  static PosInt(value, { strict } = { strict: false }) {
    const number = super.Number(value, { strict });
    const int = super.Int(number, { strict });

    if (super.isPositive(int)) return int;

    throw new TypeError(BaseTJS.getTypeErrorMessage(int, TYPEDJS_TYPES.POS_INT));
  }
}

// Examples
// const n1 = new TPosInt(100);
// const n2 = new TPosInt(100);
// console.log(TPosInt.cache);
// console.log(n1, n2);
// console.log(n1 == n2) // true
// console.log(n1 === n2) // true
// console.log(TPosInt.PosInt('101'))
// console.log(TPosInt.cache);
