import { Comment, ProjectRef, SHA } from '../../services/gitlab/types.ts';
import GitLab from '../../services/gitlab/gitlab.ts';

const CherryPicks = {
	async findSHAsForCommit(project: ProjectRef, sha: SHA): Promise<SHA[]> {
		const comments = await GitLab.commits.comments(project, sha);
		return parseSHAsFromComments(comments);
	},
};

function parseSHAsFromComments(comments: Comment[]): SHA[] {
	return comments.reduce((SHAs, comment) => {
		const matches = comment.note.match(/mentioned\s+in\s+commit\s+(\w+)/i);

		if (matches !== null) {
			SHAs.push(matches[1]);
		}

		return SHAs;
	}, [] as SHA[]);
}

export default CherryPicks;
