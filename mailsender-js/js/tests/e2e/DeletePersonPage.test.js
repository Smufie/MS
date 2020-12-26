const puppeteer = require('puppeteer');

let browser;
let page;
jest.setTimeout(15000);

beforeAll(async () => {
	browser = await puppeteer.launch();
	page = await browser.newPage();
	global.page = page;
	await page.goto('http://localhost:8080/deleteuser');
});

afterAll(async () => {
	await browser.close();
});

describe('delete person view tests', () => {
	test('should delete person from table and not display it after refresh', async () => {
		// given
		await page.waitForTimeout(2000);
		const id = await page.$$eval('#person-table td', (selectedPersons) =>
			selectedPersons[selectedPersons.length - 1].getAttribute('data-person-id')
		);
		const tableSizeBefore = await page.$$eval(
			'#person-table tr',
			(selectedTable) => selectedTable.length
		);
		// when
		await page.click('#id-input');
		await page.type('#id-input', `${id}`);
		await page.click('#delete-button');
		await page.waitForTimeout(2000);
		await page.click('#refresh-button');
		await page.waitForTimeout(2000);
		// then
		const tableSizeAfter = await page.$$eval(
			'#person-table tr',
			(selectedTable) => selectedTable.length
		);
		expect(tableSizeBefore > tableSizeAfter).toBe(true);

		const informationReturned = await page.$eval(
			'.information-returned',
			(information) => information.innerHTML
		);
		expect(informationReturned).toMatch(`Person with id ${id} successfully deleted.`);
	});
});
