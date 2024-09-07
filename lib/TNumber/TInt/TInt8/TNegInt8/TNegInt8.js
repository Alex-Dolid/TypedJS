import { BaseTJS } from '../../../../BaseTJS/index.js';
import { TYPEDJS_TYPES } from '../../../../constants.js';
import * as TInt8 from '../TInt8.js';

export const MAX_VALUE = -1;
export const MIN_VALUE = TInt8.MIN_VALUE;

export const isNegInt8 = (value) =>
  TInt8.isInt8(value) && value >= MIN_VALUE && value <= MAX_VALUE;

export const TNegInt8 = (value, { strict } = { strict: false }) => {
  const int8 = TInt8.TInt8(value, { strict });
  if (isNegInt8(int8)) return int8;
  throw new TypeError(BaseTJS.getTypeErrorMessage(int8, TYPEDJS_TYPES.NEG_INT8));
};
