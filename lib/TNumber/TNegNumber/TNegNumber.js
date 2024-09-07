import { BaseTJS } from '../../BaseTJS/index.js';
import { TNumber } from '../TNumber.js';
import { isNegative } from '../TNumber.helpers.js';
import { TYPEDJS_TYPES } from '../../constants.js';

export const TNegNumber = (value, options) => {
  const number = TNumber(value, options);
  if (isNegative(number)) return number;
  throw new TypeError(BaseTJS.getTypeErrorMessage(number, TYPEDJS_TYPES.NEG_NUMBER));
};
