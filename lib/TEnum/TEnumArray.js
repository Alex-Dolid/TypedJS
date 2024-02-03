import { BaseTJS } from '../BaseTJS';

export class TEnumArray {
  #value = new Map();

  constructor(array, { inverted } = { inverted: false }) {
    if (!Array.isArray(array)) {
      throw new TypeError(`${BaseTJS.errorPrefix}The first argument must be an array`);
    }

    for (const item of array) {
      if (item) {
        this.#value.set(item, array.indexOf(item));
        this[item] = array.indexOf(item);
      }
      if (inverted && item) {
        this.#value.set(array.indexOf(item), item);
        this[array.indexOf(item)] = item;
      }
    }

    Object.freeze(this);
  }

  get collection() {
    return new Map(this.#value);
  }

  has(value) {
    return this.#value.has(value);
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
