import { BaseTJS } from '../../BaseTJS';
import { TNumber } from '../TNumber';
import { TYPEDJS_TYPES } from '../../constants';

export const TInt = (value, options) => {
  const number = TNumber(value, options);
  if (Number.isInteger(number)) return number;
  throw new TypeError(BaseTJS.getTypeErrorMessage(number, TYPEDJS_TYPES.INT));
};
