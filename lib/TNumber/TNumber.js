import { BaseTJS } from '../BaseTJS';
import { TYPES } from '../constants';
import { isNumber } from './TNumber.helpers.js';

export const TNumber = (value, options) => {
  const coercedValue = !options?.strict ? Number(value) : value;
  if (isNumber(coercedValue)) return coercedValue;
  throw new TypeError(BaseTJS.getTypeErrorMessage(coercedValue, TYPES.NUMBER));
};
