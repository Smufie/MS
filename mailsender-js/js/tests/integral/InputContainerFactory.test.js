import InputContainerFactory from '../../containers/InputContainerFactory';
import containerData from '../../../templates/template-datas/input-template-datas/input-containers-data.json';

describe('input container factory integral tests', () => {
	test('should return add person container', () => {
		// when
		const container = InputContainerFactory.getAddPersonContainer();
		// then
		expect(container.getId()).toBe(containerData.addperson.articleId);
	});

	test('should return add interest container', () => {
		// when
		const container = InputContainerFactory.getAddInterestContainer();
		// then
		expect(container.getId()).toBe(containerData.addinterest.articleId);
	});

	test('should return delete person container', () => {
		// when
		const container = InputContainerFactory.getDeletePersonContainer();
		// then
		expect(container.getId()).toBe(containerData.deleteperson.articleId);
	});

	test('should return delete interest container', () => {
		// when
		const container = InputContainerFactory.getDeleteInterestContainer();
		// then
		expect(container.getId()).toBe(containerData.deleteinterest.articleId);
	});

	test('should return send container', () => {
		// when
		const container = InputContainerFactory.getSendContainer();
		// then
		expect(container.getId()).toBe(containerData.send.articleId);
	});

	test('should return default container', () => {
		// when
		const container = InputContainerFactory.getDefaultContainer();
		// then
		expect(container.getId()).toBe(containerData.default.articleId);
	});
});
