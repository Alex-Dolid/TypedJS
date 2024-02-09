import { TYPES } from '../../constants.js';
import { TEnum } from '../../TEnum/index.js';
import { TSchema } from './TSchema';
import { BaseTJS } from '../../BaseTJS';

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

  matchOfProp(key, value) {
    return TInterface.matchOfProp(key, value, this);
  }

  static matchOf(object, tInterface) {
    if (typeof object !== TYPES.OBJECT) {
      throw new TypeError(
        `${BaseTJS.errorPrefix}The first argument must be an ${TYPES.OBJECT}!`,
      );
    }
    if (!(tInterface instanceof TInterface)) {
      throw new TypeError(
        `${BaseTJS.errorPrefix}The second argument must be an instance of TInterface!`,
      );
    }

    const objKeys = new Set();
    for (const objKey in object) {
      const TypeConstructor = tInterface.schema.get(objKey);
      const value = object[objKey];
      const isDefined = typeof value !== TYPES.UNDEFINED;

      if (!tInterface.additionalProperties && !TypeConstructor) {
        throw new TypeError(
          `${BaseTJS.errorPrefix}Property: ${objKey} is not defined in the interface!`,
        );
      }
      if (tInterface.required.has(objKey) && !isDefined) {
        throw new TypeError(`${BaseTJS.errorPrefix}Property: ${objKey} is required!`);
      }

      if (isDefined) {
        if (TypeConstructor instanceof TEnum || TypeConstructor instanceof TInterface) TypeConstructor.matchOf(value);
        else new TypeConstructor(value, { strict: tInterface.strict });
      }
      objKeys.add(objKey);
    }

    for (const objSchemaKey of tInterface.schema.keys()) {
      if (tInterface.required.has(objSchemaKey) && !objKeys.has(objSchemaKey)) {
        throw new TypeError(
          `${BaseTJS.errorPrefix}Property: ${objSchemaKey} is required!`,
        );
      }
    }
  }

  static matchOfProp(key, value, tInterface) {
    if (typeof key !== TYPES.STRING) {
      throw new TypeError(`${BaseTJS.errorPrefix}The key must be a ${TYPES.STRING}!`);
    }
    if (!(tInterface instanceof TInterface)) {
      throw new TypeError(
        `${BaseTJS.errorPrefix}The tInterface must be an instance of TInterface!`,
      );
    }

    const TypeConstructor = tInterface.schema.get(key);
    if (!TypeConstructor) {
      if (tInterface.additionalProperties) return;
      throw new TypeError(
        `${BaseTJS.errorPrefix}Property: ${key} is not defined in the interface!`,
      );
    }

    if (TypeConstructor instanceof TEnum || TypeConstructor instanceof TInterface) TypeConstructor.matchOf(value);
    else new TypeConstructor(value, { strict: tInterface.strict });
  }
}
