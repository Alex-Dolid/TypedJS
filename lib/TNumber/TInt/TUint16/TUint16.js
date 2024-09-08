import { BaseTJS } from '../../../BaseTJS';
import { TInt } from '../TInt.js';
import { TYPEDJS_TYPES } from '../../../constants.js';

export const MIN_VALUE = 0;
export const MAX_VALUE = 65535;

export const isUint16 = (value) =>
  Number.isInteger(value) && value >= MIN_VALUE && value <= MAX_VALUE;

export const TUint16 = (value, options) => {
  const int = TInt(value, options);
  if (isUint16(int)) return int;
  throw new TypeError(BaseTJS.getTypeErrorMessage(int, TYPEDJS_TYPES.UINT16));
};
