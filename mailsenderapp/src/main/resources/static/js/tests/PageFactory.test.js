import PageFactory from '../PageFactory';

describe('page factory tests', () => {
    test('should create page factory', () => {
        // given
        const mainSection = document.createElement('div');
        mainSection.id = 'main-section';
        document.body.appendChild(mainSection);
        const articleElement = document.createElement('article');
        mainSection.appendChild(articleElement);
        // when
        const factory = new PageFactory();
        // then
        expect(factory.pages[0]).not.toBe(undefined);
    });

    test('should clear page', () => {
        // given
        const mainSection = document.createElement('div');
        mainSection.id = 'main-section';
        document.body.appendChild(mainSection);
        const articleElement = document.createElement('article');
        articleElement.innerHTML = 'not empty';
        mainSection.appendChild(articleElement);
        // when
        const factory = new PageFactory();
        factory.inputArticle = articleElement;
        factory.clearPage();
        // then
        expect(factory.inputArticle.innerHTML).toBe('');
    });

    test('should create add page', () => {
        // given
        const route = {
            name: 'Add',
            url: '/adduser',
            id: 1,
            wasCreated: false,
        };
        const mainSection = document.createElement('div');
        mainSection.id = 'main-section';
        document.body.appendChild(mainSection);
        const articleElement = document.createElement('article');
        mainSection.appendChild(articleElement);
        // when
        const factory = new PageFactory(); // TODO papiter, testy GUI, integracyjne, end-to-end, nowa komenda w package.json
        factory.displayAddPage(route);
        // then
        expect(factory.inputArticle.innerHTML).toMatch(`"submit-button"`);
    });

    test('should create send page', () => {
        // given
        const route = {
            name: 'Send',
            url: '/send',
            id: 2,
            wasCreated: false,
        };
        const mainSection = document.createElement('div');
        mainSection.id = 'main-section';
        document.body.appendChild(mainSection);
        const articleElement = document.createElement('article');
        mainSection.appendChild(articleElement);
        // when
        const factory = new PageFactory();
        factory.displaySendPage(route);
        // then
        expect(factory.inputArticle.innerHTML).toMatch(`"send-button"`);
    });

    test('should create delete page', () => {
        // given
        const route = {
            name: 'Delete',
            url: '/deleteuser',
            id: 3,
            wasCreated: false,
        };
        const mainSection = document.createElement('div');
        mainSection.id = 'main-section';
        document.body.appendChild(mainSection);
        const articleElement = document.createElement('article');
        mainSection.appendChild(articleElement);
        // when
        const factory = new PageFactory();
        factory.displayDeletePage(route);
        // then
        expect(factory.inputArticle.innerHTML).toMatch(`"delete-button"`);
    });

    test('should render page', () => {
        // given
        const mainSection = document.createElement('div');
        mainSection.id = 'main-section';
        document.body.appendChild(mainSection);
        const articleElement = document.createElement('article');
        mainSection.appendChild(articleElement);
        // when
        const factory = new PageFactory();
        factory.renderPage(0);
        // then
        expect(factory.inputArticle.innerHTML).toMatch(`Welcome to MailSender!`);
    });
});
