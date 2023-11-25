import createButton, { Button } from './button.ts';
import render from './render.ts';
import copy from '../../services/copy/copy.ts';
import comments from './comments.ts';

const DURATION = 1_500;

function inject(): void {
	const header = document.querySelector('.page-content-header');
	if (!header) return;

	header.appendChild(createButton(copyCommitAsComment).element());
}

function copyCommitAsComment(button: Button): void {
	button.setLoadingState();

	comments.assemble()
		.then(comment => render(comment))
		.then(commentHtml => copy(commentHtml))
		.then(() => {
			button.setSuccessState();
			setTimeout(() => button.setInitialState(), DURATION);
		})
		.catch(error => {
			button.setErrorState();
			setTimeout(() => button.setInitialState(), DURATION);
			throw error;
		});
}

inject();
