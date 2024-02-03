import { BaseTJS } from '../../BaseTJS/index.js';
import { TNumber } from '../index.js';
import { TYPEDJS_TYPES } from '../../constants.js';

export class TPosNumber extends TNumber {
  constructor(value, { strict } = { strict: false }) {
    super(TPosNumber.PosNumber(value, { strict }));
  }

  static PosNumber(value, { strict } = { strict: false }) {
    const number = super.Number(value, { strict });

    if (super.isPositive(number)) return number;

    throw new TypeError(BaseTJS.getTypeErrorMessage(number, TYPEDJS_TYPES.POS_NUMBER));
  }
}

// Examples
// const n1 = new TPosNumber(100);
// const n2 = new TPosNumber(100);
// console.log(TPosNumber.cache);
// console.log(n1, n2);
// console.log(n1 == n2) // true
// console.log(n1 === n2) // true
// console.log(TPosNumber.PosNumber('101'))
// console.log(TPosNumber.cache);
