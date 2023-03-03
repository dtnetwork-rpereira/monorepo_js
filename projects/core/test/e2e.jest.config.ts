import generalConfig from '@onlytests/jest/index';

const config = {
  ...generalConfig,
  rootDir: '.',
  testEnvironment: 'node',
  testRegex: '.e2e-spec.ts$',
};

export default config;
