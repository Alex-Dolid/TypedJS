import { BaseTJS } from '../../BaseTJS/index.js';
import { TInt } from '../index.js';
import { TYPEDJS_TYPES } from '../../constants.js';

// TODO: Alex Dolid continue from here
export class TInt32 extends TInt {
  static MAX_VALUE = 2147483647;
  static MIN_VALUE = -2147483648;

  constructor(value, { strict } = { strict: false }) {
    super(TInt32.Int32(value, { strict }));
  }

  static Int32(value, { strict } = { strict: false }) {
    const int = super.Int(value, { strict });

    if (TInt32.isInt32(int)) return int;

    throw new TypeError(BaseTJS.getTypeErrorMessage(int, TYPEDJS_TYPES.INT32));
  }

  static isInt32(value) {
    return value >= TInt32.MIN_VALUE && value <= TInt32.MAX_VALUE;
  }
}
