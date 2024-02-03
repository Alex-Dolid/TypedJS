import { BaseTJS } from '../BaseTJS';
import { TYPES, TYPE_CONSTRUCTORS } from '../constants';

export class TInterface {
  #schema = new Map();
  #strict = false;
  #additionalProperties = false;
  #required = new Set();

  constructor(
    schema,
    { strict = false, additionalProperties = false, required = true } = {
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

  static matchOf(object, tInterface) {
    if (typeof object !== TYPES.OBJECT) return false;
    if (!(tInterface instanceof TInterface)) return false;

    const objKeys = new Set();
    for (const objKey in object) {
      const TypeConstructor = tInterface.schema.get(objKey);
      const isDefined = typeof object[objKey] !== TYPES.UNDEFINED;
      if (!tInterface.additionalProperties && !TypeConstructor) return false;
      if (tInterface.required.has(objKey) && !isDefined) return false;
      if (isDefined) new TypeConstructor(object[objKey], { strict: tInterface.strict });
      objKeys.add(objKey);
    }

    for (const objSchemaKey of tInterface.schema.keys()) {
      if (tInterface.required.has(objSchemaKey) && !objKeys.has(objSchemaKey)) {
        return false;
      }
    }

    return true;
  }

  matchOf(object) {
    return TInterface.matchOf(object, this);
  }
}
