import FileInputManager from '../modules/FileInputManager';
import ImageManager from '../modules/ImageManager';
import Router from '../modules/Router';
import StreamManager from '../modules/StreamManager';
import VideoManager from '../modules/VideoManager';
import OnboardingScreen from '../screens/onboardingInstructions';
import VideoStreamScreen from '../screens/videoStream';

export default function closeSDK(): void {
	const streamManager = StreamManager.getInstance();
	const videoManager = VideoManager.getInstance();
	const fileInputManager = FileInputManager.getInstance();
	const imageManager = ImageManager.getInstance();
	const routerManager = Router.getInstance();
	const onboardingScreenManager = OnboardingScreen.getInstance();
	const videoStreamScreenManager = VideoStreamScreen.getInstance();

	streamManager.destroy();
	videoManager.destroy();
	fileInputManager.destroy();
	imageManager.destroy();
	routerManager.destroy();
	videoStreamScreenManager.destroy();
	onboardingScreenManager.destroy();

	const host = document.getElementById('anyline-guidance-sdk');
	if (host !== null) {
		document.body.removeChild(host);
	}
}