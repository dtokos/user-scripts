import type { Message } from './types';
import type { Commit } from '../../services/gitlab/types';

const Parse = {
	message(commit: Commit): Message {
		const message: Message = {title: '', body: '', ticket: undefined, extra: {}};
		const lines = commit.message.split('\n')
			.map(line => line.trim());

		skipEmptyLines(lines);
		message.title = parseTitle(lines);
		skipEmptyLines(lines);

		while (lines.length) {
			processNextLine(message, lines);
		}

		message.body = message.body.trim();

		return message;
	},
} as const;

function parseTitle(lines: string[]): string {
	const title = lines.shift();

	if (title === undefined) {
		throw Error('Could not parse commit title');
	}

	return title.replace(/\s*#\s*\d+\s*$/, '');
}

function processNextLine(message: Message, lines: string[]): boolean {
	return (
		skipCherryPicks(lines)
		|| collapseEmptyLines(message, lines)
		|| parseTicket(message, lines)
		|| parseExtra(message, lines)
		|| parseBody(message, lines)
	);
}

function skipEmptyLines(lines: string[]): boolean {
	return skipWithPattern(lines, /^\s*$/);
}

function skipCherryPicks(lines: string[]): boolean {
	return skipWithPattern(lines, /\(.*cherry.*picked.*\)/i);
}

function skipWithPattern(lines: string[], pattern: RegExp): boolean {
	let didSkip = false;

	while (lines.length && lines[0].match(pattern)) {
		lines.shift();
		didSkip = true;
	}

	return didSkip;
}

function collapseEmptyLines(message: Message, lines: string[]): boolean {
	let didCollapse = false;

	if (lines.length && lines[0].match(/^\s*$/)) {
		message.body += '\n';
		didCollapse = true;

		skipEmptyLines(lines);
	}

	return didCollapse;
}

function parseTicket(message: Message, lines: string[]): boolean {
	if (lines.length) {
		const match = lines[0].match(/ticket\s*:\s*(http.*)/i);

		if (!match) {
			return false;
		}

		message.ticket = match[1].trim();
		lines.shift();
	}

	return true;
}

function parseExtra(message: Message, lines: string[]) {
	if (lines.length) {
		const match = lines[0].match(/^([^:]+):\s*(http.*)/i);

		if (!match) {
			return false;
		}

		const key = match[1].trim();
		const value = match[2].trim();

		message.extra[key] = message.extra[key] ?? [];
		message.extra[key].push(value);

		lines.shift();
	}

	return true;
}

function parseBody(message: Message, lines: string[]): boolean {
	const nextLine = lines.shift();

	if (nextLine !== undefined) {
		message.body += `${nextLine}\n`
	}

	return nextLine !== undefined;
}

export default Parse;
