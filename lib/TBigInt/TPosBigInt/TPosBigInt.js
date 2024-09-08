import { BaseTJS } from '../../BaseTJS/index.js';
import { TYPEDJS_TYPES } from '../../constants.js';
import { TBigInt } from '../TBigInt.js';
import { isPositive } from '../TBigInt.helpers.js';

export const TPosBigInt = (value, { strict } = { strict: false }) => {
  const bigInt = TBigInt(value, { strict });
  if (isPositive(bigInt)) return bigInt;
  throw new TypeError(BaseTJS.getTypeErrorMessage(bigInt, TYPEDJS_TYPES.POS_BIG_INT));
};
