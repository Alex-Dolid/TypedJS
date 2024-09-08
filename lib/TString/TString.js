import { BaseTJS } from '../BaseTJS';
import { TYPES } from '../constants';

export const TString = (value, options) => {
  const coercedValue = !options?.strict ? String(value) : value;
  if (typeof coercedValue === TYPES.STRING) return coercedValue;
  throw new TypeError(BaseTJS.getTypeErrorMessage(coercedValue, TYPES.STRING));
};
