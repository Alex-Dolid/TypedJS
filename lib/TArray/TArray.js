import { BaseTJS } from '../BaseTJS';
import { STRICT_TYPES, TYPES } from '../constants';
import { TArraySchema } from './TArraySchema/index.js';

export class TArray extends Array {
  constructor(
    value,
    { strict = false, schema = null } = { strict: false, schema: null },
  ) {
    const array = TArray.Array(value, { strict, schema });
    super(array);
    return array;
  }

  static Array(
    value,
    { strict = false, schema = null } = { strict: false, schema: null },
  ) {
    const coercedValue = !strict ? new Array(value) : value;

    if (!Array.isArray(coercedValue)) {
      throw new TypeError(BaseTJS.getTypeErrorMessage(coercedValue, STRICT_TYPES.ARRAY));
    }
    if (schema && !TArray.isSchemaMatch(coercedValue, schema)) {
      throw new TypeError(`${BaseTJS.errorPrefix}Array Schema mismatch!`);
    }

    return coercedValue;
  }

  static isSchemaMatch(array, schema) {
    if (!Array.isArray(array)) return false;
    if (!(schema instanceof TArraySchema)) return false;

    const TypeConstructor = schema.schema;
    const strict = schema.strict;
    const required = schema.required;

    for (let i = 0; i <= array.length - 1; i++) {
      const isRequired = required.has(i) || required.has(Infinity);
      if (isRequired && typeof array[i] === TYPES.UNDEFINED) return false;
      if (typeof array[i] !== TYPES.UNDEFINED) new TypeConstructor(array[i], { strict });
    }

    return true;
  }
}

// Examples
// const n1 = new TArray(100);
// const n2 = new TArray(100);
// console.log(n1, n2);
// console.log(n1 == n2); // false
// console.log(n1 === n2); // false
// console.log(TArray.Array('101'));
// console.log(
//   new TArray([100, 20], {
//     strict: true,
//     schema: new TArraySchema('number', { strict: true, required: [0, 1] }),
//   }),
// );
