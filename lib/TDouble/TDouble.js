import { BaseTJS } from '../BaseTJS';
import { TNumber } from '../TNumber';
import { TYPEDJS_TYPES } from '../constants';

export class TDouble extends TNumber {
  constructor(value, { strict } = { strict: false }) {
    super(TDouble.Double(value, { strict }));
  }

  static Double(value, { strict } = { strict: false }) {
    const number = super.Number(value, { strict });

    if (super.isDouble(number)) return number;

    throw new TypeError(BaseTJS.getTypeErrorMessage(number, TYPEDJS_TYPES.DOUBLE));
  }
}

// Examples
// const n1 = new TDouble(100.1);
// const n2 = new TDouble(100.1);
// console.log(TDouble.cache);
// console.log(n1, n2);
// console.log(n1 == n2) // true
// console.log(n1 === n2) // true
// console.log(TDouble.Double('101.1'))
// console.log(TDouble.cache);
