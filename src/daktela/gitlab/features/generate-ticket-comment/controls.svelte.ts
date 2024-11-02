import type { Args } from './GenerateTicketCommentModal.svelte';

export type GenerateTicketCommentModalControls = {
	readonly args: Args | undefined,
	open: (args: Args) => void,
	close: () => void,
};

export function makeControls(): GenerateTicketCommentModalControls {
	let state: Args | undefined = $state(undefined);

	function open(args: Args): void {
		state = args;
	}

	function close(): void {
		state = undefined;
	}

	return {
		get args() { return state },
		open,
		close,
	};
}
