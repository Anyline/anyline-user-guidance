import ComponentManager from '../../src/modules/ComponentManager';
import HostManager from '../../src/modules/HostManager';

describe('ComponentManager', () => {
	let componentManager: ComponentManager;

	beforeEach(() => {
		componentManager = ComponentManager.getInstance();
	});

	afterEach(() => {
		componentManager.destroy();
	});

	it('should always return same instance', () => {
		const componentManager2 = ComponentManager.getInstance();
		void expect(componentManager).toBe(componentManager2);
		componentManager2.destroy();
	});

	it('should call onMount when a component is added to the dom', async () => {
		const hostmanager = HostManager.getInstance();
		const host = hostmanager.getHost();
		const element = componentManager.element;
		const mockCallback = jest.fn();
		componentManager.onMount(mockCallback);

		host.appendChild(element);

		void expect(mockCallback).not.toHaveBeenCalled();

		await new Promise(resolve => setTimeout(resolve, 0));

		void expect(mockCallback).toHaveBeenCalled();
	});

	it('should call onUnmount when a component is removed from the dom', async () => {
		const hostmanager = HostManager.getInstance();
		const host = hostmanager.getHost();
		const element = componentManager.element;
		const mockCallback = jest.fn();
		componentManager.onMount(async () => {
			await Promise.resolve();
		});
		componentManager.onUnmount(mockCallback);

		host.appendChild(element);
		await new Promise(resolve => setTimeout(resolve, 0));
		host.removeChild(element);

		void expect(mockCallback).not.toHaveBeenCalled();

		await new Promise(resolve => setTimeout(resolve, 0));

		void expect(mockCallback).toHaveBeenCalled();
	});

	it('should have separate instance when ComponentManager is extended to different instances', () => {
		class First extends ComponentManager {
			//
		}
		class Second extends ComponentManager {
			//
		}
		const firstInstance = First.getInstance();
		const secondInstance = Second.getInstance();

		void expect(firstInstance).not.toBe(secondInstance);
		firstInstance.destroy();
		secondInstance.destroy();
	});

	it('should returns a div element when getElement is called', () => {
		const element = componentManager.getElement();

		void expect(element).toBeInstanceOf(HTMLDivElement);
	});
});
