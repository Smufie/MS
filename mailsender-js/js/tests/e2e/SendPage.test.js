const puppeteer = require('puppeteer');

let browser;
let page;
jest.setTimeout(15000);

beforeAll(async () => {
	browser = await puppeteer.launch();
	page = await browser.newPage();
	global.page = page;
	await page.goto('http://localhost:8080/send');
});

afterAll(async () => {
	await browser.close();
});

describe('add person view tests', () => {
	test('should add person to table and display it after refresh', async () => {
		// given
		await page.click('#message-input');
		await page.type('#message-input', 'Test message.');

		await page.click('#checkbox-0');

		// when
		await page.click('#send-button');
		await page.waitForTimeout(2000);
		// then
		const informationReturned = await page.$eval(
			'.information-returned',
			(information) => information.innerHTML
		);
		expect(informationReturned).toMatch(`Message sent to `);
	});
});
