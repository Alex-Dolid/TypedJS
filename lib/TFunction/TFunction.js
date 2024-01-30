import { BaseTJS } from '../BaseTJS';
import { TYPES } from '../constants';
import { TArray } from '../TArray';

// export class TFunction extends Function {
//   constructor(value, { strict, schema } = { strict: false, schema: null }) {
//     const func = TFunction.Function(value, { strict, schema });
//     super(func);
//     return func;
//   }
//
//   static Function(...args) {
//     const { strict, schema} = args[args.length - 1] ?? { strict: false, schema: null };
//     const baseFnArgs = [...args].slice(0, -1);
//     const fn = !strict ? new Function(...baseFnArgs) : baseFnArgs;
//
//     if (typeof fn !== TYPES.FUNCTION) {
//       throw new TypeError(BaseTJS.getTypeErrorMessage(fn, TYPES.FUNCTION));
//     }
//
//     return fn;
//   }
// }

export class TFunction {
  // FIXME return wrap fn with ...args d
  constructor(fn, args = [], schema = null) {
    return TFunction.Function(fn, args, schema);
  }

  static Function(fn, args = [], schema = null) {
    if (typeof fn !== TYPES.FUNCTION) {
      throw new TypeError(BaseTJS.getTypeErrorMessage(fn, TYPES.FUNCTION));
    }

    // FIXME
    // if (!TArray.Array(args, schema)) {
    //   throw new TypeError(`${BaseTJS.errorPrefix}Function Schema mismatch!`);
    // }

    return fn;
  }
}
