import projects from './projects.ts';
import commits from './commits.ts';
import { Project } from '../../services/gitlab/types.ts';

export type DaktelaComment = {
	title: string;
	message: string;
	commits: string[];
};

function assemble(): Promise<DaktelaComment> {
	return projects.loadCurrent()
		.then(project => loadCommitDetails(project));
}

function loadCommitDetails(project: Project): Promise<DaktelaComment> {
	return commits.loadCurrent(project)
		.then(commit => {
			// Branch
			// Cherry picks
			// Merge requests
			return {
				title: 'Foo bar',
				message: commit.message,
				commits: [],
			};
		});
}

export default {
	assemble,
};
