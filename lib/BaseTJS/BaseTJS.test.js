import { BaseTJS } from './BaseTJS';
import { globalFixtures } from '../fixtures';
import { fixtures } from './BaseTJS.fixtures';
import { TYPES } from '../constants';

const getItTestCaseName = (i, Type, testCase, returnEndMessage) => {
  const testCaseName =
    BaseTJS.isNil(testCase) ||
    typeof testCase === 'object' ||
    typeof testCase === 'function'
      ? `${Type}`
      : `${Type}-(${testCase.toString()})`;

  return `${i}.[${testCaseName}]: should return ${returnEndMessage}`;
};

const getTestCases = (fixtures, options) => {
  return Object.entries(globalFixtures).flatMap(([TypeName, testCases]) => {
    return testCases.map((testCase, i) => {
      const testCaseName =
        BaseTJS.isNil(testCase) ||
        typeof testCase === 'object' ||
        typeof testCase === 'function'
          ? `${TypeName}`
          : `${TypeName}-(${testCase.toString()})`;

      return [
        getItTestCaseName(i, TypeName, testCases, fixtures[TypeName][i]),
        [testCase, options],
        fixtures[TypeName][i],
      ];
    });
  });
};

describe('BaseTJS', () => {
  describe('BaseTJS getTypeErrorMessage', () => {
    Object.entries(globalFixtures).forEach(([Type, testCases]) => {
      testCases.forEach((testCase, i) => {
        it(getItTestCaseName(i, Type, testCase, 'correct message'), () => {
          expect(BaseTJS.getTypeErrorMessage(testCase, 'mytype')).toBe(
            BaseTJS.isPrimitive(testCase) && typeof testCase !== TYPES.SYMBOL
              ? `${testCase} is not a mytype`
              : `${BaseTJS.capitalize(BaseTJS.typeOf(testCase))} is not a mytype`,
          );
        });
      });
    });
  });

  describe('[Method] typeOf when strict mode is off', () => {
    getTestCases(fixtures.typeOf.nonStrict).forEach(([name, args, expected]) => {
      it(name, () => {
        expect(BaseTJS.typeOf(...args)).toBe(expected);
      });
    });
  });

  describe('[Method] typeOf when strict mode is on', () => {
    getTestCases(fixtures.typeOf.strict, { strict: true }).forEach(
      ([name, args, expected]) => {
        it(name, () => {
          expect(BaseTJS.typeOf(...args)).toBe(expected);
        });
      },
    );
  });
});
