/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
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

describe.skip('edit person in table tests', () => {
	test('should edit person in table', async () => {
		await page.waitForTimeout(2000);
		// given
		const random = Math.floor(Math.random() * 1000);

		const personId = await page.$$eval('#person-table td', (selectedPersons) =>
			selectedPersons[selectedPersons.length - 1].getAttribute('data-person-id')
		);
		await page.$eval(`#name-${personId}`, (cell) => (cell.innerHTML = ''));
		await page.click(`#name-${personId}`);
		await page.type(`#name-${personId}`, `Test${random}`);
		await page.waitForTimeout(1000);
		await page.$eval(`#mail-${personId}`, (cell) => (cell.innerHTML = ''));
		await page.click(`#mail-${personId}`);
		await page.type(`#mail-${personId}`, `test${random}@test.pl`);
		await page.waitForTimeout(1000);
		// when
		page.keyboard.press('Enter');
		await page.waitForTimeout(1000);
		await page.click('#persons-button');
		await page.waitForTimeout(1000);
		// then

		const nameCellValue = await page.$eval(`#name-${personId}`, (cell) => cell.innerHTML);
		const mailCellValue = await page.$eval(`#mail-${personId}`, (cell) => cell.innerHTML);

		const informationReturned = await page.$eval(
			'.information-returned',
			(information) => information.innerHTML
		);
		expect(informationReturned).toMatch(`Person with id ${personId} successfully updated.`);
		expect(nameCellValue).toMatch(`Test${random}`);
		expect(mailCellValue).toMatch(`test${random}@test.pl`);
	});
});
