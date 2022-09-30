export default {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.js?$': 'babel-jest',
  },
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
  testEnvironment: 'jsdom',

  setupFilesAfterEnv: ['<rootDir>/testSetup.js'],
  testPathIgnorePatterns: ['/node_modules/'],

  transformIgnorePatterns: ['/node_modules/'],
};
