import { TYPES } from '../constants';

export class TValidator {
  #value = null;
  #TypeConstructor = null;
  #strict = null;

  constructor(value, TypeConstructor, { strict = false } = { strict: false }) {
    this.#value = value;
    this.#TypeConstructor = TypeConstructor;
    this.#strict = strict;
    Object.freeze(this);
  }

  static validate(value, TypeConstructor, { strict = false } = { strict: false }) {
    if (typeof TypeConstructor === TYPES.OBJECT) TypeConstructor.matchOf(value);
    else new TypeConstructor(value, { strict });
  }

  validate() {
    if (typeof this.#TypeConstructor === TYPES.OBJECT) this.#TypeConstructor.matchOf(this.#value);
    else new this.#TypeConstructor(this.#value, { strict: this.#strict });
  }
}
