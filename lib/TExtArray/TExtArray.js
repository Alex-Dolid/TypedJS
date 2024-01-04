import { BaseTJS } from '../BaseTJS';
import { TYPES } from '../constants';
import { TExtArraySchema } from '../TExtArraySchema/index.js';
import { TArray } from '../TArray/index.js';
import { TTuple } from '../TTuple/index.js';

export class TExtArray extends Array {
  constructor(
    value,
    { strict = false, schema = null } = { strict: false, schema: null },
  ) {
    const array = TExtArray.Array(value, { strict, schema });
    super(array);
    return array;
  }

  static Array(
    value,
    { strict = false, schema = null } = { strict: false, schema: null },
  ) {
    const coercedValue = !strict ? new Array(value) : value;

    if (!Array.isArray(coercedValue)) {
      throw new TypeError(BaseTJS.getTypeErrorMessage(coercedValue, TYPES.ARRAY));
    }
    if (schema && !TExtArray.isSchemaMatch(coercedValue, schema)) {
      throw new TypeError(`${BaseTJS.errorPrefix}ExtArray Schema mismatch!`);
    }

    return coercedValue;
  }

  static isSchemaMatch(array, schema) {
    if (!Array.isArray(array)) return false;
    if (!(schema instanceof TExtArraySchema)) return false;

    const tupleSchema = schema.tupleSchema;
    const arraySchema = schema.arraySchema;

    const isTupleSchemaMatch = TTuple.isSchemaMatch(
      array.slice(0, tupleSchema.length),
      tupleSchema,
    );
    const isArraySchemaMatch = TArray.isSchemaMatch(
      array.slice(tupleSchema.length),
      arraySchema,
    );

    return isTupleSchemaMatch && isArraySchemaMatch;
  }
}

// Examples
// const n1 = new TExtendableArray(100);
// const n2 = new TExtendableArray(100);
// console.log(n1, n2);
// console.log(n1 == n2); // false
// console.log(n1 === n2); // false
// console.log(TExtendableArray.Array('101'));
// console.log(
//   new TExtendableArray([100, '20', 120, 200], {
//     strict: true,
//     schema: new TExtendableArray(['number', 'string'], 'number', { strict: true, required: true }),
//   }),
// );
