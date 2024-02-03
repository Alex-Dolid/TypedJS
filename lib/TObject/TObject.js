import { BaseTJS } from '../BaseTJS';
import { TYPES } from '../constants';
import { TObjectSchema } from './TObjSchema/index.js';

export class TObject extends Object {
  constructor(value, { strict, schema } = { strict: false, schema: null }) {
    const object = TObject.Object(value, { strict, schema });
    super(object);
    return object;
  }

  static Object(value, { strict, schema } = { strict: false, schema: null }) {
    const coercedValue = !strict ? new Object(value) : value;

    if (typeof coercedValue !== TYPES.OBJECT) {
      throw new TypeError(BaseTJS.getTypeErrorMessage(coercedValue, TYPES.OBJECT));
    }
    if (schema && !TObject.isSchemaMatch(coercedValue, schema)) {
      throw new TypeError(`${BaseTJS.errorPrefix}Object Schema mismatch!`);
    }

    return coercedValue;
  }

  static isSchemaMatch(object, schema) {
    if (typeof object !== TYPES.OBJECT) return false;
    if (!(schema instanceof TObjectSchema)) return false;

    const objSchema = schema.schema;
    const strict = schema.strict;
    const additionalProperties = schema.additionalProperties;
    const required = schema.required;
    const objKeys = new Set();

    for (const objKey in object) {
      const TypeConstructor = objSchema.get(objKey);
      const isDefined = typeof object[objKey] !== TYPES.UNDEFINED;
      if (!additionalProperties && !TypeConstructor) return false;
      if (required.has(objKey) && !isDefined) return false;
      if (isDefined) new TypeConstructor(object[objKey], { strict });
      objKeys.add(objKey);
    }

    for (const objSchemaKey of objSchema.keys()) {
      if (required.has(objSchemaKey) && !objKeys.has(objSchemaKey)) {
        return false;
      }
    }

    return true;
  }
}

// Examples
// const n1 = new TObject(100);
// const n2 = new TObject(100);
// console.log(n1, n2);
// console.log(n1 == n2); // false
// console.log(n1 === n2); // false
// console.log(TObject.Object('101'));
// console.log(
//   new TObject(
//     { a: 1, b: 's' },
//     {
//       strict: true,
//       schema: new TObjSchema({ a: 'number', b: 'string' }, { strict: true }),
//     },
//   ),
// );
