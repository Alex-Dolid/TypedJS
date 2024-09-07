import { BaseTJS } from '../../BaseTJS/index.js';
import { TNumber } from '../TNumber.js';
import { isPositive } from '../TNumber.helpers.js';
import { TYPEDJS_TYPES } from '../../constants.js';

export const TPosNumber = (value, options) => {
  const number = TNumber(value, options);
  if (isPositive(number)) return number;
  throw new TypeError(BaseTJS.getTypeErrorMessage(number, TYPEDJS_TYPES.POS_NUMBER));
};
