import App from './App.svelte';
import { mount } from 'svelte';
import Current from '../../current.ts';
import Counter from './Counter.svelte';
import useCounter from './useCounter.svelte.ts';

function injectOnCommitDetailPage(): void {
	try {
		const header = document.querySelector('.page-content-header');

		if (!header) {
			return;
		}

		const projectRef = Current.projects.ref();
		const sha = Current.commits.sha();

		mount(App, {
			target: header,
			props: {
				class: 'gl-ml-3',
				projectRef,
				sha,
			},
		});
	} catch (error) {
		console.error(error);
	}
}

function injectToProjectLastCommit(): void {
	try {
		const group = document.querySelector([
			'.project-last-commit .js-commit-sha-group',
			'.blob-commit-info .commit-sha-group',
		].join(', '));

		if (!group) {
			return;
		}

		const shaElement = group.querySelector('[data-clipboard-text]');

		if (!shaElement || !(shaElement instanceof HTMLElement)) {
			return;
		}

		const projectRef = Current.projects.ref();
		const sha = shaElement.dataset.clipboardText ?? '';

		mount(App, {
			target: group,
			props: {
				projectRef,
				sha,
			},
		});
	} catch (error) {
		console.error(error);
	}
}

function injectTest(): void {
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

function injectCounterTest(): void {
	const container = document.querySelector('.home-panel-description-markdown.read-more-container');

	if (!container) {
		return;
	}

	const svelteContainer = document.createElement('div');
	svelteContainer.style.border = '1px solid #f00';
	svelteContainer.style.paddingBlock = '1rem';

	container.appendChild(svelteContainer);

	mount(Counter, {
		target: svelteContainer,
		props: {
			counter: useCounter(),
		},
	});
}

function inject(): void {
	// injectTest();
	injectCounterTest();
	injectOnCommitDetailPage();
	injectToProjectLastCommit();
}

export default inject;
