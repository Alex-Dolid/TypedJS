import { BaseTJS } from '../BaseTJS';
import { TDouble } from '../TDouble';
import { TYPEDJS_TYPES } from '../constants';

export class TNegDouble extends TDouble {
  constructor(value, { strict } = { strict: false }) {
    super(TNegDouble.NegDouble(value, { strict }));
  }

  static NegDouble(value, { strict } = { strict: false }) {
    const number = super.Number(value, { strict });
    const double = super.Double(number, { strict });

    if (super.isNegative(double)) return double;

    throw new TypeError(BaseTJS.getTypeErrorMessage(double, TYPEDJS_TYPES.NEG_DOUBLE));
  }
}

// Examples
// const n1 = new TNegDouble(-100.1);
// const n2 = new TNegDouble(-100.1);
// console.log(TNegDouble.cache);
// console.log(n1, n2);
// console.log(n1 == n2) // true
// console.log(n1 === n2) // true
// console.log(TNegDouble.NegDouble('-101.1'))
// console.log(TNegDouble.cache);
