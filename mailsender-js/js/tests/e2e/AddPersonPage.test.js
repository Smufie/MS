const puppeteer = require('puppeteer');

let browser;
let page;
jest.setTimeout(15000);

beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('http://localhost:8080/adduser');
});

afterAll(async () => {
    await browser.close();
});

describe('add person view tests', () => {
    test('should add person to table and display it after refresh', async () => {
        // given
        await page.click('#name-input');
        await page.type('#name-input', 'Johnny');
        const tableSizeBefore = await page.$$eval(
            '#person-table tr',
            (selectedTable) => selectedTable.length
        );
        // when
        await page.click('#submit-button');
        await page.click('#refresh-button');
        await page.waitForTimeout(2000);
        // then
        const tableSizeAfter = await page.$$eval(
            '#person-table tr',
            (selectedTable) => selectedTable.length
        );
        expect(tableSizeBefore < tableSizeAfter).toBe(true);

        const informationReturned = await page.$eval(
            '.information-returned',
            (information) => information.innerHTML
        );
        expect(informationReturned).toMatch(`Person "Johnny" successfully created with id`);
    });
});
