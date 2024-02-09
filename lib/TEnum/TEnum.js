import { BaseTJS } from '../BaseTJS';
import { TYPEDJS_TYPES, TYPES } from '../constants';
import { TEnumArray } from './TEnumArray.js';
import { TEnumCollection } from './TEnumCollection.js';

export class TEnum {
  #collection = new Map();
  #strategy = {
    [TYPES.ARRAY]: (collection, { inverted }) => new TEnumArray(collection, { inverted }),
    [TYPES.OBJECT]: (collection, { inverted }) =>
      new TEnumCollection(collection, { inverted }),
  };

  constructor(
    value,
    { strict = false, inverted = false } = { strict: false, inverted: false },
  ) {
    const tEnum = TEnum.Enum(value, { strict, inverted });
    this.#collection = tEnum.collection;
    Object.assign(this, tEnum);
    Object.freeze(this);
  }

  get collection() {
    return new Map(this.#collection);
  }
  get keys() {
    return new Set(this.#collection.keys());
  }
  get values() {
    return Array.from(this.#collection.values());
  }

  has(key) {
    return this.#collection.has(key);
  }
  includes(value) {
    return this.values.includes(value);
  }
  matchOf(value) {
    if (!this.includes(value)) {
      throw new TypeError(
        `${
          BaseTJS.errorPrefix
        }Value: ${value} should be one of the following: ${this.values.join(', ')}`,
      );
    }
  }

  static from(value, { inverted } = { inverted: false }) {
    if (typeof value !== TYPES.OBJECT) {
      throw new TypeError(
        `${BaseTJS.errorPrefix}The first argument must be an ${TYPES.OBJECT}`,
      );
    }

    const strategy = this.#strategy[Array.isArray(value) ? TYPES.ARRAY : TYPES.OBJECT];

    if (!strategy) {
      throw TypeError(
        `${BaseTJS.errorPrefix}Value cannot convert to an ${TYPEDJS_TYPES.ENUM}`,
      );
    }

    return strategy(value, { inverted });
  }
  static Enum(
    value,
    { strict = false, inverted = false } = { strict: false, inverted: false },
  ) {
    const coercedValue = !strict ? TEnum.from(value, { inverted }) : value;

    if (
      coercedValue instanceof TEnumArray ||
      coercedValue instanceof TEnumCollection ||
      coercedValue instanceof TEnum
    ) {
      return coercedValue;
    }

    throw new TypeError(BaseTJS.getTypeErrorMessage(coercedValue, TYPEDJS_TYPES.ENUM));
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
