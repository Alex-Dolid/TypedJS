import { BaseTJS } from '../BaseTJS';
import { TYPES } from '../constants.js';

export class TEnumCollection {
  #collection = new Map();

  constructor(collection, { inverted = false } = { inverted: false }) {
    if (typeof collection !== TYPES.OBJECT) {
      throw new TypeError(
        `${BaseTJS.errorPrefix}The first argument must be an ${TYPES.OBJECT}`,
      );
    }

    this.#init(collection, { inverted });
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

  #init(collection, { inverted }) {
    for (const key in collection) {
      if (collection[key]) {
        this.#collection.set(key, collection[key]);
        this[key] = collection[key];
      }
      if (inverted && collection[key]) {
        this.#collection.set(collection[key], key);
        this[collection[key]] = key;
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
