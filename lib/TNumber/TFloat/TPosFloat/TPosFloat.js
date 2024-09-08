import { BaseTJS } from '../../../BaseTJS/index.js';
import { TYPEDJS_TYPES } from '../../../constants.js';
import { TFloat } from '../TFloat.js';
import { isPositive } from '../../TNumber.helpers.js';

export const TPosFloat = (value, options) => {
  const float = TFloat(value, options);
  if (isPositive(float)) return float;
  throw new TypeError(BaseTJS.getTypeErrorMessage(float, TYPEDJS_TYPES.POS_FLOAT));
};
