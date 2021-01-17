const puppeteer = require('puppeteer');

let browser;
let page;
jest.setTimeout(15000);

beforeAll(async () => {
	browser = await puppeteer.launch({ headless: false });
	page = await browser.newPage();
	global.page = page;
	await page.goto('http://localhost:8080/deleteinterest');
});

afterAll(async () => {
	await browser.close();
});

describe('delete interest view tests', () => {
	test('should delete interest from table and not display it after refresh', async () => {
		// given
		await page.waitForTimeout(1000);
		await page.click('#interests-button');
		await page.waitForTimeout(1000);
		const id = await page.$$eval(
			'#interest-table td',
			(selectedInterests) => selectedInterests[selectedInterests.length - 2].innerHTML
		);
		const tableSizeBefore = await page.$$eval(
			'#interest-table tr',
			(selectedTable) => selectedTable.length
		);
		// when
		await page.click('#interest-id-input');
		await page.type('#interest-id-input', `${id}`);
		await page.click('#interest-delete-button');
		await page.waitForTimeout(1000);
		await page.click('#interests-button');
		await page.waitForTimeout(500);
		// then
		const tableSizeAfter = await page.$$eval(
			'#interest-table tr',
			(selectedTable) => selectedTable.length
		);
		expect(tableSizeBefore > tableSizeAfter).toBe(true);

		const informationReturned = await page.$eval(
			'.information-returned',
			(information) => information.innerHTML
		);
		expect(informationReturned).toMatch(`Interest with id ${id} successfully deleted.`);
	});
});
