import createButton from '../../button.ts';
import Current from '../../current.ts';
import copyCommitAsComment from './feature.ts';

function inject(): void {
	const header = document.querySelector('.page-content-header');
	if (!header) return;

	header.appendChild(createButton(processComment));
}

async function processComment(): Promise<void> {
	const currentProject = Current.projects.ref();
	const currentSHA = Current.commits.sha();

	await copyCommitAsComment(currentProject, currentSHA);
}

export default inject;
