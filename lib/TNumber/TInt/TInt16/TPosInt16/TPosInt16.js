import { BaseTJS } from '../../../../BaseTJS';
import { TInt16 } from '../TInt16';
import { TYPEDJS_TYPES } from '../../../../constants.js';

export class TPosInt16 extends TInt16 {
  static MIN_VALUE = 1;
  static MAX_VALUE = TInt16.MAX_VALUE;

  constructor(value, { strict } = { strict: false }) {
    super(TPosInt16.PosInt16(value, { strict }));
  }

  static PosInt16(value, { strict } = { strict: false }) {
    const int16 = super.Int16(value, { strict });

    if (TPosInt16.isPosInt16(int16)) return int16;

    throw new TypeError(BaseTJS.getTypeErrorMessage(int16, TYPEDJS_TYPES.POS_INT16));
  }

  static isPosInt16(value) {
    return TInt16.isInt16(value) && value >= TPosInt16.MIN_VALUE;
  }
}
