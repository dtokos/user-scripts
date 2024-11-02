import FeatureDropdown from './FeatureDropdown.svelte';
import { mount } from 'svelte';
import { Current } from '../current';
import Modals from './Modals.svelte';
import { makeControls as makeGenerateTicketCommentModalControls } from './generate-ticket-comment/controls.svelte';
import type { Controls } from './types';

export function inject(): void {
	const controls = makeControls();

	injectOnCommitDetailPage(controls);
	injectToProjectLastCommit(controls);
	injectModals(controls);
}

function makeControls(): Controls {
	return {
		generateTicketCommentModal: makeGenerateTicketCommentModalControls(),
	};
}

function injectOnCommitDetailPage(controls: Controls): void {
	try {
		const header = document.querySelector('.page-content-header');

		if (!header) {
			return;
		}

		const projectRef = Current.projects.ref();
		const sha = Current.commits.sha();

		mount(FeatureDropdown, {
			target: header,
			props: {
				class: 'gl-ml-3',
				features: [
					{
						icon: 'comment-lines',
						title: 'Generate ticket comment',
						onClick(): void {
							controls.generateTicketCommentModal.open({ projectRef, sha });
						},
					},
				],
			},
		});
	} catch (error) {
		console.error(error);
	}
}

function injectToProjectLastCommit(controls: Controls): void {
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

		mount(FeatureDropdown, {
			target: group,
			props: {
				features: [
					{
						icon: 'comment-lines',
						title: 'Generate ticket comment',
						onClick(): void {
							controls.generateTicketCommentModal.open({ projectRef, sha });
						},
					},
				],
			},
		});
	} catch (error) {
		console.error(error);
	}
}

function injectModals(controls: Controls): void {
	const modalsContainer = document.createElement('div');
	modalsContainer.id = 'daktela-modals';

	document.body.appendChild(modalsContainer);

	mount(Modals, {
		target: modalsContainer,
		props: {
			controls,
		},
	});
}
