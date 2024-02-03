import { BaseTJS } from '../BaseTJS';
import { TInt8 } from '../TInt8';
import { TYPEDJS_TYPES } from '../constants';

export class TNegInt8 extends TInt8 {
  static MAX_VALUE = -1;
  static MIN_VALUE = TInt8.MIN_VALUE;

  constructor(value, { strict } = { strict: false }) {
    super(TNegInt8.NegInt8(value, { strict }));
  }

  static NegInt8(value, { strict } = { strict: false }) {
    const int8 = super.Int8(value, { strict });

    if (TNegInt8.isNegInt8(int8)) return int8;

    throw new TypeError(BaseTJS.getTypeErrorMessage(int8, TYPEDJS_TYPES.NEG_INT8));
  }

  static isNegInt8(value) {
    return TInt8.isInt8(value) && value <= TNegInt8.MAX_VALUE;
  }
}
