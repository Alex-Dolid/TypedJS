import { BaseTJS } from './BaseTJS';
import { globalFixtures } from '../fixtures';
import { fixtures } from './BaseTJS.fixtures';

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
        `${i}.[${testCaseName}]: should return ${fixtures[TypeName][i]}`,
        [testCase, options],
        fixtures[TypeName][i],
      ];
    });
  });
};

describe('BaseTJS', () => {
  let baseTJS;

  describe('BaseTJS when strict mode is off', () => {
    beforeEach(() => {
      baseTJS = new BaseTJS();
    });

    describe('[Method] typeOf when strict mode is off', () => {
      getTestCases(fixtures.typeOf.nonStrict).forEach(([name, args, expected]) => {
        it(name, () => {
          expect(baseTJS.typeOf(...args)).toBe(expected);
        });
      });
    });

    describe('[Method] typeOf when strict mode is on', () => {
      getTestCases(fixtures.typeOf.strict, { strict: true }).forEach(
        ([name, args, expected]) => {
          it(name, () => {
            expect(baseTJS.typeOf(...args)).toBe(expected);
          });
        },
      );
    });
  });

  describe('BaseTJS when strict mode is on', () => {
    beforeEach(() => {
      baseTJS = new BaseTJS({ strict: true });
    });

    describe('[Method] typeOf when strict mode is off', () => {
      getTestCases(fixtures.typeOf.nonStrict, { strict: false }).forEach(
        ([name, args, expected]) => {
          it(name, () => {
            expect(baseTJS.typeOf(...args)).toBe(expected);
          });
        },
      );
    });

    describe('[Method] typeOf without options (should works like when strict mode is on)', () => {
      getTestCases(fixtures.typeOf.strict).forEach(([name, args, expected]) => {
        it(name, () => {
          expect(baseTJS.typeOf(...args)).toBe(expected);
        });
      });
    });
  });
});
