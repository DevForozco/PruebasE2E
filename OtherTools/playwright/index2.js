const { chromium } = require('playwright');

describe('Ghost', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await chromium.launch();
  });

  afterAll(async () => {
    await browser.close();
  });

  beforeEach(async () => {
    page = await browser.newPage();
  });

  afterEach(async () => {
    await page.close();
  });

  it('should log in successfully', async () => {
    await page.goto('http://localhost:3002/ghost/#/signin');

    // Fill in email and password fields
    await page.fill('#ember8', 'j.aguiar@uniandes.edu.co');
    await page.fill('#ember10', 'pruebas123+-');

    // Click the sign in button
    await Promise.all([
      page.waitForNavigation(),
      page.click('.login-box button[type="submit"]')
    ]);

    // Assert that we are logged in
    const pageTitle = await page.title();
    expect(pageTitle).toBe('Dashboard - Ghost');
  });
});
