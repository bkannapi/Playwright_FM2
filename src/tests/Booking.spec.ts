import { test } from '../Utils/testsetup';

test.describe('Booking Tests', () => {
  test.beforeEach(async ({ bookingPage }) => {
    await bookingPage.navigate('https://automationintesting.online/');
  });

  test('Verify Book button is enabled', async ({ bookingPage }) => {
    const isEnabled = await bookingPage.isBookButtonEnabled();
    test.expect(isEnabled).toBe(true);
  });

  test('Book a room', async ({ bookingPage }) => {
    await bookingPage.fillBookingForm('John', 'Doe', 'john.doe@example.com', '1234567890');
    await bookingPage.bookRoom();
  });

  test('Verify room cannot be rebooked', async ({ bookingPage }) => {
    await bookingPage.verifyRoomCannotBeRebooked();
  });
});
