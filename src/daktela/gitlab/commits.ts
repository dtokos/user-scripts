import { Commit, Project } from '../../services/gitlab/types.ts';
import Gitlab from '../../services/gitlab/api.ts';

function loadCurrent(project: Project): Promise<Commit> {
	return parseSha()
		.then(sha => Gitlab.findCommitBySha(project.id, sha));
}

function parseSha(): Promise<string> {
	const matches = location.pathname.match(/\/-\/commit\/(\w+)/);

	if (!matches) {
		return Promise.reject(`Could not parse commit SHA: ${location.pathname}`);
	}

	return Promise.resolve(matches[1]);
}

export default {
	loadCurrent,
};
