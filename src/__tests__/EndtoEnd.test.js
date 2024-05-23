import puppeteer from 'puppeteer';

// Feature 1: Show/hide an event's details
describe('filter events by city', () => {
  let browser;
  let page;
  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('#event-list');
  });

  afterAll(() => {
    browser.close();
  });

  test('When user hasn’t searched for a city, show upcoming events from all cities', async () => {
    const events = await page.$$('#event-list .event');
    expect(events).toHaveLength(32);
  });

  test('User should see a list of suggestions when they search for a city', async () => {
    await page.type('.city', 'Berlin');
    const suggestions = await page.$$('.suggestions li');
    expect(suggestions).toHaveLength(2);
  });

  test('User can select a city from the suggested list', async () => {
    await page.click('.suggestions li');
    const city = await page.$eval('.city', (input) => input.value);
    expect(city).toBe('Berlin, Germany');
  });
});

// Feature 2: Show/hide an event's details
describe('show/hide an event details', () => {
  let browser;
  let page;
  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.event');
  });

  afterAll(() => {
    browser.close();
  });

  test('An event element is collapsed by default', async () => {
    const eventDetails = await page.$('.event .details');
    expect(eventDetails).toBeNull();
  });

  test('User can expand an event to see its details', async () => {
    await page.click('.event .details-btn');
    const eventDetails = await page.$('.event .details');
    expect(eventDetails).toBeDefined();
  });

  test('User can collapse an event to hide details', async () => {
    await page.click('.event .details-btn');
    const eventDetails = await page.$('.event .details');
    expect(eventDetails).toBeNull();
  });
});

// Feature 3: Specify number of events
describe('specify number of events', () => {
  let browser;
  let page;
  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('#event-list');
  });

  afterAll(() => {
    browser.close();
  });

  test('When user hasn’t specified a number, 32 is the default number', async () => {
    const events = await page.$$('#event-list .event');
    expect(events).toHaveLength(32);
  });

  test('User can change the number of events they want to see', async () => {
    await page.click('.number');
    await page.type('.number', '1');
    const events = await page.$$('#event-list .event');
    expect(events).toHaveLength(1);
  });
});
