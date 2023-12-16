import { BaseTJS } from './BaseTJS';
import { TNumber } from './TNumber';

export class TypedJS extends BaseTJS {
  #strict;

  constructor({ strict } = { strict: false }) {
    super({ strict });

    this.#strict = strict;
  }

  TNumber(value, options = {}) {
    return TNumber(value, { strict: this.#strict, ...options });
  }
}

// const {} = new TypedJS({ strict: true });
