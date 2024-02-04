import { BaseTJS } from '../BaseTJS';
import { TYPES } from '../constants.js';

export class TEnumArray {
  #collection = new Map();

  constructor(array, { inverted } = { inverted: false }) {
    if (!Array.isArray(array)) {
      throw new TypeError(
        `${BaseTJS.errorPrefix}The first argument must be an ${TYPES.ARRAY}`,
      );
    }

    this.#init(array, { inverted });
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

  #init(array, { inverted }) {
    for (const item of array) {
      if (item) {
        this.#collection.set(item, array.indexOf(item));
        this[item] = array.indexOf(item);
      }
      if (inverted && item) {
        this.#collection.set(array.indexOf(item), item);
        this[array.indexOf(item)] = item;
      }
    }
  }

  has(key) {
    return this.#collection.has(key);
  }
  includes(value) {
    return this.values.includes(value);
  }
}

// Example of usage
// const enumArray = new TEnumArray(['January', 'February', 'March', undefined, 'May']);
// const enumArray2 = new TEnumArray(['January', 'February', 'March', undefined, 'May'], {
//   inverted: true,
// });
// console.log(enumArray2[2]);
// console.log(enumArray);
// console.log(enumArray2);
// console.log(enumArray2.has('March'));
