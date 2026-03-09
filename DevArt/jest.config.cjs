module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
    testMatch: ['**/tests/**/*.test.(ts|tsx)'],
    transform: {
      '^.+\\.(ts|tsx)$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.jest.json' }],
    },
    moduleNameMapper: {
      '\\.(css|less|sass|scss)$': '<rootDir>/tests/mocks/styleMock.js',
    },
  };