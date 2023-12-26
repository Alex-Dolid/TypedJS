import type { Options } from '../types';

export declare class BaseTJS {
  constructor(value: unknown);

  static isPrimitive(
    value: unknown,
  ): value is number | string | undefined | null | symbol | bigint;
  static isNil(value: unknown): value is null | undefined;

  static getTypeErrorMessage(value: unknown, type: string): string; // TODO to finalize 'type' arg
  static buildTypeErrorMessage(valueType: string, type: string): string;
  static capitalize<T extends string>(str: T): Capitalize<T>;
  static typeOf(value: unknown, options?: Options): string; // TODO to finalize return type
}
