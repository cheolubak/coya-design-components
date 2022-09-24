export default {
  preset: 'ts-jest',
  clearMocks: true,

  collectCoverage: false,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',

  coverageReporters: ['json'],

  moduleFileExtensions: [
    'js',
    'mjs',
    'cjs',
    'jsx',
    'ts',
    'tsx',
    'json',
    'node',
  ],
  // testMatch: ["**/?(*.)+(spec|test).[tj]s?(x)"],
  testEnvironment: 'jest-environment-jsdom',

  testPathIgnorePatterns: ['/node_modules/'],

  transformIgnorePatterns: ['/node_modules/'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
};
