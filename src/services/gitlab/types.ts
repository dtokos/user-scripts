export type ProjectRef = number|string;

export type SHA = string;

export type Commit = {
	id: SHA;
	message: string;
	web_url: string;
};

export type CommitRefType = 'branch' | 'tag';

export type CommitRef = {
	type: string;
	name: string;
};

export type Comment = {
	note: string;
};

export type MergeRequest = {
	web_url: string;
};

export type Branch = {
	name: string;
	web_url: string;
};
