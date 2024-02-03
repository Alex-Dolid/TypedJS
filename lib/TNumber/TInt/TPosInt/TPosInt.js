import { BaseTJS } from '../../BaseTJS/index.js';
import { TInt } from '../index.js';
import { TYPEDJS_TYPES } from '../../constants.js';

export class TPosInt extends TInt {
  static MAX_VALUE = Number.MAX_SAFE_INTEGER;
  static MIN_VALUE = 1;

  constructor(value, { strict } = { strict: false }) {
    super(TPosInt.PosInt(value, { strict }));
  }

  static PosInt(value, { strict } = { strict: false }) {
    const number = super.Number(value, { strict });
    const int = super.Int(number, { strict });

    if (TPosInt.isPosInt(int)) return int;

    throw new TypeError(BaseTJS.getTypeErrorMessage(int, TYPEDJS_TYPES.POS_INT));
  }

  static isPosInt(value) {
    return value >= TPosInt.MIN_VALUE && super.isInteger(value);
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
