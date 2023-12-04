import Current from '../../current.ts';
import copyCommitAsComment from './feature.ts';
import { ProjectRef, SHA } from '../../../../services/gitlab/types.ts';
import UI from '../../../../services/gitlab/ui.ts';

function inject(): void {
	injectOnCommitIndexPage();
	injectOnCommitDetailPage();
	injectToProjectLastCommit()
}

function injectOnCommitIndexPage(): void {
	try {
		const lists = document.querySelectorAll('#commits-list');

		if (!lists) {
			return;
		}

		const ref = Current.projects.ref();
		injectToCommitLists(ref, lists);

		lists.forEach(list => {
			const observer = new MutationObserver(records => {
				records.filter(record => record.type === 'childList')
					.forEach(record => injectToCommitLists(ref, record.addedNodes));
			});

			observer.observe(list, {subtree: true, childList: true});
		});
	} catch (error) {
		console.log(error);
	}
}

function injectToCommitLists(ref: ProjectRef, containers: NodeList): void {
	containers.forEach(container => {
		if (!(container instanceof HTMLElement)) {
			return;
		}

		container.querySelectorAll('.commit .commit-sha-group')
			.forEach(group => {
				const shaElement = group.querySelector('[data-clipboard-text]');

				if (!shaElement || !(shaElement instanceof HTMLElement)) {
					return;
				}

				const sha = shaElement.dataset.clipboardText ?? '';

				group.appendChild(makeButton(ref, sha));
			});
	});
}

function injectOnCommitDetailPage(): void {
	try {
		const header = document.querySelector('.page-content-header');

		if (!header) {
			return;
		}

		const ref = Current.projects.ref();
		const sha = Current.commits.sha();

		const button = makeButton(ref, sha);
		button.classList.add(UI.margins.l(3));

		header.appendChild(button);
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

		const ref = Current.projects.ref();
		const sha = shaElement.dataset.clipboardText ?? '';

		group.appendChild(makeButton(ref, sha));
	} catch (error) {
		console.error(error);
	}
}

function makeButton(ref: ProjectRef, sha: SHA): HTMLButtonElement {
	const icon = UI.icons.daktela();
	icon.classList.add(UI.margins.r(3));

	return UI.buttons.asyncButton(icon, 'Daktela comment', async () => {
		await copyCommitAsComment(ref, sha);
	});
}

export default inject;
