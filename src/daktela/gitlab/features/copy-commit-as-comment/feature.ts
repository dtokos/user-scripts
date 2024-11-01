import type { ProjectRef, SHA } from '@gitlab/types';
import Comments from '../../comments';
import type { Comment } from '../../types';
import openCopyModal from '../../copy-modal';
import render from '../../render';
import UI from '../../../../services/gitlab/ui';

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
	const rendered = render(comment);
	console.log(rendered);
	openCopyModal(rendered, ticketDescription(comment));
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
