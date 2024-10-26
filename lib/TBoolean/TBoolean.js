import { BaseTJS } from '../BaseTJS';
import { TYPES } from '../constants';
import { isBoolean } from './TBoolean.helpers.js';

export const TBoolean = (value, options) => {
  const coercedValue = !options?.strict ? Boolean(value) : value;
  if (isBoolean(coercedValue)) return coercedValue;
  throw new TypeError(BaseTJS.getTypeErrorMessage(coercedValue, TYPES.BOOLEAN));
};
