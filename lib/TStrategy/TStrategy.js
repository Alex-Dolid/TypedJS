import { BaseTJS } from '../BaseTJS/index.js';
import { TYPE_CONSTRUCTORS } from '../constants.js';
import { TEnum } from '../TEnum';
import { TInterface } from '../TObject/TInterface';

export class TStrategy {
  constructor(type) {
    const strategy = TStrategy[type];
    if (!strategy) {
      throw TypeError(
        `${BaseTJS.errorPrefix}TypeStrategy: ${type} has not been supported yet!`,
      );
    }
  }

  static string(type) {
    const TypeConstructor = TYPE_CONSTRUCTORS.get(type);

    if (!TypeConstructor) {
      throw TypeError(
        `${BaseTJS.errorPrefix}Type Constructor by this type: ${type} has not been supported yet!`,
      );
    }

    return TypeConstructor;
  }

  static function(type) {
    return type;
  }

  static object(type) {
    if (!(type instanceof TEnum || type instanceof TInterface)) {
      throw new TypeError(
        `${BaseTJS.errorPrefix}TypeConstructor has not been supported yet!`,
      );
    }

    return type;
  }
}
