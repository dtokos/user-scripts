import type { Branch, Comment, ProjectRef, Ref, SHA } from '@gitlab/types';
import { GitLab } from '@gitlab/gitlab';
import type { CommitWithBranch } from './types';

export const CherryPicks = {
	async findRefs(project: ProjectRef, sha: SHA): Promise<CommitWithBranch<Ref[]>[]> {
		const SHAs = await findSHAsForCommit(project, sha);

		return Promise.all(
			SHAs.map(cherryPickSHA => this.findRef(project, cherryPickSHA))
		);
	},
	async findRef(project: ProjectRef, sha: SHA): Promise<CommitWithBranch<Ref[]>> {
		const [commit, branches] = await Promise.all([
			GitLab.commits.findBySHA(project, sha),
			GitLab.commits.refs(project, sha, 'branch'),
		]);

		return {commit, branches};
	},
	async deRefAll(project: ProjectRef, cherryPicks: CommitWithBranch<Ref>[]): Promise<CommitWithBranch<Branch>[]> {
		return await Promise.all(
			cherryPicks.map(cherryPick => this.deRef(project, cherryPick))
		);
	},
	async deRef(project: ProjectRef, cherryPick: CommitWithBranch<Ref>): Promise<CommitWithBranch<Branch>> {
		const branch = await GitLab.branches.findByName(project, cherryPick.branch.name);
		return {commit: cherryPick.commit, branch};
	},
} as const;

async function findSHAsForCommit(project: ProjectRef, sha: SHA): Promise<SHA[]> {
	const comments = await GitLab.commits.comments(project, sha);
	return parseSHAsFromComments(comments);
}

function parseSHAsFromComments(comments: Comment[]): SHA[] {
	return comments.reduce((SHAs, comment) => {
		const matches = comment.note.match(/mentioned\s+in\s+commit\s+(\w+)/i);

		if (matches !== null) {
			SHAs.push(matches[1]);
		}

		return SHAs;
	}, [] as SHA[]);
}
