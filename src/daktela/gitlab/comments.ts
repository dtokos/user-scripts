import type { ProjectRef, Ref, SHA } from '@gitlab/types';
import { GitLab } from '@gitlab/gitlab';
import { CherryPicks } from './cherry-picks';
import type { Base, Comment } from './types';
import { Parse } from './parse';

export const Comments = {
	async assembleBase(project: ProjectRef, sha: SHA): Promise<Base<Ref[]>> {
		const commit = await GitLab.commits.findBySHA(project, sha);

		const [
			branches,
			cherryPicks,
			mergeRequests,
		] = await Promise.all([
			GitLab.commits.refs(project, commit.id, 'all'),
			CherryPicks.findRefs(project, commit.id),
			GitLab.commits.mergeRequests(project, commit.id),
		]);

		return {commit, branches, cherryPicks, mergeRequests};
	},
	async assembleComment(project: ProjectRef, base: Base<Ref>): Promise<Comment> {
		const [branch, cherryPicks] = await Promise.all([
			GitLab.branches.findByName(project, base.branch.name),
			CherryPicks.deRefAll(project, base.cherryPicks),
		]);
		const message = Parse.message(base.commit);

		return {
			commit: base.commit,
			branch,
			cherryPicks,
			mergeRequests: base.mergeRequests,
			title: message.title,
			body: message.body,
			ticket: message.ticket,
			extra: message.extra,
		};
	},
	tryAutoResolveBase(base: Base<Ref[]>): Base<Ref>|null {
		if (
			base.branches.length > 1
			|| base.cherryPicks.some(cherryPick => cherryPick.branches.length > 1)
		) {
			return null;
		}

		return this.resolveBaseUsingFirst(base);
	},
	resolveBaseUsingFirst(base: Base<Ref[]>): Base<Ref> {
		return {
			commit: base.commit,
			branch: base.branches[0],
			cherryPicks: base.cherryPicks.map(cherryPick => ({
				commit: cherryPick.commit,
				branch: cherryPick.branches[0],
			})),
			mergeRequests: base.mergeRequests,
		};
	},
} as const;
