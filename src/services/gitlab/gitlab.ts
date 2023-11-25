import { Commit, ProjectsResponse } from './types.ts';

const BASE_URL = '/api/v4';

const GitLab = {
	projects: {
		async search(name: string): Promise<ProjectsResponse> {
			return get('projects', {search: name});
		},
	},
	commits: {
		async findBySha(project: number|string, sha: string): Promise<Commit> {
			return get(`projects/${encodeURIComponent(project)}/repository/commits/${sha}`);
		},
	},
};

async function get<TResponse>(endpoint: string, query: Record<string, string> = {}): Promise<TResponse> {
	const url = new URL(`${BASE_URL}/${endpoint}`, location.origin);
	Object.entries(query)
		.forEach(([name, value]) => url.searchParams.append(name, value));

	let response = await fetch(url);

	return await response.json();
}

export default GitLab;
