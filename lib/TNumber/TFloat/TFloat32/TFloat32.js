import { BaseTJS } from '../../../BaseTJS';
import { TYPEDJS_TYPES } from '../../../constants.js';
import { isFloat } from '../../TNumber.helpers.js';
import { TFloat } from '../TFloat.js';

export const MIN_VALUE = -3.40282347e38;
export const MAX_VALUE = 3.40282347e38;
export const MIN_NORMAL_VALUE = 1.17549435e-38;
export const MIN_SAFE_INTEGER = -16777215;
export const MAX_SAFE_INTEGER = 16777215;
export const EPSILON = 1.1920929e-7;

export const isFloat32 = (value) =>
  isFloat(value) && value >= MIN_VALUE && value <= MAX_VALUE;

export const TFloat32 = (value, options) => {
  const float = TFloat(value, options);
  if (isFloat32(float)) return float;
  throw new TypeError(BaseTJS.getTypeErrorMessage(float, TYPEDJS_TYPES.FLOAT32));
};
