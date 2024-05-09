import ImageManager from '../../src/modules/ImageManager';

describe('ImageManager', () => {
	it('should always return the same instance', () => {
		const instance1 = ImageManager.getInstance();
		const instance2 = ImageManager.getInstance();
		void expect(instance1).toBe(instance2);
	});

	it('should not resolve getImageBlob until setImageBlob is called', async () => {
		const imageManager = ImageManager.getInstance();
		let blob;

		const promise = imageManager.getImageBlob().then(res => {
			blob = res;
		});

		void expect(blob).toBeUndefined();

		const file = new File([''], 'filename');
		imageManager.setImageBlob(file);

		await promise;

		void expect(blob).toBe(file);
	});

	it('should destroy image manager instance', () => {
		const imageManager = ImageManager.getInstance();
		void expect(ImageManager.getInstance()).toBe(imageManager);
		imageManager.destroy();
		void expect(ImageManager.getInstance()).not.toBe(imageManager);
	});
});