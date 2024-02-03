import { BaseTJS } from '../BaseTJS';
import { TInt } from '../TInt';
import { TYPEDJS_TYPES } from '../constants';

export class TInt16 extends TInt {
  static MAX_VALUE = 32767;
  static MIN_VALUE = -32768;

  constructor(value, { strict } = { strict: false }) {
    super(TInt16.Int16(value, { strict }));
  }

  static Int16(value, { strict } = { strict: false }) {
    const int = super.Int(value, { strict });

    if (TInt16.isInt16(int)) return int;

    throw new TypeError(BaseTJS.getTypeErrorMessage(int, TYPEDJS_TYPES.INT16));
  }

  static isInt16(value) {
    return value >= TInt16.MIN_VALUE && value <= TInt16.MAX_VALUE;
  }
}
