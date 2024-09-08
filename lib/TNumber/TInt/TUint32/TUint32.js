import { BaseTJS } from '../../../BaseTJS';
import { TInt } from '../TInt.js';
import { TYPEDJS_TYPES } from '../../../constants.js';

export const MIN_VALUE = 0;
export const MAX_VALUE = 4294967295;

export const isUint32 = (value) =>
  Number.isInteger(value) && value >= MIN_VALUE && value <= MAX_VALUE;

export const TUint32 = (value, options) => {
  const int = TInt(value, options);
  if (isUint32(int)) return int;
  throw new TypeError(BaseTJS.getTypeErrorMessage(int, TYPEDJS_TYPES.UINT32));
};
