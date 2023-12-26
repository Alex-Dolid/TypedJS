import type { Options } from '../types';

export declare class TNumber extends Number {
  static cache: Map<number, this>;

  constructor(value: unknown, options?: Partial<Options>);

  static Number(value: unknown, options?: Partial<Options>): number;

  static isNumber(value: unknown): value is number;
  static isPositive(value: number): boolean;
  static isNegative(value: number): boolean;
  static isFloat(value: number): boolean;
}
