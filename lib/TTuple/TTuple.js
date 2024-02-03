import { BaseTJS } from '../BaseTJS';
import { STRICT_TYPES, TYPES } from '../constants';
import { TTupleSchema } from './TTupleSchema/index.js';

export class TTuple extends Array {
  constructor(
    value,
    { strict = false, schema = null } = { strict: false, schema: null },
  ) {
    const tuple = TTuple.Tuple(value, { strict, schema });
    super(tuple);
    return tuple;
  }

  static Tuple(
    value,
    { strict = false, schema = null } = { strict: false, schema: null },
  ) {
    const coercedValue = !strict ? new Array(value) : value;

    if (!Array.isArray(coercedValue)) {
      throw new TypeError(BaseTJS.getTypeErrorMessage(coercedValue, STRICT_TYPES.ARRAY));
    }
    if (schema && !TTuple.isSchemaMatch(coercedValue, schema)) {
      throw new TypeError(`${BaseTJS.errorPrefix}Tuple Schema mismatch!`);
    }

    return coercedValue;
  }

  static isSchemaMatch(tuple, schema) {
    if (!Array.isArray(tuple)) return false;
    if (!(schema instanceof TTupleSchema)) return false;

    const tupleSchema = schema.schema;
    const strict = schema.strict;
    const required = schema.required;

    for (let i = 0; i <= tuple.length - 1; i++) {
      const TypeConstructor = tupleSchema[i];
      if (!TypeConstructor) return false;
      if (required.has(i) && typeof tuple[i] === TYPES.UNDEFINED) return false;
      if (typeof tuple[i] !== TYPES.UNDEFINED) new TypeConstructor(tuple[i], { strict });
    }

    return !(
      tuple.length !== tupleSchema.length &&
      tupleSchema.some((_, i) => i >= tuple.length && required.has(i))
    );
  }
}

// Examples
// const n1 = new TTuple(100);
// const n2 = new TTuple(100);
// console.log(n1, n2);
// console.log(n1 == n2); // false
// console.log(n1 === n2); // false
// console.log(TTuple.Tuple('101'));
// console.log(
//   new TTuple([1, 's'], {
//     strict: true,
//     schema: new TTupleSchema(['number', 'string'], { strict: true, required: [0, 1] }),
//   }),
// );
