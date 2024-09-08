import { BaseTJS } from '../../../BaseTJS';
import { TYPEDJS_TYPES } from '../../../constants.js';
import { TInt } from '../TInt.js';

export const MIN_VALUE = 0;
export const MAX_VALUE = 255;

export const isUint8 = (value) =>
  Number.isInteger(value) && value >= MIN_VALUE && value <= MAX_VALUE;

export const TUint8 = (value, options) => {
  const int = TInt(value, options);
  if (isUint8(int)) return int;
  throw new TypeError(BaseTJS.getTypeErrorMessage(int, TYPEDJS_TYPES.UINT8));
};
