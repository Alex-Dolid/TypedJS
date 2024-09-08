import { BaseTJS } from '../../../BaseTJS/index.js';
import { TYPEDJS_TYPES } from '../../../constants.js';
import { TFloat } from '../TFloat.js';
import { isNegative } from '../../TNumber.helpers.js';

export const TNegFloat = (value, options) => {
  const float = TFloat(value, options);
  if (isNegative(float)) return float;
  throw new TypeError(BaseTJS.getTypeErrorMessage(float, TYPEDJS_TYPES.NEG_FLOAT));
};
