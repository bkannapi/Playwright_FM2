import { BasePage } from './Basepage';

export class ContactPage extends BasePage {
  async fillContactForm(name: string, email: string, phone: string, subject: string, message: string) {
    await this.page.fill('#name', name);
    await this.page.fill('#email', email);
    await this.page.fill('#phone', phone);
    await this.page.fill('#subject', subject);
    await this.page.fill('#description', message);
  }

  async submitContactForm() {
    await this.page.click('#submitContact');
  }
}
