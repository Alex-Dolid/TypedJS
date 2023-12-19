import { BaseTJS } from '../BaseTJS';
import { TYPES } from '../constants';

export function TNumber(value, { strict } = { strict: false }) {
  const coercedValue = !strict ? Number(value) : value;

  if (BaseTJS.isNumber(coercedValue)) return coercedValue;

  throw new TypeError(BaseTJS.getTypeErrorMessage(coercedValue, TYPES.NUMBER));
}
