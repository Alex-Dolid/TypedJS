import { BaseTJS } from '../BaseTJS';
import { TYPES } from '../constants.js';

export class TEnumCollection {
  #value = new Map();

  constructor(collection, { inverted } = { inverted: false }) {
    if (typeof collection !== TYPES.OBJECT) {
      throw new TypeError(`${BaseTJS.errorPrefix}The first argument must be an object`);
    }

    for (const key in collection) {
      if (collection[key]) {
        this.#value.set(key, collection[key]);
        this[key] = collection[key];
      }
      if (inverted && collection[key]) {
        this.#value.set(collection[key], key);
        this[collection[key]] = key;
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
