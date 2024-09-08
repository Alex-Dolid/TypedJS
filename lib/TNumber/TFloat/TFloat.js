import { BaseTJS } from '../../BaseTJS';
import { TYPEDJS_TYPES } from '../../constants.js';
import { TNumber } from '../TNumber.js';
import { isFloat } from '../TNumber.helpers.js';

export const TFloat = (value, options) => {
  const number = TNumber(value, options);
  if (isFloat(number)) return number;
  throw new TypeError(BaseTJS.getTypeErrorMessage(number, TYPEDJS_TYPES.FLOAT));
};
