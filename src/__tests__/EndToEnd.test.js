import puppeteer from 'puppeteer';

    let browser;
    let page;
    beforeAll(async () => {
        jest.setTimeout(300000);
        browser = await puppeteer.launch({
                headless: false,
            slowMo: 250,
            ignoreDefaultArgs: ['--disable-extentions']
        });
        page = await browser.newPage();
        await page.goto('http://localhost:3000/');
        await page.waitForSelector('.event');
    });

    afterAll(() => {
        browser.close();
    });
    
describe('show/hide an event details', () => {
    test('An event element is collapsed by default', async () => {
        const eventDetails = await page.$('.event .details');

        expect(eventDetails).toBeNull();
    });

    test('User can expand an event to see its details', async () => {
        await page.click('.event .details-btn');

        const eventDetails = await page.$('.event .details');
        expect(eventDetails).toBeDefined();
    });

    test('User can collapse an event to hide its details', async () => {
        await page.click('.event .details-btn');
        const eventDetails = await page.$('.event .details');
        expect(eventDetails).toBeNull();
    });
});