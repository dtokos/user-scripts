import createButton from './button.ts';
import render from './render.ts';
import copy from '../../services/copy/copy.ts';
import comments from './comments.ts';

function inject(): void {
	const header = document.querySelector('.page-content-header');
	if (!header) return;

	header.appendChild(createButton(copyCommitAsComment));
}

async function copyCommitAsComment(): Promise<void> {
	comments.assemble()
		.then(comment => render(comment))
		.then(commentHtml => copy(commentHtml));
}

inject();
