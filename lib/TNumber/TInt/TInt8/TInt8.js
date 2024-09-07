import { BaseTJS } from '../../../BaseTJS';
import { TInt } from '../TInt.js';
import { TYPEDJS_TYPES } from '../../../constants.js';

export const MAX_VALUE = 127;
export const MIN_VALUE = -128;

export const isInt8 = (value) =>
  Number.isInteger(value) && value >= MIN_VALUE && value <= MAX_VALUE;

export const TInt8 = (value, options) => {
  const int = TInt(value, options);
  if (isInt8(int)) return int;
  throw new TypeError(BaseTJS.getTypeErrorMessage(int, TYPEDJS_TYPES.INT8));
};
