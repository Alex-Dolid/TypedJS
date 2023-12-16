import { BaseTJS } from './BaseTJS';

export function TNumber(value, { strict } = { strict: false }) {
  const coercedValue = !strict ? Number(value) : value;

  if (BaseTJS.isNumber(coercedValue)) {
    return coercedValue;
  }

  if (typeof coercedValue === 'symbol') {
    throw new TypeError(BaseTJS.getTypeErrorMessage(coercedValue, 'number'));
  }

  if (BaseTJS.isPrimitive(coercedValue)) {
    throw new TypeError(`"${value}" is not a number`);
  }

  if (Array.isArray(coercedValue)) {
    throw new TypeError(`Array is not a number`);
  }

  if (typeof coercedValue === 'object') {
    if (BaseTJS.isMap(coercedValue)) {
      throw new TypeError(`Map is not a number`);
    }

    throw new TypeError(`Object is not a number`);
  }

  throw new TypeError(`"${value}" is not a number`);
}
