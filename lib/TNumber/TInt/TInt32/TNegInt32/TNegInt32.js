import { BaseTJS } from '../../../../BaseTJS';
import { TInt32 } from '../TInt32';
import { TYPEDJS_TYPES } from '../../../../constants.js';

export class TNegInt32 extends TInt32 {
  static MIN_VALUE = TInt32.MIN_VALUE;
  static MAX_VALUE = -1;

  constructor(value, { strict } = { strict: false }) {
    super(TNegInt32.NegInt32(value, { strict }));
  }

  static NegInt32(value, { strict } = { strict: false }) {
    const int32 = super.Int32(value, { strict });

    if (TNegInt32.isNegInt32(int32)) return int32;

    throw new TypeError(BaseTJS.getTypeErrorMessage(int32, TYPEDJS_TYPES.NEG_INT32));
  }

  static isNegInt32(value) {
    return TInt32.isInt32(value) && value <= TNegInt32.MAX_VALUE;
  }
}
