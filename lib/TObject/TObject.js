import { BaseTJS } from '../BaseTJS';
import { TYPES } from '../constants';
import { TInterface } from './TInterface';

export class TObject extends Object {
  constructor(value, { strict, tInterface } = { strict: false, tInterface: null }) {
    const object = TObject.Object(value, { strict, tInterface });
    super(object);
    return object;
  }

  static Object(value, { strict, tInterface } = { strict: false, tInterface: null }) {
    const coercedValue = !strict ? new Object(value) : value;

    if (typeof coercedValue !== TYPES.OBJECT) {
      throw new TypeError(BaseTJS.getTypeErrorMessage(coercedValue, TYPES.OBJECT));
    }
    if (tInterface && tInterface instanceof TInterface) tInterface.matchOf(coercedValue);

    return this.#proxymify(coercedValue, tInterface);
  }

  static #proxymify(obj, tInterface) {
    if (!tInterface) return obj;
    return new Proxy(obj, {
      set(target, prop, value, receiver) {
        tInterface.matchOfProp(prop, value);
        return Reflect.set(target, prop, value, receiver);
      },
      deleteProperty(target, prop) {
        if (tInterface.required.has(prop)) {
          throw new TypeError(
            `${BaseTJS.errorPrefix}Property "${prop}" is required and cannot be deleted!`,
          );
        }
        return Reflect.deleteProperty(target, prop);
      },
    });
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
//       schema: new TInterface({ a: 'number', b: 'string' }, { strict: true }),
//     },
//   ),
// );
