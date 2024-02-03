import { BaseTJS } from '../../../../BaseTJS';
import { TInt16 } from '../TInt16';
import { TYPEDJS_TYPES } from '../../../../constants.js';

export class TNegInt16 extends TInt16 {
  static MIN_VALUE = TInt16.MIN_VALUE;
  static MAX_VALUE = -1;

  constructor(value, { strict } = { strict: false }) {
    super(TNegInt16.NegInt16(value, { strict }));
  }

  static NegInt16(value, { strict } = { strict: false }) {
    const int16 = super.Int16(value, { strict });

    if (TNegInt16.isNegInt16(int16)) return int16;

    throw new TypeError(BaseTJS.getTypeErrorMessage(int16, TYPEDJS_TYPES.NEG_INT16));
  }

  static isNegInt16(value) {
    return TInt16.isInt16(value) && value <= TNegInt16.MAX_VALUE;
  }
}
