import { TYPES } from '../constants';

export const isBigInt = (value) => typeof value === TYPES.BIG_INT;

export const isPositive = (value) => typeof value === TYPES.BIG_INT && value > 0n;

export const isNegative = (value) => typeof value === TYPES.BIG_INT && value < 0n;
