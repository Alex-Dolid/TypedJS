import { BaseTJS } from '../../../../BaseTJS';
import { TInt8 } from '../TInt8';
import { TYPEDJS_TYPES } from '../../../../constants.js';

export class TPosInt8 extends TInt8 {
  static MIN_VALUE = 1;
  static MAX_VALUE = TInt8.MAX_VALUE;

  constructor(value, { strict } = { strict: false }) {
    super(TPosInt8.PosInt8(value, { strict }));
  }

  static PosInt8(value, { strict } = { strict: false }) {
    const int8 = super.Int8(value, { strict });

    if (TPosInt8.isPosInt8(int8)) return int8;

    throw new TypeError(BaseTJS.getTypeErrorMessage(int8, TYPEDJS_TYPES.POS_INT8));
  }

  static isPosInt8(value) {
    return TInt8.isInt8(value) && value >= TPosInt8.MIN_VALUE;
  }
}
