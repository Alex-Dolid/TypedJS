import { TTupleSchema } from '../TTupleSchema/index.js';
import { TArraySchema } from '../TArraySchema/index.js';

export class TExtendableArraySchema {
  #tupleSchema = null;
  #schema = null;
  constructor(
    tupleSchema,
    schemaForOtherItems,
    { strict = false, required = true } = {
      strict: false,
      required: true,
    },
  ) {
    this.#tupleSchema = new TTupleSchema(tupleSchema, { strict, required });
    this.#schema = new TArraySchema(schemaForOtherItems, { strict, required });
  }

  get tupleSchema() {
    return this.#tupleSchema;
  }
  get schema() {
    return this.#schema;
  }
}
