// ==UserScript==
// @name        Gitlab commit
// @description This is your new file, start writing code
// @match       https://gitlab.daktela.com/v5/*/-/*
// ==/UserScript==

(function() {
	const script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = 'https://raw.githubusercontent.com/dtokos/user-scripts/main/dist/daktela-gitlab.js';

	const head = document.querySelector('head');

	if (!head) {
		return;
	}

	head.appendChild(script);
});
