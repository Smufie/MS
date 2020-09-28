const puppeteer = require('puppeteer');

let browser;
let page;
jest.setTimeout(30000);

beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('http://localhost:8080/adduser');
});

afterAll(async () => {
    await browser.close();
});

describe('edit person in table tests', () => {
    test('should edit person in table', async () => {
        // given
        await page.waitForSelector('td[data-person-id="0"]', {
            visible: true,
        });
        const nameBefore = await page.$eval(
            'td[data-person-id="0"]',
            (selectedCell) => selectedCell.innerHTML
        );
        await page.click('td[data-person-id="0"]');
        await page.type('td[data-person-id="0"]', `x`);
        // when
        page.keyboard.press('Enter');
        // then
        const nameAfter = await page.$eval(
            'td[data-person-id="0"]',
            (selectedCell) => selectedCell.innerHTML
        );

        expect(nameBefore !== nameAfter).toBe(true);

        await page.click('#refresh-button');
        await page.waitForTimeout(2000);

        expect(nameAfter).toBe(`${nameBefore}x`);
        expect(nameBefore !== nameAfter).toBe(true);

        const informationReturned = await page.$eval(
            '.information-returned',
            (information) => information.innerHTML
        );
        expect(informationReturned).toBe(
            `Person with id "0" successfully updated with name "${nameAfter}".`
        );
    });
});
