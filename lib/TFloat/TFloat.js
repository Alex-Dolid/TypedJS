import { BaseTJS } from '../BaseTJS';
import { TNumber } from '../TNumber';
import { TYPEDJS_TYPES } from '../constants';

export class TFloat extends TNumber {
  constructor(value, { strict } = { strict: false }) {
    super(TFloat.Float(value, { strict }));
  }

  static Float(value, { strict } = { strict: false }) {
    const number = super.Number(value, { strict });

    if (super.isFloat(number)) return number;

    throw new TypeError(BaseTJS.getTypeErrorMessage(number, TYPEDJS_TYPES.FLOAT));
  }
}

// Examples
// const n1 = new TFloat(100.1);
// const n2 = new TFloat(100.1);
// console.log(TFloat.cache);
// console.log(n1, n2);
// console.log(n1 == n2) // true
// console.log(n1 === n2) // true
// console.log(TFloat.Float('101.1'))
// console.log(TFloat.cache);
