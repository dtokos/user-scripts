import { Comment, Commit, CommitRef, CommitRefType, MergeRequest, ProjectRef, SHA } from './types.ts';

const BASE_URL = '/api/v4';

const GitLab = {
	commits: {
		async findBySHA(project: ProjectRef, sha: SHA): Promise<Commit> {
			return get(`projects/${e(project)}/repository/commits/${sha}`);
		},
		async refs(project: ProjectRef, sha: SHA, type: CommitRefType|'all' = 'all'): Promise<CommitRef[]> {
			return get(`projects/${e(project)}/repository/commits/${sha}/refs`, {type});
		},
		async comments(project: ProjectRef, sha: SHA): Promise<Comment[]> {
			return get(`projects/${e(project)}/repository/commits/${sha}/comments`);
		},
		async mergeRequests(project: ProjectRef, sha: SHA): Promise<MergeRequest[]> {
			return get(`projects/${e(project)}/repository/commits/${sha}/merge_requests`);
		},
	},
};

function e(value: string|number|boolean): string {
	return encodeURIComponent(value);
}

async function get<TResponse>(endpoint: string, query: Record<string, string> = {}): Promise<TResponse> {
	const url = new URL(`${BASE_URL}/${endpoint}`, location.origin);
	Object.entries(query)
		.forEach(([name, value]) => url.searchParams.append(name, value));

	let response = await fetch(url);

	return await response.json();
}

export default GitLab;
