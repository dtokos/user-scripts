// ==UserScript==
// @name        GitLab commit
// @description This is your new file, start writing code
// @match       https://gitlab.daktela.com/*
// ==/UserScript==

(function() {
	const head = document.querySelector('head');

	if (!head) {
		return;
	}

	const script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = 'https://dtokos.github.io/user-scripts/dist/daktela-gitlab.js';
	head.appendChild(script);

	const style = document.createElement('link');
	style.rel = 'stylesheet';
	style.href = 'https://dtokos.github.io/user-scripts/dist/daktela-gitlab.css';
	head.appendChild(style);
})();
