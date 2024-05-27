export type ProjectRef = number | string;

export type SHA = string;

export type Commit = {
	id: SHA;
	message: string;
	web_url: string;
};

export type RefType = 'branch' | 'tag';

export type Ref = {
	type: RefType;
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
