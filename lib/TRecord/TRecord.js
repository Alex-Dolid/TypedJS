import { TObject } from '../TObject';
import { TStrategy } from '../TStrategy';
import { TValidator } from '../TValidator';

export class TRecord extends TObject {
  constructor(value, valuesType, { strict = false } = { strict: false }) {
    const record = TRecord.Record(value, valuesType, { strict });
    super(record);
    return record;
  }

  static Record(value, valuesType, { strict = false } = { strict: false }) {
    const obj = super.Object(value, { strict });

    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        TRecord.validate(key, obj[key], valuesType, { strict });
      }
    }

    return this.#proxymify(obj, valuesType, { strict });
  }

  static validate(key, value, valuesType, { strict = false } = { strict: false }) {
    const strategy = new TStrategy(typeof valuesType);
    const TypeConstructor = strategy(valuesType);
    TValidator.validate(value, TypeConstructor, { strict });
  }

  #proxymify(obj, valuesType, { strict = false } = { strict: false }) {
    return new Proxy(obj, {
      set(target, key, value) {
        TRecord.validate(key, value, valuesType, { strict });
        return Reflect.set(target, key, value);
      },
    });
  }
}
