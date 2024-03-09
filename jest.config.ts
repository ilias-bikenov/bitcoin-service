import type { Config } from 'jest';

const config: Config = {
    clearMocks: true,
    collectCoverage: true,
    collectCoverageFrom: ['./src/**/*.ts'],
    coverageDirectory: '<rootDir>/test/coverage',
    testEnvironment: 'node',
    testMatch: ['**/*.test.ts'],
    preset: 'ts-jest',
};

export default config;
