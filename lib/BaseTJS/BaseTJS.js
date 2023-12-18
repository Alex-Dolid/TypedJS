import { STRICT_TYPES, TYPES } from '../constants';

export class BaseTJS {
  // eslint-disable-next-line no-unused-private-class-members
  #strict;

  constructor({ strict } = { strict: false }) {
    this.#strict = strict;
  }

  static isNumber(value) {
    return typeof value === TYPES.NUMBER && isFinite(value);
  }

  static isPrimitive(value) {
    return (
      value === null || (typeof value !== TYPES.OBJECT && typeof value !== TYPES.FUNCTION)
    );
  }

  static isNil(value) {
    return value === null || value === undefined;
  }

  static isMap(obj) {
    return obj instanceof Map || obj?.constructor?.name === TYPES.MAP;
  }

  static isWeakMap(obj) {
    return obj instanceof WeakMap;
  }

  static isSet(obj) {
    return value instanceof Set;
  }

  static isWeakSet(obj) {
    return value instanceof WeakSet;
  }

  // static isClass(value) {
  //   return (
  //     (typeof value === 'function' && value.prototype !== undefined) ||
  //     (typeof value === 'object' &&
  //       value !== null &&
  //       value.constructor !== undefined &&
  //       value.constructor.prototype !== undefined &&
  //       value.constructor.name !== undefined)
  //   );
  // }

  static isObjJSON(value) {
    return (
      typeof obj === TYPES.OBJECT && obj !== null && value.toString() === '[object JSON]'
    );
  }

  static isObjMath(value) {
    return (
      typeof obj === TYPES.OBJECT && obj !== null && value.toString() === '[object Math]'
    );
  }

  static isPromise(value) {
    return (
      typeof obj === TYPES.OBJECT &&
      obj !== null &&
      value.toString() === '[object Promise]'
    );
  }

  static getTypeErrorMessage(value, type) {
    if (BaseTJS.isPrimitive(value) && typeof value !== TYPES.SYMBOL)
      return `${value} is not a ${type}`;

    return `${BaseTJS.capitalize(BaseTJS.typeOf(value))} is not a ${type}`;
  }

  // static checkType(value, type) {
  //   if (typeof value === type) return;

  //   throw new TypeError(BaseTJS.getTypeErrorMessage(value, type));
  // }

  static capitalize(str) {
    if (typeof str !== TYPES.STRING || str.length === 0) {
      // FIXME
      return str;
    }

    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  static typeOf(value, { strict } = { strict: false }) {
    if (!strict) return typeof value;

    if (BaseTJS.isNil(value)) {
      return STRICT_TYPES.get(
        BaseTJS.capitalize(value === null ? TYPES.NULL : typeof value),
      );
    }

    // if (BaseTJS.isClass(value)) return STRICT_TYPES.get('Class');

    // if (BaseTJS.isPromise(value)) return STRICT_TYPES.get('Promise');
    // if (BaseTJS.isObjJSON(value)) return STRICT_TYPES.get('JSON');
    // if (BaseTJS.isObjMath(value)) return STRICT_TYPES.get('Math');

    const strictType = STRICT_TYPES.get(Object.getPrototypeOf(value).constructor.name);

    if (!strictType) return STRICT_TYPES.get(Object.getPrototypeOf({}).constructor.name);

    return strictType;
  }
}
