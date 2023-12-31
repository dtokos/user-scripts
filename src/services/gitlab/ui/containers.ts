const containers = {
	justifyBetween(...children: HTMLElement[]): HTMLDivElement {
		const container = document.createElement('div');
		container.classList.add('gl-display-flex', 'gl-justify-content-space-between');
		children.forEach(child => container.appendChild(child));

		return container;
	},
} as const;

export default containers;
