import { BaseTJS } from '../../../BaseTJS';
import { TInt } from '../TInt.js';
import { TYPEDJS_TYPES } from '../../../constants.js';

export class TUint16 extends TInt {
  static MIN_VALUE = 0;
  static MAX_VALUE = 65535;

  constructor(value, { strict } = { strict: false }) {
    super(TUint16.Uint16(value, { strict }));
  }

  static Uint16(value, { strict } = { strict: false }) {
    const int = super.Int(value, { strict });

    if (TUint16.isUint16(int)) return int;

    throw new TypeError(BaseTJS.getTypeErrorMessage(int, TYPEDJS_TYPES.UINT16));
  }

  static isUint16(value) {
    return (
      super.isInteger(value) && value >= TUint16.MIN_VALUE && value <= TUint16.MAX_VALUE
    );
  }
}
