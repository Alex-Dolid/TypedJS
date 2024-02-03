import { BaseTJS } from '../../../BaseTJS';
import { TInt } from '../TInt.js';
import { TYPEDJS_TYPES } from '../../../constants.js';

export class TUint8 extends TInt {
  static MIN_VALUE = 0;
  static MAX_VALUE = 255;

  constructor(value, { strict } = { strict: false }) {
    super(TUint8.Uint8(value, { strict }));
  }

  static Uint8(value, { strict } = { strict: false }) {
    const int = super.Int(value, { strict });

    if (TUint8.isUint8(int)) return int;

    throw new TypeError(BaseTJS.getTypeErrorMessage(int, TYPEDJS_TYPES.UINT8));
  }

  static isUint8(value) {
    return (
      super.isInteger(value) && value >= TUint8.MIN_VALUE && value <= TUint8.MAX_VALUE
    );
  }
}
