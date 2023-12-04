const links = {
	external(href: string, title: string|undefined = undefined) {
		const anchor = document.createElement('a');
		anchor.href = href;
		anchor.textContent = title ?? href;
		anchor.target = '_blank';
		anchor.rel = 'noreferrer noopener';

		return anchor;
	},
} as const;

export default links;
