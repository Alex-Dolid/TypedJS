import { BaseTJS } from '../BaseTJS';
import { TYPEDJS_TYPES, TYPES } from '../constants';
import { TEnumArray } from './TEnumArray.js';
import { TEnumCollection } from './TEnumCollection.js';

export class TEnum {
  #value = new Map();

  constructor(
    value,
    { strict = false, inverted = false } = { strict: false, inverted: false },
  ) {
    const tEnum = TEnum.Enum(value, { strict, inverted });
    this.#value = tEnum.collection;
    Object.assign(this, tEnum);
  }

  static Enum(
    value,
    { strict = false, inverted = false } = { strict: false, inverted: false },
  ) {
    const coercedValue = !strict ? TEnum.from(value, { inverted }) : value;

    if (coercedValue instanceof TEnumArray || coercedValue instanceof TEnumCollection) {
      return coercedValue;
    }

    throw new TypeError(BaseTJS.getTypeErrorMessage(coercedValue, TYPEDJS_TYPES.ENUM));
  }

  static from(value, { inverted } = { inverted: false }) {
    if (!Array.isArray(value) && typeof value !== TYPES.OBJECT) {
      throw new TypeError(
        `${BaseTJS.errorPrefix}The first argument must be an array or an object`,
      );
    }

    if (Array.isArray(value)) {
      return new TEnumArray(value, { inverted });
    } else {
      return new TEnumCollection(value, { inverted });
    }
  }

  get collection() {
    return new Map(this.#value);
  }

  has(value) {
    return this.#value.has(value);
  }
}

// Example of usage
// const enumArray = new TEnum(['January', 'February', 'March', undefined, 'May']);
// const enumArray2 = new TEnum(['January', 'February', 'March', undefined, 'May'], {
//   inverted: true,
// });
// const enumCollection = new TEnum({
//   January: 1,
//   February: 2,
//   March: 3,
//   May: 5,
// });
// const enumCollection2 = new TEnum(
//   { 1: 'January', 2: 'February', 3: 'March', 5: 'May' },
//   { inverted: true },
// );
// console.log(enumArray);
// console.log(enumArray2);
// console.log(enumCollection);
// console.log(enumCollection2);
// console.log(enumArray.has('March'));
