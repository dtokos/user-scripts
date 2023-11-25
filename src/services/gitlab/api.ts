import { Commit, ProjectsResponse } from './types.ts';

const BASE_URL = '/api/v4';

const api = {
	searchForProject(name: string): Promise<ProjectsResponse> {
		return get('projects', {search: name})
	},
	findCommitBySha(projectId: number, sha: string): Promise<Commit> {
		return get(`projects/${projectId}/repository/commits/${sha}`);
	},
};

function get<TResponse>(endpoint: string, query: Record<string, string> = {}): Promise<TResponse> {
	const url = new URL(`${BASE_URL}/${endpoint}`);
	Object.entries(query)
		.forEach(([name, value]) => url.searchParams.append(name, value));

	return fetch(url)
		.then(response => response.json());
}

export default api;
