const puppeteer = require('puppeteer');

let browser;
let page;
jest.setTimeout(30000);

beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('http://localhost:8080/');
});

afterAll(async () => {
    await browser.close();
});

describe('routing tests', () => {
    test('should route to add person view after menu click', async () => {
        // when
        await page.click('a[data-href="/adduser"');
        // then
        expect(page.url()).toBe('http://localhost:8080/adduser');
        expect(document.getElementById('add-person-input-section')).not.toBe(undefined);
    });

    test('should route to delete person view after menu click', async () => {
        // when
        await page.click('a[data-href="/deleteuser"]');
        // then
        expect(page.url()).toBe('http://localhost:8080/deleteuser');
        expect(document.getElementById('delete-person-input-section')).not.toBe(undefined);
    });

    test('should route to send view after menu click', async () => {
        // when
        await page.click('a[data-href="/send"]');
        // then
        expect(page.url()).toBe('http://localhost:8080/send');
        expect(document.getElementById('send-input-section')).not.toBe(undefined);
    });

    test('should route to default view after menu click', async () => {
        // when
        await page.goto('http://localhost:8080/idontexist');
        // then
        expect(document.getElementById('default-section')).not.toBe(undefined);
    });
});
