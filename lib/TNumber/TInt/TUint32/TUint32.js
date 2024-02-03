import { BaseTJS } from '../../../BaseTJS';
import { TInt } from '../TInt.js';
import { TYPEDJS_TYPES } from '../../../constants.js';

export class TUint32 extends TInt {
  static MIN_VALUE = 0;
  static MAX_VALUE = 4294967295;

  constructor(value, { strict } = { strict: false }) {
    super(TUint32.Uint32(value, { strict }));
  }

  static Uint32(value, { strict } = { strict: false }) {
    const int = super.Int(value, { strict });

    if (TUint32.isUint32(int)) return int;

    throw new TypeError(BaseTJS.getTypeErrorMessage(int, TYPEDJS_TYPES.UINT32));
  }

  static isUint32(value) {
    return (
      super.isInteger(value) && value >= TUint32.MIN_VALUE && value <= TUint32.MAX_VALUE
    );
  }
}
