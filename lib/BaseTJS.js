export class BaseTJS {
  // eslint-disable-next-line no-unused-private-class-members
  #strict;

  constructor({ strict } = { strict: false }) {
    this.#strict = strict;
  }

  // static isString(value) {
  //   return typeof value === 'string';
  // }

  static isNumber(value) {
    return typeof value === 'number' && isFinite(value);
  }

  static isPrimitive(value) {
    return (
      value === null ||
      (typeof value !== 'object' && typeof value !== 'function')
    );
  }

  static isMap(obj) {
    return obj instanceof Map || obj?.constructor?.name === 'Map';
  }

  static getTypeErrorMessage(value, type) {
    if (BaseTJS.isPrimitive(value)) return `${BaseTJS.capitalize((typeof value).toString())} is not a ${type}`;

    if (Array.isArray(value)) {
      return `Array is not a ${type}`;
    }

    if (BaseTJS.isMap(value)) {}

    return `${BaseTJS.capitalize(typeof value)} is not a ${type}`;
  }

  static checkType(value, type) {
    if (typeof value === type) return;

    throw new TypeError(BaseTJS.getTypeErrorMessage(value, type));
  }

  static capitalize(str) {
    if (typeof str !== 'string' || str.length === 0) {
      // FIXME
      return str;
    }

    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}
