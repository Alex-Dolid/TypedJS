import { BaseTJS } from '../BaseTJS';
import { TInt } from '../TInt';
import { TYPEDJS_TYPES } from '../constants';

export class TInt8 extends TInt {
  static MAX_VALUE = 127;
  static MIN_VALUE = -128;

  constructor(value, { strict } = { strict: false }) {
    super(TInt8.Int8(value, { strict }));
  }

  static Int8(value, { strict } = { strict: false }) {
    const int = super.Int(value, { strict });

    if (TInt8.isInt8(int)) return int;

    throw new TypeError(BaseTJS.getTypeErrorMessage(int, TYPEDJS_TYPES.INT8));
  }

  static isInt8(value) {
    return value >= TInt8.MIN_VALUE && value <= TInt8.MAX_VALUE;
  }
}
