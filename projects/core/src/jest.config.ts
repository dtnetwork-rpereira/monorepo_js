import generalConfig from '@onlytests/jest/index';

const config = {
  ...generalConfig,
  rootDir: '.',
  testEnvironment: 'node',
  testRegex: '.*\\.spec\\.ts$',
};

export default config;
