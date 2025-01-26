import { test } from '../Utils/testsetup';

test.describe('Contact Form Tests', () => {
  test.beforeEach(async ({ contactPage }) => {
    await contactPage.navigate('https://automationintesting.online/');
  });

  test('Fill and submit the contact form', async ({ contactPage }) => {
    await contactPage.fillContactForm('John Doe', 'john.doe@example.com', '1234567890', 'Inquiry', 'Test message');
    await contactPage.submitContactForm();
  });
});
