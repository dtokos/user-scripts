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
		spinner.classList.add('gl-spinner', 'gl-spinner-dark', 'gl-spinner-sm');

		return spinner;
	},
	checkCircle(): HTMLSpanElement {
		const icon = wrappedSVGIcon('/assets/icons-7f1680a3670112fe4c8ef57b9dfb93f0f61b43a2a479d7abd6c83bcb724b9201.svg#status_success');
		icon.classList.add('ci-status-icon-success');

		return icon;
	},
	crossCircle(): HTMLSpanElement {
		const icon = wrappedSVGIcon('/assets/icons-7f1680a3670112fe4c8ef57b9dfb93f0f61b43a2a479d7abd6c83bcb724b9201.svg#status_failed');
		icon.classList.add('ci-status-icon-failed');

		return icon;
	},
	close(): SVGSVGElement {
		const icon = svgIcon('/assets/icons-7f1680a3670112fe4c8ef57b9dfb93f0f61b43a2a479d7abd6c83bcb724b9201.svg#close');
		icon.classList.add('gl-button-icon');

		return icon;
	},
	clipboard(): SVGSVGElement {
		const icon = svgIcon('/assets/icons-7f1680a3670112fe4c8ef57b9dfb93f0f61b43a2a479d7abd6c83bcb724b9201.svg#copy-to-clipboard');
		icon.classList.add('gl-icon');

		return icon;
	}
} as const;

function wrappedSVGIcon(href: string): HTMLSpanElement {
	const wrapper = document.createElement('span');
	wrapper.appendChild(svgIcon(href));

	return wrapper;
}

function svgIcon(href: string): SVGSVGElement {
	const use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
	use.setAttribute('href', href);

	const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
	svg.classList.add('s16');
	svg.appendChild(use);

	return svg;
}

export default icons;
