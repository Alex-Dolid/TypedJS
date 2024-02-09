import { BaseTJS } from '../BaseTJS';
import { TYPES, TYPEDJS_TYPES, TYPE_CONSTRUCTORS } from '../constants';
import { TObject } from '../TObject/index.js';

export class TRecord extends TObject {
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
    [TYPES.OBJECT]: (type) => type,
  };

  constructor(value, valuesType, { strict = false } = { strict: false }) {
    const record = TRecord.Record(value, valuesType, { strict });
    super(record);
    return record;
  }

  static Record(value, valuesType, { strict = false } = { strict: false }) {
    const obj = super.Object(value, { strict });

    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const value = obj[key];

        const strategy = this.#strategy[typeof valuesType];
        if (!strategy) {
          throw TypeError(
            `${BaseTJS.errorPrefix}Type: ${valuesType} has not been supported yet!`,
          );
        }

        const TypeConstructor = strategy(valuesType);
        if () // TODO continue from here

        if (typeof value !== valuesType) {
          throw new TypeError(BaseTJS.getTypeErrorMessage(value, valuesType));
        }
      }
    }

    return this.#proxymify(obj);
  }
}
