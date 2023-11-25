import { Comment } from './comments.ts';

function render(comment: Comment): string {
	return (
		`<p>${comment.title}</p>`
	);
}

export default render;
