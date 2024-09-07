import { TYPES } from '../constants.js';

export const isNumber = (value) =>
  typeof value === TYPES.NUMBER && Number.isFinite(value);

export const isPositive = (value) => isNumber(value) && value > 0;

export const isNegative = (value) => isNumber(value) && value < 0;

export const isFloat = (value) => isNumber(value) && !Number.isInteger(value);
