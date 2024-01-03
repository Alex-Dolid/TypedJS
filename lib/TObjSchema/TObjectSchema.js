import { BaseTJS } from '../BaseTJS';
import { TYPES, TYPE_CONSTRUCTORS } from '../constants';

export class TObjectSchema {
  #schema = new Map();
  #strict = false;
  #additionalProperties = false;
  #required = new Set();

  constructor(
    schema,
    { strict, additionalProperties, required } = {
      strict: false,
      additionalProperties: false,
      required: true,
    },
  ) {
    if (!BaseTJS.isSimpleObject(schema)) {
      throw new TypeError(BaseTJS.getTypeErrorMessage(schema, TYPES.OBJECT));
    }

    for (const schemaKey in schema) {
      if (typeof schema[schemaKey] === TYPES.STRING) {
        const TypeConstructor = TYPE_CONSTRUCTORS.get(schema[schemaKey]);

        if (!TypeConstructor) {
          throw TypeError(
            `${BaseTJS.errorPrefix}Type Constructor by this schema key: ${schemaKey} has not been supported yet!`,
          );
        }

        this.#schema.set(schemaKey, TypeConstructor);
      } else {
        this.#schema.set(schemaKey, schema[schemaKey]);
      }

      if (typeof required === TYPES.BOOLEAN) this.#required.add(schemaKey);
    }

    this.#strict = strict;
    this.#additionalProperties = additionalProperties;
    if (typeof required !== TYPES.BOOLEAN) {
      this.#required = new Set([...(required ?? [])]);
    }
  }

  get schema() {
    return this.#schema;
  }
  get strict() {
    return this.#strict;
  }
  get additionalProperties() {
    return this.#additionalProperties;
  }
  get required() {
    return this.#required;
  }
}
