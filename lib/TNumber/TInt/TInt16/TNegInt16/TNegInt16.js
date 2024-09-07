import { BaseTJS } from '../../../../BaseTJS';
import * as TInt16 from '../TInt16.js';
import { TYPEDJS_TYPES } from '../../../../constants.js';

export const MIN_VALUE = TInt16.MIN_VALUE;
export const MAX_VALUE = -1;

export const isNegInt16 = (value) =>
  TInt16.isInt16(value) && value >= MIN_VALUE && value <= MAX_VALUE;

export const TNegInt16 = (value, options) => {
  const int16 = TInt16.TInt16(value, options);
  if (isNegInt16(int16)) return int16;
  throw new TypeError(BaseTJS.getTypeErrorMessage(int16, TYPEDJS_TYPES.NEG_INT16));
};
