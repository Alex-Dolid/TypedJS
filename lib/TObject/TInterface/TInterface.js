import { TYPES } from '../../constants.js';
import { TEnum } from '../../TEnum/index.js';
import { TSchema } from './TSchema';

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
    this.#strict = strict;
    this.#schema = TSchema.build(schema);
    this.#additionalProperties = additionalProperties;
    if (typeof required !== TYPES.BOOLEAN) {
      this.#required = new Set([...(required ?? [])]);
    } else {
      this.#required = new Set([...this.#schema.keys()]);
    }

    Object.freeze(this);
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

  matchOf(object) {
    return TInterface.matchOf(object, this);
  }

  static matchOf(object, tInterface) {
    if (typeof object !== TYPES.OBJECT) return false;
    if (!(tInterface instanceof TInterface)) return false;

    const objKeys = new Set();
    for (const objKey in object) {
      const TypeConstructor = tInterface.schema.get(objKey);
      const value = object[objKey];
      const isDefined = typeof value !== TYPES.UNDEFINED;
      if (!tInterface.additionalProperties && !TypeConstructor) return false;
      if (tInterface.required.has(objKey) && !isDefined) return false;
      if (isDefined) {
        if (TypeConstructor instanceof TEnum) TypeConstructor.validate(value);
        else if (TypeConstructor instanceof TInterface && !TypeConstructor.matchOf(value)) return false;
        else new TypeConstructor(value, { strict: tInterface.strict });
      }
      objKeys.add(objKey);
    }

    for (const objSchemaKey of tInterface.schema.keys()) {
      if (tInterface.required.has(objSchemaKey) && !objKeys.has(objSchemaKey)) {
        return false;
      }
    }

    return true;
  }
}
