const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/components/$1',
    '^@/app/(.*)$': '<rootDir>/src/app/$1',
    '^@/api/(.*)$': '<rootDir>/src/api/$1',
    '^@/database/(.*)$': '<rootDir>/src/database/$1',
    '^@/animations/(.*)$': '<rootDir>/src/animations/$1',
    '^@/hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^@/icons/(.*)$': '<rootDir>/src/components/icons/$1',
    '^@/atoms/(.*)$': '<rootDir>/src/components/atoms/$1',
    '^@/molecules/(.*)$': '<rootDir>/src/components/molecules/$1',
    '^@/organisms/(.*)$': '<rootDir>/src/components/organisms/$1',
    '^@/layouts/(.*)$': '<rootDir>/src/components/layouts/$1',
    '^@/stories/(.*)$': '<rootDir>/src/stories/$1',
    '^@/consts/(.*)$': '<rootDir>/src/consts/$1',
    '^@/styles/(.*)$': '<rootDir>/src/styles/$1'
  },
  setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
  modulePathIgnorePatterns: [
    "<rootDir>/src/__tests__/app",
    "<rootDir>/src/__tests__/mocks",
    "<rootDir>/src/__tests__/utils"
  ],
}

module.exports = createJestConfig(customJestConfig)