import { BaseTJS } from '../../../BaseTJS/index.js';
import { TYPEDJS_TYPES } from '../../../constants.js';
import { TInt } from '../TInt.js';

export const MAX_VALUE = Number.MAX_SAFE_INTEGER;
export const MIN_VALUE = 1;

export const isPosInt = (value) => Number.isInteger(value) && value >= MIN_VALUE;

export const TPosInt = (value, options) => {
  const int = TInt(value, options);
  if (isPosInt(int)) return int;
  throw new TypeError(BaseTJS.getTypeErrorMessage(int, TYPEDJS_TYPES.POS_INT));
};
