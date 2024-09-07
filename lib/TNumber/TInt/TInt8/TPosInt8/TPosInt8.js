import { BaseTJS } from '../../../../BaseTJS';
import { TYPEDJS_TYPES } from '../../../../constants.js';
import * as TInt8 from '../TInt8.js';

export const MIN_VALUE = 1;
export const MAX_VALUE = TInt8.MAX_VALUE;

export const isPosInt8 = (value) =>
  TInt8.isInt8(value) && value >= MIN_VALUE && value <= MAX_VALUE;

export const TPosInt8 = (value, options) => {
  const int8 = TInt8.TInt8(value, options);
  if (isPosInt8(int8)) return int8;
  throw new TypeError(BaseTJS.getTypeErrorMessage(int8, TYPEDJS_TYPES.POS_INT8));
};
