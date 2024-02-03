import { TArraySchema } from '../../TArray/TArraySchema/index.js';
import { BaseTJS } from '../../BaseTJS/index.js';

export class TFunctionSchema {
  // FIXME
  #argsSchema;
  #returnValueSchema;
  constructor(argsSchema, returnValueSchema) {
    if (!(argsSchema instanceof TArraySchema)) {
      throw TypeError(
        `${BaseTJS.errorPrefix}schema for function arguments should be instance of TArraySchema!`,
      );
    }
  }
}
