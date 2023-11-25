import createButton from './button.ts';
import render from './render.ts';
import copy from '../../services/copy.ts';
import Comments from './comments.ts';
import Current from './current.ts';

function inject(): void {
	const header = document.querySelector('.page-content-header');
	if (!header) return;

	header.appendChild(createButton(copyCommitAsComment));
}

async function copyCommitAsComment(): Promise<void> {
	const currentProject = Current.projects.ref();
	const currentSHA = Current.commits.sha();

	const base = await Comments.assembleBase(currentProject, currentSHA);
	const autoResolvedBase = Comments.tryAutoResolveBase(base);

	if (autoResolvedBase !== null) {
		const comment = await Comments.assembleComment(autoResolvedBase);
		await copy(render(comment));
	} else {
		// TODO: Implement modal
		throw Error('Comment could not be auto-resolved');
	}
}

inject();
