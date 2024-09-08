import { BaseTJS } from '../../../../BaseTJS';
import { TYPEDJS_TYPES } from '../../../../constants.js';
import * as TInt32 from '../TInt32.js';

export const MIN_VALUE = TInt32.MIN_VALUE;
export const MAX_VALUE = -1;

export const isNegInt32 = (value) => TInt32.isInt32(value) && value <= MAX_VALUE;

export const TNegInt32 = (value, options) => {
  const int32 = TInt32.TInt32(value, options);
  if (isNegInt32(int32)) return int32;
  throw new TypeError(BaseTJS.getTypeErrorMessage(int32, TYPEDJS_TYPES.NEG_INT32));
};
