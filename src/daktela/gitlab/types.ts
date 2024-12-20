import type { Branch, Commit, MergeRequest } from '@gitlab/types';

export type CommitWithBranch<TBranch> = TBranch extends Array<infer TItem>
	? { commit: Commit; branches: TItem[]; }
	: { commit: Commit; branch: TBranch; };
export type Base<T> = CommitWithBranch<T> & {
	cherryPicks: CommitWithBranch<T>[];
	mergeRequests: MergeRequest[];
};
export type Message = {
	title: string;
	body: string;
	ticket?: string;
	extra: Record<string, string[]>;
};
export type Comment = Base<Branch> & Message;
