import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    headless: false,
    browserName: 'chromium',
    baseURL: 'https://automationintesting.online/',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    viewport: { width: 1280, height: 720 }, 
    actionTimeout: 30000, 
    navigationTimeout: 30000, 
  },
  testDir: './src/tests',
});
