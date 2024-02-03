import { TTupleSchema } from '../../TTuple/TTupleSchema/index.js';
import { TArraySchema } from '../../TArray/TArraySchema/index.js';

export class TExtArraySchema {
  #tupleSchema = null;
  #arraySchema = null;
  constructor(
    tupleSchema,
    schemaForOtherItems,
    { strict = false, required = true } = {
      strict: false,
      required: true,
    },
  ) {
    this.#tupleSchema = new TTupleSchema(tupleSchema, { strict, required });
    this.#arraySchema = new TArraySchema(schemaForOtherItems, { strict, required });
  }

  get tupleSchema() {
    return this.#tupleSchema;
  }
  get arraySchema() {
    return this.#arraySchema;
  }
}
