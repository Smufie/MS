import MenuComponent from '../../components/MenuComponent';
import Router from '../../Router';

const puppeteer = require('puppeteer');

let browser;

beforeEach(async () => {
    browser = puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://localhost:8000');
});

afterEach(async () => {
    await browser.close();
});

beforeAll(() => {
    const menuDiv = document.createElement('div');
    menuDiv.id = 'main-section';
    document.body.appendChild(document.body);

    const testArticle = document.createElement('article');
    testArticle.innerHTML = 'Lorem ipsum';

    const mainSectionDiv = document.createElement('div');
    mainSectionDiv.id = 'main-section';
    mainSectionDiv.appendChild(testArticle);
    document.body.appendChild(mainSectionDiv);

    const menu = new MenuComponent();
    menu.inject();
});

describe.skip('router integral tests', () => {
    test('should route to view', () => {
        // when
        const router = new Router();
        // then
        const addLink = document.
    });
});
