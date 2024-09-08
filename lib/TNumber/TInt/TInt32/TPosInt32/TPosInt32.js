import { BaseTJS } from '../../../../BaseTJS';
import { TYPEDJS_TYPES } from '../../../../constants.js';
import * as TInt32 from '../TInt32.js';

export const MIN_VALUE = 1;
export const MAX_VALUE = TInt32.MAX_VALUE;

export const isPosInt32 = (value) => TInt32.isInt32(value) && value >= MIN_VALUE;

export const TPosInt32 = (value, options) => {
  const int32 = TInt32.TInt32(value, options);
  if (isPosInt32(int32)) return int32;
  throw new TypeError(BaseTJS.getTypeErrorMessage(int32, TYPEDJS_TYPES.POS_INT32));
};
