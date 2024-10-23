import type { Comment, CommitWithBranch } from './types';
import type { Branch, Commit } from '../../services/gitlab/types';

// noinspection SpellCheckingInspection
const BODY_FONTS = [
	'Menlo',
	'\'DejaVu Sans Mono\'',
	'\'Liberation Mono\'',
	'Consolas',
	'\'Ubuntu Mono\'',
	'\'Courier New\'',
	'\'andale mono\'',
	'\'lucida console\'',
	'monospace'
].join(', ');

const BODY_STYLES = [
	`font-family:${BODY_FONTS}`,
	'font-size:0.8125rem',
	'margin-top:8px',
	'margin-bottom:8px',
	'color:#999999',
	'padding:8px 0 8px 8px',
	'border-width:0 0 0 3px',
	'border-style:none none none solid',
	'border-color:#444444',
].join(';');

function render(comment: Comment): string {
	return (
		renderTitle(comment)
		+ renderCommits(comment)
		+ renderMergeRequests(comment)
		+ renderExtra(comment)
		+ renderBody(comment)
	);
}

function renderTitle(comment: Comment): string {
	return `<p><strong>${comment.title}</strong></p>`;
}

function renderCommits(comment: Comment): string {
	return renderListWithTitle('Commits', renderCBs([comment as CommitWithBranch<Branch>].concat(comment.cherryPicks)));
}

function renderCBs(cbs: CommitWithBranch<Branch>[]): string[] {
	return cbs.map(cb => `${renderBranch(cb.branch)} ${renderCommit(cb.commit)}`);
}

function renderBranch(branch: Branch): string {
	return renderAnchor(branch.name, branch.web_url);
}

function renderCommit(commit: Commit): string {
	return renderAnchor(commit.web_url, commit.web_url);
}

function renderMergeRequests(comment: Comment): string {
	return renderListWithTitle('Merge requests', comment.mergeRequests.map(mr => linkify(mr.web_url)));
}

function renderExtra(comment: Comment): string {
	return Object.entries(comment.extra)
		.reduce((html, [name, values]) => {
			return html + renderListWithTitle(name, linkifyAll(values), true);
		}, '');
}

function renderBody(comment: Comment): string {
	if (comment.body === '') {
		return '';
	}

	return (
		`<p>Notes (copied from commit message):</p>`
		+ `<pre style="${BODY_STYLES}">${comment.body}</pre>`
	);
}

function renderListWithTitle(title: string, items: string[], allowCollapse: boolean = false): string {
	if (!items.length) {
		return '';
	}

	if (items.length === 1 && allowCollapse) {
		return `<p>${title}: ${items[0]}</p>`;
	}

	return (
		`<p>${title}:</p>`
		+ renderList(items)
	);
}

function renderList(items: string[]): string {
	return `<ul>${items.map(item => `<li>${item}</li>`).join('')}</ul>`;
}

function renderAnchor(title: string, url: string): string {
	return `<a href="${url}" target="_blank" rel="noreferrer noopener">${title}</a>`;
}

function linkifyAll(values: string[]): string[] {
	return values.map(linkify);
}

function linkify(value: string): string {
	try {
		return renderAnchor(value, new URL(value).toString());
	} catch {
		return value;
	}
}

export default render;
