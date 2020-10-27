const puppeteer = require('puppeteer');

let browser;
let page;
jest.setTimeout(15000);

beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    global.page = page;
    await page.goto('http://localhost:8080/');
});

afterAll(async () => {
    await browser.close();
});

describe('edit person in table tests', () => {
    test('should edit person in table', async () => {
        // given
        await page.waitForTimeout(1000);

        const tableCell = await page.$eval(
            '#person-table td',
            (cell) => cell.innerHTML
        );

        const id = tableCell;

        await page.click(`#name-${id}`);
        // when
        page.keyboard.press('Enter');
        // then

        await page.waitForTimeout(1000);
        await page.click('#refresh-button');
        await page.waitForTimeout(1000);

        const informationReturned = await page.$eval(
            '.information-returned',
            (information) => information.innerHTML
        );
        expect(informationReturned).toMatch(
            `Person with id "${id}" successfully updated.`
        );
    });
});
