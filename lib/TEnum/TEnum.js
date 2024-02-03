import { TYPES } from '../constants';
import { BaseTJS } from '../BaseTJS';
import { TEnumArray } from './TEnumArray.js';
import { TEnumCollection } from './TEnumCollection.js';

export class TEnum {
  #value = new Map();

  constructor(arrayOrCollection, { inverted } = { inverted: false }) {
    const tEnum = TEnum.from(arrayOrCollection, { inverted });
    this.#value = tEnum.collection;
    Object.assign(this, tEnum);
  }

  static from(arrayOrCollection, { inverted } = { inverted: false }) {
    if (!Array.isArray(arrayOrCollection) && typeof arrayOrCollection !== TYPES.OBJECT) {
      throw new TypeError(
        `${BaseTJS.errorPrefix}The first argument must be an array or an object`,
      );
    }

    if (Array.isArray(arrayOrCollection)) {
      return new TEnumArray(arrayOrCollection, { inverted });
    } else {
      return new TEnumCollection(arrayOrCollection, { inverted });
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

