import { BaseTJS } from '../BaseTJS';
import { TDouble } from '../TDouble';
import { TYPEDJS_TYPES } from '../constants';

export class TPosDouble extends TDouble {
  constructor(value, { strict } = { strict: false }) {
    super(TPosDouble.PosDouble(value, { strict }));
  }

  static PosDouble(value, { strict } = { strict: false }) {
    const number = super.Number(value, { strict });
    const double = super.Double(number, { strict });

    if (super.isPositive(double)) return double;

    throw new TypeError(BaseTJS.getTypeErrorMessage(double, TYPEDJS_TYPES.POS_DOUBLE));
  }
}

// Examples
// const n1 = new TPosDouble(100.1);
// const n2 = new TPosDouble(100.1);
// console.log(TPosDouble.cache);
// console.log(n1, n2);
// console.log(n1 == n2) // true
// console.log(n1 === n2) // true
// console.log(TPosDouble.PosDouble('101.1'))
// console.log(TPosDouble.cache);
