import { BaseTJS } from '../../../BaseTJS/index.js';
import { TYPEDJS_TYPES } from '../../../constants.js';
import { TInt } from '../TInt.js';

export const MAX_VALUE = 32767;
export const MIN_VALUE = -32768;

export const isInt16 = (value) =>
  Number.isInteger(value) && value >= MIN_VALUE && value <= MAX_VALUE;

export const TInt16 = (value, options) => {
  const int = TInt(value, options);
  if (isInt16(int)) return int;
  throw new TypeError(BaseTJS.getTypeErrorMessage(int, TYPEDJS_TYPES.INT16));
};
