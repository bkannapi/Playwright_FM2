import { BasePage } from './Basepage';
import { expect } from '@playwright/test';

export class BookingPage extends BasePage {
  async isBookButtonEnabled(): Promise<boolean> {
    // Wait for the button to be visible and enabled
    const bookButton = this.page.locator('button:has-text("Book this room")').first();
    await bookButton.waitFor({ state: 'visible' });
    return await bookButton.isEnabled();
  }

  async fillBookingForm(firstName: string, lastName: string, email: string, phone: string): Promise<void> {
    await this.page.waitForLoadState('networkidle'); // Ensure page is fully loaded

    const firstNameField = this.page.locator('input[placeholder="Firstname"]');
    await firstNameField.waitFor({ state: 'visible' });
    await firstNameField.focus();
    await firstNameField.fill(firstName);

    const lastNameField = this.page.locator('input[placeholder="Lastname"]');
    await lastNameField.waitFor({ state: 'visible' });
    await lastNameField.focus();
    await lastNameField.fill(lastName);

    const emailField = this.page.locator('input[name="email"]');
    await emailField.waitFor({ state: 'visible' });
    await emailField.focus();
    await emailField.fill(email);

    const phoneField = this.page.locator('input[class="form-control room-phone"]');
    await phoneField.waitFor({ state: 'visible' });
    await phoneField.focus();
    await phoneField.fill(phone);
  }

  async bookRoom(): Promise<void> {
    // Wait for the book button to be visible and enabled, then click
    const bookButton = this.page.locator('button[type="button"].book-room');
    await bookButton.waitFor({ state: 'visible' });
    if (await bookButton.isEnabled()) {
      await bookButton.click();
  
      // Wait for all network activity to finish before proceeding
      await this.page.waitForLoadState('networkidle');
    } else {
      throw new Error('Book button is not enabled');
    }
  }
  

  async verifyRoomCannotBeRebooked(): Promise<void> {
    // Wait for the error alert to become visible
    const errorMessage = this.page.locator('div.alert.alert-danger > p').nth(0);
    await errorMessage.waitFor({ state: 'attached' }); // Ensure the DOM element is present
    await expect(errorMessage).toBeVisible({ timeout: 10000 }); // Increase timeout for stability
  
    // Capture and validate the error message text
    const errorMessageText = await errorMessage.textContent();
    console.log('Captured Error Message:', errorMessageText);
  
    // Assert the message text matches expectations
    expect(['must not be null', 'size must be between 11 and 21']).toContain(errorMessageText);
  }
}