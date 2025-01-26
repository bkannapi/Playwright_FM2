import { Page } from '@playwright/test';

export class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate(url: string) {
    await this.page.goto(url);
    }

    async clickLetMeHackButton() {
      const letMeHackButton = this.page.locator('#collapseBanner > div > div:nth-child(3) > div.col-2.text-center > button');      
      if (await letMeHackButton.isVisible()) {
        await letMeHackButton.click();
        //await this.page.waitForSelector('#root > div > div > div:nth-child(5) > div > div > div.col-sm-7 > button');
        await this.page.waitForLoadState('networkidle'); // Wait for the page to finish loading
      }
    }
      
}
