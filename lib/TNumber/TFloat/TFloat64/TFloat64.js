import { BaseTJS } from '../../../BaseTJS';
import { TYPEDJS_TYPES } from '../../../constants.js';
import { isFloat } from '../../TNumber.helpers.js';
import { TFloat } from '../TFloat.js';

export const MIN_VALUE = -1.7976931348623157e308;
export const MAX_VALUE = 1.7976931348623157e308;
export const MIN_NORMAL_VALUE = 2.2250738585072014e-308;
export const MIN_SAFE_INTEGER = -9007199254740991;
export const MAX_SAFE_INTEGER = 9007199254740991;
export const EPSILON = 2.2204460492503131e-16;

export const isFloat64 = (value) =>
  isFloat(value) && value >= MIN_VALUE && value <= MAX_VALUE;

export const TFloat64 = (value, options) => {
  const float = TFloat(value, options);
  if (isFloat64(float)) return float;
  throw new TypeError(BaseTJS.getTypeErrorMessage(float, TYPEDJS_TYPES.FLOAT64));
};
