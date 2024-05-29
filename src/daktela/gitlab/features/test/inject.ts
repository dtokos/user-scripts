import App from './App.svelte';
import { mount } from 'svelte';

function inject(): void {
	const container = document.querySelector('.home-panel-description-markdown.read-more-container');

	if (!container) {
		return;
	}

	const svelteContainer = document.createElement('div');
	svelteContainer.style.border = '1px solid #f00';
	svelteContainer.style.paddingBlock = '1rem';

	container.appendChild(svelteContainer);

	mount(App, {
		target: svelteContainer,
		props: {
			projectRef: 'v5/pbx',
			sha: '10987e3c6f5d6fed0fd12379327859c930999e6e',
		},
	});
}

export default inject;
