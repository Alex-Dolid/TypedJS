import { BaseTJS } from '../../BaseTJS/index.js';
import { TYPEDJS_TYPES } from '../../constants.js';
import { isNegative } from '../TBigInt.helpers.js';
import { TBigInt } from '../TBigInt.js';

export const TNegBigInt = (value, options) => {
  const bigInt = TBigInt(value, options);
  if (isNegative(bigInt)) return bigInt;
  throw new TypeError(BaseTJS.getTypeErrorMessage(bigInt, TYPEDJS_TYPES.NEG_BIG_INT));
};
