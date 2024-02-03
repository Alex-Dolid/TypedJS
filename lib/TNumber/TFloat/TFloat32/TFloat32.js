import { BaseTJS } from '../../../BaseTJS';
import { TFloat } from '../TFloat.js';
import { TYPEDJS_TYPES } from '../../../constants.js';

export class TFloat32 extends TFloat {
  static MIN_VALUE = -3.40282347e38;
  static MAX_VALUE = 3.40282347e38;
  static MIN_NORMAL_VALUE = 1.17549435e-38;
  static MIN_SAFE_INTEGER = -16777215;
  static MAX_SAFE_INTEGER = 16777215;
  static EPSILON = 1.1920929e-7;

  constructor(value, { strict } = { strict: false }) {
    super(TFloat32.Float32(value, { strict }));
  }

  static Float32(value, { strict } = { strict: false }) {
    const float = super.Float(value, { strict });

    if (TFloat32.isFloat32(float)) return float;

    throw new TypeError(BaseTJS.getTypeErrorMessage(float, TYPEDJS_TYPES.FLOAT32));
  }

  static isFloat32(value) {
    return (
      super.isFloat(value) && value >= TFloat32.MIN_VALUE && value <= TFloat32.MAX_VALUE
    );
  }
}
