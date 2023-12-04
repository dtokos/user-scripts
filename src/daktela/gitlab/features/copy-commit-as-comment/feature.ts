import { ProjectRef, SHA } from '../../../../services/gitlab/types.ts';
import Comments from '../../comments.ts';
import { Comment } from '../../types.ts';
import openCopyModal from '../../copy-modal.ts';
import render from '../../render.ts';
import UI from '../../../../services/gitlab/ui.ts';

async function copyCommitAsComment(project: ProjectRef, commit: SHA): Promise<void> {
	const base = await Comments.assembleBase(project, commit);
	//const autoResolvedBase = Comments.tryAutoResolveBase(base);
	const autoResolvedBase = Comments.resolveBaseUsingFirst(base);

	if (autoResolvedBase !== null) {
		const comment = await Comments.assembleComment(project, autoResolvedBase);
		openCopy(comment);
	} else {
		// TODO: Implement modal
		throw Error('Comment could not be auto-resolved');
	}
}

function openCopy(comment: Comment): void {
	openCopyModal(render(comment), ticketDescription(comment));
}

function ticketDescription(comment: Comment): HTMLSpanElement|undefined {
	if (!comment.ticket) {
		return undefined;
	}

	const span = document.createElement('span');
	span.textContent = 'Ticket: ';
	span.appendChild(UI.links.external(comment.ticket));

	return span;
}

export default copyCommitAsComment;
