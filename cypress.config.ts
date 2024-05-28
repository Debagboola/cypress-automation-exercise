import { defineConfig } from 'cypress';
import addCucumberPreprocessorPlugin from 'cypress/cucumber-preprocessor';

export default defineConfig({
  e2e: {
    baseUrl: 'https://www.automationexercise.com',
    chromeWebSecurity: false,
    specPattern: 'cypress/integration/**/*.feature',
    excludeSpecPattern: ['*.js', '*.md'],
    supportFile: 'cypress/support/index.ts',
    setupNodeEvents(on, config) {
      on(
        'file:preprocessor',
        addCucumberPreprocessorPlugin()
      );

      return config;
    },
  },
});
