import { BaseTJS } from '../../../BaseTJS/index.js';
import { TFloat } from '../index.js';
import { TYPEDJS_TYPES } from '../../../constants.js';

export class TNegFloat extends TFloat {
  constructor(value, { strict } = { strict: false }) {
    super(TNegFloat.NegFloat(value, { strict }));
  }

  static NegFloat(value, { strict } = { strict: false }) {
    const number = super.Number(value, { strict });
    const float = super.Float(number, { strict });

    if (super.isNegative(float)) return float;

    throw new TypeError(BaseTJS.getTypeErrorMessage(float, TYPEDJS_TYPES.NEG_FLOAT));
  }
}

// Examples
// const n1 = new TNegFloat(-100.1);
// const n2 = new TNegFloat(-100.1);
// console.log(TNegFloat.cache);
// console.log(n1, n2);
// console.log(n1 == n2) // true
// console.log(n1 === n2) // true
// console.log(TNegFloat.NegFloat('-101.1'))
// console.log(TNegFloat.cache);
