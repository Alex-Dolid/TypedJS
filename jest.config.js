export default {
  preset: 'ts-jest',
  displayName: 'TypedJS',
  globals: {},
  testEnvironment: 'node',
  transform: {
    '^.+.[tj]s$': [
      'ts-jest',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
      },
    ],
  },
  transformIgnorePatterns: ['node_modules/(?!variables/.*)'],
  coveragePathIgnorePatterns: ['.dto.ts', '.mock.js'],
  coverageReporters: ['json', 'lcov', 'text'],
  moduleFileExtensions: ['js'],
  coverageDirectory: './coverage/unit',
  roots: ['lib'],
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: [],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};
