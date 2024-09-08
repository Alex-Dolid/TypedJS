import { BaseTJS } from '../../../BaseTJS/index.js';
import { TYPEDJS_TYPES } from '../../../constants.js';
import { TInt } from '../TInt.js';

export const MAX_VALUE = -1;
export const MIN_VALUE = Number.MIN_SAFE_INTEGER;

export const isNegInt = (value) =>
  Number.isInteger(value) && value <= MAX_VALUE && value >= MIN_VALUE;

export const TNegInt = (value, options) => {
  const int = TInt(value, options);
  if (isNegInt(int)) return int;
  throw new TypeError(BaseTJS.getTypeErrorMessage(int, TYPEDJS_TYPES.NEG_INT));
};
