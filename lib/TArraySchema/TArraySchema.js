import { BaseTJS } from '../BaseTJS';
import { TYPE_CONSTRUCTORS, TYPES } from '../constants';

export class TArraySchema {
  #schema = null;
  #strict = false;
  #required = new Set();

  constructor(
    schema,
    { strict = false, required = true } = {
      strict: false,
      required: true,
    },
  ) {
    if (Array.isArray(schema)) {
      // TODO
      throw TypeError(
        `${BaseTJS.errorPrefix}Schema should be string or Type Constructor!`,
      );
    }

    if (typeof schema === TYPES.STRING) {
      const TypeConstructor = TYPE_CONSTRUCTORS.get(schema);

      if (!TypeConstructor) {
        throw TypeError(
          `${BaseTJS.errorPrefix}Type Constructor hasn't been supported yet!`,
        );
      }

      this.#schema = TypeConstructor;
    } else {
      this.#schema = schema;
    }

    this.#strict = strict;
    if (typeof required !== TYPES.BOOLEAN) {
      this.#required = new Set([...required]);
    } else if (typeof required === TYPES.BOOLEAN && required) {
      this.#required.add(Infinity);
    }
  }

  get schema() {
    return this.#schema;
  }
  get strict() {
    return this.#strict;
  }
  get required() {
    return this.#required;
  }
}
