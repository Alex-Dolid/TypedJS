import { BaseTJS } from '../BaseTJS';
import { TYPES } from '../constants';
import { TUndefined } from '../TUndefined';
import { TNull } from '../TNull';
import { TNumber } from '../TNumber';
import { TString } from '../TString';
import { TBoolean } from '../TBoolean';
import { TBigInt } from '../TBigInt';
import { TSymbol } from '../TSymbol';

export class TObjSchema {
  #schema = new Map();
  #strict = false;
  #additionalProperties = false;
  #required = new Set();

  static typeConstructors = new Map([
    [TYPES.UNDEFINED, TUndefined],
    [TYPES.NULL, TNull],
    [TYPES.NUMBER, TNumber],
    [TYPES.STRING, TString],
    [TYPES.BOOLEAN, TBoolean],
    [TYPES.BIG_INT, TBigInt],
    [TYPES.SYMBOL, TSymbol],
  ]);

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
        const TypeConstructor = TObjSchema.typeConstructors.get(schema[schemaKey]);

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
    if (typeof required !== TYPES.BOOLEAN) this.#required = new Set([...required]);
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
