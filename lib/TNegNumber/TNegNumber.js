import { BaseTJS } from '../BaseTJS';
import { TNumber } from '../TNumber';
import { TYPEDJS_TYPES } from '../constants';

export class TNegNumber extends TNumber {
  static MAX_VALUE = -Number.MIN_VALUE;
  static MIN_VALUE = -Number.MAX_VALUE;

  constructor(value, { strict } = { strict: false }) {
    super(TNegNumber.NegNumber(value, { strict }));
  }

  static NegNumber(value, { strict } = { strict: false }) {
    const number = super.Number(value, { strict });

    if (super.isNegative(number)) return number;

    throw new TypeError(BaseTJS.getTypeErrorMessage(number, TYPEDJS_TYPES.NEG_NUMBER));
  }
}

// Examples
// const n1 = new TNegNumber(-100);
// const n2 = new TNegNumber(-100);
// console.log(TNegNumber.cache);
// console.log(n1, n2);
// console.log(n1 == n2) // true
// console.log(n1 === n2) // true
// console.log(TNegNumber.NegNumber('-101'))
// console.log(TNegNumber.cache);
