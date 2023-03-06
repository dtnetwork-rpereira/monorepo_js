import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    screenshotOnRunFailure: false,
    video: false,
    supportFile: false,
    specPattern: 'test/e2e/**/*.cy.{js,jsx,ts,tsx}',
  },
});
