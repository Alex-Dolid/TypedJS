export class TStrategy {
  // TODO continue from here
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
    [TYPES.OBJECT]: (type) => {
      if (!(type instanceof TEnum || type instanceof TInterface)) {
        throw new TypeError(`${BaseTJS.errorPrefix}TypeConstructor has not been supported yet!`);
      }
    },
  };
  constructor(type) {
    return this.#strategy[typeof type](type);
  }

  [TYPES.STRING](type) {
    const TypeConstructor = TYPE_CONSTRUCTORS.get(type);

    if (!TypeConstructor) {
      throw TypeError(
        `${BaseTJS.errorPrefix}Type Constructor by this type: ${type} has not been supported yet!`,
      );
    }

    return TypeConstructor;
  }
}
