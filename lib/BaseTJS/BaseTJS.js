import { STRICT_TYPES, TYPEDJS_TYPES, TYPES } from "../constants";

export class BaseTJS {
  static errorPrefix = 'TypedJS: ';

  static isPrimitive(value) {
    return (
      value === null || (typeof value !== TYPES.OBJECT && typeof value !== TYPES.FUNCTION)
    );
  }

  static isNil(value) {
    return value === null || value === undefined;
  }

  static isSimpleObject(value) {
    return value !== null && typeof value === TYPES.OBJECT && !Array.isArray(value);
  }

  static isMap(obj) {
    return obj instanceof Map || obj?.constructor?.name === TYPES.MAP;
  }

  static isWeakMap(obj) {
    return obj instanceof WeakMap;
  }

  static isSet(obj) {
    return obj instanceof Set;
  }

  static isWeakSet(obj) {
    return obj instanceof WeakSet;
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

  static isObjJSON(obj) {
    return (
      typeof obj === TYPES.OBJECT && obj !== null && obj.toString() === '[object JSON]'
    );
  }

  static isObjMath(obj) {
    return (
      typeof obj === TYPES.OBJECT && obj !== null && obj.toString() === '[object Math]'
    );
  }

  static isPromise(obj) {
    return (
      typeof obj === TYPES.OBJECT && obj !== null && obj.toString() === '[object Promise]'
    );
  }

  static getTypeErrorMessage(value, type) {
    if (BaseTJS.isPrimitive(value)) {
      const startMessage = typeof value === TYPES.STRING ? `"${value}"` : String(value);
      return BaseTJS.buildTypeErrorMessage(startMessage, type);
    }

    return BaseTJS.buildTypeErrorMessage(BaseTJS.capitalize(BaseTJS.typeOf(value)), type);
  }

  static buildTypeErrorMessage(valueType, type) {
    const base = ' is not a ';
    return `${BaseTJS.errorPrefix}${valueType}${base}${type}`;
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

    // const instanceOfStrategy = {
    //   [TYPEDJS_TYPES.ENUM]
    // };

    // if (BaseTJS.isClass(value)) return STRICT_TYPES.get('Class');

    // if (BaseTJS.isPromise(value)) return STRICT_TYPES.get('Promise');
    // if (BaseTJS.isObjJSON(value)) return STRICT_TYPES.get('JSON');
    // if (BaseTJS.isObjMath(value)) return STRICT_TYPES.get('Math');

    const strictType = STRICT_TYPES.get(Object.getPrototypeOf(value).constructor.name);

    if (!strictType) return STRICT_TYPES.get(Object.getPrototypeOf({}).constructor.name);

    return strictType;
  }
}
