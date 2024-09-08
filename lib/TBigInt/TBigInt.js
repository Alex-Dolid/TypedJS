import { BaseTJS } from '../BaseTJS';
import { TYPES } from '../constants';
import { isBigInt } from './TBigInt.helpers.js';

export const TBigInt = (value, options) => {
  const coercedValue = !options?.strict ? BigInt(value) : value;
  if (isBigInt(coercedValue)) return coercedValue;
  throw new TypeError(BaseTJS.getTypeErrorMessage(coercedValue, TYPES.BIG_INT));
};
