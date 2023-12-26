import { BaseTJS } from '../BaseTJS';
import { TFloat } from '../TFloat';
import { TYPEDJS_TYPES } from '../constants';

export class TPosFloat extends TFloat {
  constructor(value, { strict } = { strict: false }) {
    super(TPosFloat.PosFloat(value, { strict }));
  }

  static PosFloat(value, { strict } = { strict: false }) {
    const number = super.Number(value, { strict });
    const float = super.Float(number, { strict });

    if (super.isPositive(float)) return float;

    throw new TypeError(BaseTJS.getTypeErrorMessage(float, TYPEDJS_TYPES.POS_FLOAT));
  }
}

// Examples
// const n1 = new TPosFloat(100.1);
// const n2 = new TPosFloat(100.1);
// console.log(TPosFloat.cache);
// console.log(n1, n2);
// console.log(n1 == n2) // true
// console.log(n1 === n2) // true
// console.log(TPosFloat.PosFloat('101.1'))
// console.log(TPosFloat.cache);
