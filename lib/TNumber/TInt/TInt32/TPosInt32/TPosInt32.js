import { BaseTJS } from '../../../../BaseTJS';
import { TInt32 } from '../TInt32';
import { TYPEDJS_TYPES } from '../../../../constants.js';

export class TPosInt32 extends TInt32 {
  static MIN_VALUE = 1;
  static MAX_VALUE = TInt32.MAX_VALUE;

  constructor(value, { strict } = { strict: false }) {
    super(TPosInt32.PosInt32(value, { strict }));
  }

  static PosInt32(value, { strict } = { strict: false }) {
    const int32 = super.Int32(value, { strict });

    if (TPosInt32.isPosInt32(int32)) return int32;

    throw new TypeError(BaseTJS.getTypeErrorMessage(int32, TYPEDJS_TYPES.POS_INT32));
  }

  static isPosInt32(value) {
    return TInt32.isInt32(value) && value >= TPosInt32.MIN_VALUE;
  }
}
