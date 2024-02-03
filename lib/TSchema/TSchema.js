import { BaseTJS } from '../BaseTJS';
import { TYPE_CONSTRUCTORS, TYPES } from '../constants.js';

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
  };

  static build(schema) {
    if (!BaseTJS.isSimpleObject(schema)) {
      throw new TypeError(BaseTJS.getTypeErrorMessage(schema, TYPES.OBJECT));
    }

    const validSchema = new Map();
    for (const schemaKey in schema) {
      if (typeof schema[schemaKey] === TYPES.STRING) {
        const TypeConstructor = TYPE_CONSTRUCTORS.get(schema[schemaKey]);

        if (!TypeConstructor) {
          throw TypeError(
            `${BaseTJS.errorPrefix}Type Constructor by this schema key: ${schemaKey} has not been supported yet!`,
          );
        }

        validSchema.set(schemaKey, TypeConstructor);
      } else {
        validSchema.set(schemaKey, schema[schemaKey]);
      }
    }

    return validSchema;
  }
}
