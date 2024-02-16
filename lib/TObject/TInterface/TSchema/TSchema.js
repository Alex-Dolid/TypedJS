import { BaseTJS } from '../../../BaseTJS/index.js';
import { TYPES } from '../../../constants.js';
import { TStrategy } from '../../../TStrategy';

export class TSchema {
  static build(schema) {
    if (!BaseTJS.isSimpleObject(schema)) {
      throw new TypeError(BaseTJS.getTypeErrorMessage(schema, TYPES.OBJECT));
    }

    const validSchema = new Map();
    for (const schemaKey in schema) {
      const strategy = new TStrategy(typeof schema[schemaKey]);
      const TypeConstructor = strategy(schema[schemaKey]);
      validSchema.set(schemaKey, TypeConstructor);
    }

    return validSchema;
  }
}
