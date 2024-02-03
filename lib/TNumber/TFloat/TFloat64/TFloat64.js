import { BaseTJS } from '../../../BaseTJS';
import { TFloat } from '../TFloat.js';
import { TYPEDJS_TYPES } from '../../../constants.js';

export class TFloat64 extends TFloat {
  static MIN_VALUE = -1.7976931348623157e308;
  static MAX_VALUE = 1.7976931348623157e308;
  static MIN_NORMAL_VALUE = 2.2250738585072014e-308;
  static MIN_SAFE_INTEGER = -9007199254740991;
  static MAX_SAFE_INTEGER = 9007199254740991;
  static EPSILON = 2.2204460492503131e-16;

  constructor(value, { strict } = { strict: false }) {
    super(TFloat64.Float64(value, { strict }));
  }

  static Float64(value, { strict } = { strict: false }) {
    const float = super.Float(value, { strict });

    if (TFloat64.isFloat64(float)) return float;

    throw new TypeError(BaseTJS.getTypeErrorMessage(float, TYPEDJS_TYPES.FLOAT64));
  }

  static isFloat64(value) {
    return (
      super.isFloat(value) && value >= TFloat64.MIN_VALUE && value <= TFloat64.MAX_VALUE
    );
  }
}
