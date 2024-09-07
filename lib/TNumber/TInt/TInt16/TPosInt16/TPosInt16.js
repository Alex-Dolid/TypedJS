import { BaseTJS } from '../../../../BaseTJS';
import { TYPEDJS_TYPES } from '../../../../constants.js';
import * as TInt16 from '../TInt16.js';

export const MIN_VALUE = 1;
export const MAX_VALUE = TInt16.MAX_VALUE;

export const isPosInt16 = (value) => TInt16.isInt16(value) && value >= MIN_VALUE;

export const TPosInt16 = (value, options) => {
  const int16 = TInt16.TInt16(value, options);
  if (isPosInt16(int16)) return int16;
  throw new TypeError(BaseTJS.getTypeErrorMessage(int16, TYPEDJS_TYPES.POS_INT16));
};
