import { Commit, CommitRef, MergeRequest, ProjectRef, SHA } from '../../services/gitlab/types.ts';
import GitLab from '../../services/gitlab/gitlab.ts';
import CherryPicks from './cherry-picks.ts';

export type UnresolvedCommentBase = {
	commit: Commit;
	branches: CommitRef[];
	cherryPicks: UnresolvedCherryPick[];
	mergeRequests: MergeRequest[];
};

export type UnresolvedCherryPick = {
	commit: Commit;
	branches: CommitRef[];
};

export type CommentBase = {
	commit: Commit;
	branch: CommitRef;
	cherryPicks: CherryPick[]
	mergeRequests: MergeRequest[];
};

export type CherryPick = {
	commit: Commit;
	branch: CommitRef;
};

export type Comment = {
	title: string;
	message: string;
	commits: string[];
};

const Comments = {
	async assembleBase(project: ProjectRef, commitSHA: SHA): Promise<UnresolvedCommentBase> {
		const commit = await GitLab.commits.findBySHA(project, commitSHA);

		const [
			branches,
			cherryPicks,
			mergeRequests,
		] = await Promise.all([
			GitLab.commits.refs(project, commit.id, 'all'),
			loadDirtyCherryPicks(project, commit),
			GitLab.commits.mergeRequests(project, commit.id),
		]);

		return {commit, branches, cherryPicks, mergeRequests};
	},
	async assembleComment(base: CommentBase): Promise<Comment> {
		return {
			title: base.commit.message,
			message: base.commit.message,
			commits: [],
		};
	},
	tryAutoResolveBase(base: UnresolvedCommentBase): CommentBase|null {
		if (
			base.branches.length > 1
			|| base.cherryPicks.some(cherryPick => cherryPick.branches.length > 1)
		) {
			return null;
		}

		return this.resolveBaseUsingFirst(base);
	},
	resolveBaseUsingFirst(base: UnresolvedCommentBase): CommentBase {
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
};

async function loadDirtyCherryPicks(project: ProjectRef, commit: Commit): Promise<UnresolvedCherryPick[]> {
	const SHAs = await CherryPicks.findSHAsForCommit(project, commit.id);

	return Promise.all(
		SHAs.map(sha => loadUnresolvedCherryPick(project, sha))
	);
}

async function loadUnresolvedCherryPick(project: ProjectRef, sha: SHA): Promise<UnresolvedCherryPick> {
	const [commit, branches] = await Promise.all([
		GitLab.commits.findBySHA(project, sha),
		GitLab.commits.refs(project, sha, 'branch'),
	]);

	return {commit, branches};
}

export default Comments;
