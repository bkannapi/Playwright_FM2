import { test as base } from '@playwright/test';
import { BookingPage } from '../pages/Bookingpage';
import { ContactPage } from '../pages/Contactpage';

type Pages = {
  bookingPage: BookingPage;
  contactPage: ContactPage;
};

export const test = base.extend<Pages>({
  bookingPage: async ({ page, baseURL }, use) => {
    const bookingPage = new BookingPage(page);
    await bookingPage.navigate(baseURL || ''); // Use baseURL from config
    await bookingPage.clickLetMeHackButton(); // Click the "Let me hack!" button
    await use(bookingPage);
  },
  contactPage: async ({ page, baseURL }, use) => {
    const contactPage = new ContactPage(page);
    await contactPage.navigate(`${baseURL || ''}/#/contact`); // Use baseURL from config
    await contactPage.clickLetMeHackButton(); // Click the "Let me hack!" button
    await use(contactPage);
  },
});
