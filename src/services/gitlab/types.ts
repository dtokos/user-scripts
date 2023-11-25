export type ProjectsResponse = Project[];

export type Project = {
	id: number;
	path: string;
	path_with_namespace: string;
};

export type Commit = {
	id: string;
	message: string;
};
