const icons = {
	daktela(): HTMLImageElement {
		const icon = document.createElement('img');
		icon.src = '/uploads/-/system/project/avatar/10/256x256.png';
		icon.style.width = '16px';
		icon.style.height = '16px';
		icon.style.transform = 'scale(1.5)';

		return icon;
	},
	spinner(): HTMLSpanElement {
		const spinner = document.createElement('span');
		spinner.classList.add('gl-spinner', 'gl-spinner-dark', 'gl-spinner-sm', 'rounded-circle');

		return spinner;
	},
	checkCircle(): HTMLSpanElement {
		const icon = wrappedSVGIcon('status_success');
		icon.classList.add('ci-status-icon-success');

		return icon;
	},
	crossCircle(): HTMLSpanElement {
		const icon = wrappedSVGIcon('status_failed');
		icon.classList.add('ci-status-icon-failed');

		return icon;
	},
	close(): SVGSVGElement {
		const icon = svgIcon('close');
		icon.classList.add('gl-button-icon');

		return icon;
	},
	clipboard(): SVGSVGElement {
		const icon = svgIcon('copy-to-clipboard');
		icon.classList.add('gl-icon');

		return icon;
	}
} as const;

function wrappedSVGIcon(iconName: string): HTMLSpanElement {
	const wrapper = document.createElement('span');
	wrapper.appendChild(svgIcon(iconName));

	return wrapper;
}

function svgIcon(iconName: string): SVGSVGElement {
	const use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
	use.setAttribute('href', `/assets/icons-33d285b77c0f9173f577e26a550fb6463b9913e368ebfcdbb54022aff27051db.svg#${iconName}`);

	const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
	svg.classList.add('s16');
	svg.appendChild(use);

	return svg;
}

export default icons;
