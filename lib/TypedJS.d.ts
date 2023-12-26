import type { BaseTJS } from './BaseTJS';
import type { Options } from './types';

export declare class TypedJS implements BaseTJS {
  private strict: boolean;

  constructor(options?: Options);

  TNumber(value: unknown, options?: Options): number;
}
