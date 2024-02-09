import { BaseTJS } from '../../../BaseTJS/index.js';
import { TYPE_CONSTRUCTORS, TYPES } from '../../../constants.js';
import { TEnum } from '../../../TEnum/index.js';
import { TInterface } from '../TInterface.js';

export class TSchema {
  #strategy = {
    [TYPES.STRING]: (type) => {
      const TypeConstructor = TYPE_CONSTRUCTORS.get(type);

      if (!TypeConstructor) {
        throw TypeError(
          `${BaseTJS.errorPrefix}Type Constructor by this type: ${type} has not been supported yet!`,
        );
      }

      return TypeConstructor;
    },
    [TYPES.FUNCTION]: (type) => type,
    [TYPES.OBJECT]: (type) => {
      if (!(type instanceof TEnum || type instanceof TInterface)) {
        throw new TypeError(`${BaseTJS.errorPrefix}TypeConstructor has not been supported yet!`);
      }
    },
  };

  static build(schema) {
    if (!BaseTJS.isSimpleObject(schema)) {
      throw new TypeError(BaseTJS.getTypeErrorMessage(schema, TYPES.OBJECT));
    }

    const validSchema = new Map();
    for (const schemaKey in schema) {
      const type = typeof schema[schemaKey];
      const strategy = this.#strategy[type];
      if (!strategy) {
        throw TypeError(
          `${BaseTJS.errorPrefix}Type by this schema key: ${schemaKey} has not been supported yet!`,
        );
      }

      const TypeConstructor = strategy(schema[schemaKey]);
      validSchema.set(schemaKey, TypeConstructor);
    }

    return validSchema;
  }
}
