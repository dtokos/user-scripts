import { Comment } from './types.ts';

function render(comment: Comment): string {
	return (
		`<p>${comment.title}</p>`
	);
}

export default render;
