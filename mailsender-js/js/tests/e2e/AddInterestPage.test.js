const puppeteer = require('puppeteer');

let browser;
let page;
jest.setTimeout(15000);

beforeAll(async () => {
	browser = await puppeteer.launch();
	page = await browser.newPage();
	global.page = page;
	await page.goto('http://localhost:8080/addinterest');
});

afterAll(async () => {
	await browser.close();
});

describe('add interest view tests', () => {
	test('should add interest to table and display it after refresh', async () => {
		// given
		const random = Math.floor(Math.random() * 1000);

		await page.click('#interest-input');
		await page.type('#interest-input', `test${random}`);

		await page.click('#interests-button');

		const tableSizeBefore = await page.$$eval(
			'#interest-table tr',
			(selectedTable) => selectedTable.length
		);
		// when
		await page.click('#interest-submit-button');
		await page.waitForTimeout(1000);
		await page.click('#interests-button');
		await page.waitForTimeout(500);
		// then

		const informationReturned = await page.$eval(
			'.information-returned',
			(information) => information.innerHTML
		);

		expect(informationReturned).toMatch(
			`Interest "test${random}" successfully created with id `
		);

		const tableSizeAfter = await page.$$eval(
			'#interest-table tr',
			(selectedTable) => selectedTable.length
		);
		expect(tableSizeBefore < tableSizeAfter).toBe(true);
	});
});
