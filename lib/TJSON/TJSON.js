import { TObjectSchema } from '../TObject/TObjSchema/index.js';
import { TArraySchema } from '../TArray/TArraySchema/index.js';
import { TTupleSchema } from '../TTuple/TTupleSchema/index.js';
import { TExtArraySchema } from '../TExtArray/TExtArraySchema/index.js';
import { BaseTJS } from '../BaseTJS/index.js';

// FIXME
export class TJSON {
  #JSON = JSON;
  #schema = null;

  constructor(schema) {
    if (TJSON.isSchemaValid(schema)) {
      throw TypeError(`${BaseTJS.errorPrefix}Invalid Schema instance!`);
    }
    this.#schema = schema;
  }

  static stringify(value, replacer, space) {
    return this.#JSON.stringify(value, replacer, space);
  }

  static parse(text, reviver) {
    return this.#JSON.parse(text, reviver);
  }

  static isSchemaValid(schema) {
    return (
      schema instanceof TObjectSchema ||
      schema instanceof TArraySchema ||
      schema instanceof TTupleSchema ||
      schema instanceof TExtArraySchema
    );
  }
}

// console.log(new TJSON('alex'));
