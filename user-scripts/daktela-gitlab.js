// ==UserScript==
// @name        GitLab commit
// @description This is your new file, start writing code
// @match       https://gitlab.daktela.com/*
// ==/UserScript==

(function() {
	const script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = 'https://dtokos.github.io/user-scripts/dist/daktela-gitlab.js';

	const head = document.querySelector('head');

	if (!head) {
		return;
	}

	head.appendChild(script);
})();
