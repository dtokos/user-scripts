import type { GenerateTicketCommentModalControls } from './generate-ticket-comment/controls.svelte.ts';
import type { Name } from '@gitlab/ui/Icon.svelte';

export type Feature = {
	icon: Name,
	title: string,
	onClick: () => void,
};

export type Controls = {
	generateTicketCommentModal: GenerateTicketCommentModalControls,
};
