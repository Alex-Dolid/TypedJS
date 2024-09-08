import { BaseTJS } from '../../../BaseTJS/index.js';
import { TYPEDJS_TYPES } from '../../../constants.js';
import { TInt } from '../TInt.js';

export const MAX_VALUE = 2147483647;
export const MIN_VALUE = -2147483648;

export const isInt32 = (value) =>
  Number.isInteger(value) && value >= MIN_VALUE && value <= MAX_VALUE;

export const TInt32 = (value, options) => {
  const int = TInt(value, options);
  if (isInt32(int)) return int;
  throw new TypeError(BaseTJS.getTypeErrorMessage(int, TYPEDJS_TYPES.INT32));
};
