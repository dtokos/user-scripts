import GitLab from '../../services/gitlab/gitlab.ts';
import { Project } from '../../services/gitlab/types.ts';

type ProjectRef = Pick<Project, 'path' | 'path_with_namespace'>;

function loadCurrent(): Promise<Project> {
	return parseRef()
		.then(ref => loadByRef(ref));
}

function parseRef(): Promise<ProjectRef> {
	const matches = location.pathname.match(/^\/?(.*)\/-\//);

	if (!matches) {
		return Promise.reject(`Could not parse project: ${location.pathname}`);
	}

	const pathWithNamespace = matches[1];
	const parts = pathWithNamespace.split('/');

	return Promise.resolve({path: parts[parts.length - 1], path_with_namespace: pathWithNamespace});
}

function loadByRef(ref: ProjectRef): Promise<Project> {
	return GitLab.projects.search(ref.path)
		.then(projects => {
			const matchingProject = projects.find(
				project => project.path_with_namespace === ref.path_with_namespace
			);

			if (!matchingProject) {
				throw new Error(`Could not find project: ${ref.path_with_namespace}`);
			}

			return matchingProject;
		});
}

export default {
	loadCurrent,
};
