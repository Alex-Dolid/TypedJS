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
        const objValue = obj[key];

        const strategy = new TStrategy(typeof valuesType);
        const TypeConstructor = strategy(valuesType);
        TValidator.validate(objValue, TypeConstructor, { strict });
      }
    }

    // TODO: continue here -> add proxymify to TRecord
    return this.#proxymify(obj);
  }
}
