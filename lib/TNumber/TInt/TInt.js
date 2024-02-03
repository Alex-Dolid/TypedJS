import { BaseTJS } from '../../BaseTJS';
import { TNumber } from '../TNumber';
import { TYPEDJS_TYPES } from '../../constants';

export class TInt extends TNumber {
  static MAX_VALUE = Number.MAX_SAFE_INTEGER;
  static MIN_VALUE = Number.MIN_SAFE_INTEGER;

  constructor(value, { strict } = { strict: false }) {
    super(TInt.Int(value, { strict }));
  }

  static Int(value, { strict } = { strict: false }) {
    const number = super.Number(value, { strict });

    if (super.isInteger(number)) return number;

    throw new TypeError(BaseTJS.getTypeErrorMessage(number, TYPEDJS_TYPES.INT));
  }
}

// Examples
// const n1 = new TInt(100);
// const n2 = new TInt(100);
// console.log(TInt.cache);
// console.log(n1, n2);
// console.log(n1 == n2) // true
// console.log(n1 === n2) // true
// console.log(TInt.Int('101'))
// console.log(TInt.cache);
