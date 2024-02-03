import { BaseTJS } from '../BaseTJS';
import { STRICT_TYPES, TYPE_CONSTRUCTORS, TYPES } from '../constants';

export class TTupleSchema {
  #schema = [];
  #strict = false;
  #required = new Set();

  constructor(
    schema,
    { strict = false, required = true } = {
      strict: false,
      required: true,
    },
  ) {
    if (!Array.isArray(schema)) {
      throw new TypeError(BaseTJS.getTypeErrorMessage(schema, STRICT_TYPES.ARRAY));
    }

    for (let i = 0; i <= schema.length - 1; i++) {
      const schemaElement = schema[i];
      if (typeof schemaElement === TYPES.STRING) {
        const TypeConstructor = TYPE_CONSTRUCTORS.get(schemaElement);

        if (!TypeConstructor) {
          throw TypeError(
            `${BaseTJS.errorPrefix}Type Constructor by this schema index: ${i} hasn't been supported yet!`,
          );
        }

        this.#schema.push(TypeConstructor);
      } else {
        this.#schema.push(schema[i]);
      }

      if (typeof required === TYPES.BOOLEAN && required) this.#required.add(i);
    }

    this.#strict = strict;
    if (typeof required !== TYPES.BOOLEAN) {
      this.#required = new Set([...required]);
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
