import createButton from './button.ts';
import render from './render.ts';
import Comments from './comments.ts';
import Current from './current.ts';
import openCopyModal from './copy-modal.ts';
import { Comment } from './types.ts';
import UI from '../../services/gitlab/ui.ts';

function inject(): void {
	const header = document.querySelector('.page-content-header');
	if (!header) return;

	header.appendChild(createButton(processComment));
}

async function processComment(): Promise<void> {
	const currentProject = Current.projects.ref();
	const currentSHA = Current.commits.sha();

	const base = await Comments.assembleBase(currentProject, currentSHA);
	//const autoResolvedBase = Comments.tryAutoResolveBase(base);
	const autoResolvedBase = Comments.resolveBaseUsingFirst(base);

	if (autoResolvedBase !== null) {
		const comment = await Comments.assembleComment(currentProject, autoResolvedBase);
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

inject();
