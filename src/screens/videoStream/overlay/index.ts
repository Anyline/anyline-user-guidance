import overlaySrc from './overlay.svg';
import css from './index.module.css';

export default function createOverlayElement(): HTMLDivElement {
	const overlayWrapper = document.createElement('div');
	overlayWrapper.className = css.overlayWrapper;

	const imageWrapper = document.createElement('div');
	imageWrapper.className = css.imageWrapper;

	const overlay = document.createElement('img');
	overlay.src = overlaySrc;
	overlay.className = css.overlay;

	imageWrapper.appendChild(overlay);
	overlayWrapper.appendChild(imageWrapper);

	return overlayWrapper;
}
