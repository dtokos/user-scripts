import { DaktelaComment } from './comments.ts';

function render(comment: DaktelaComment): string {
	return (
		`<p>${comment.title}</p>`
	//<p>Commits:</p><ul><li><a href="https://gitlab.daktela.com/v5/pbx/-/tree/main/6.27" target="_blank" rel="noreferrer noopener">main/6.27</a> <a href="${commit}" target="_blank" rel="noreferrer noopener">${commit}</a></li></ul>`
	);
}

export default render;
