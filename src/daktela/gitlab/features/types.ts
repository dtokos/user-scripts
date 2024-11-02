import type { GenerateTicketCommentModalControls } from './generate-ticket-comment/controls.svelte';
import type { IconName } from '@gitlab/ui/Icon.svelte';

export type Feature = {
	icon: IconName,
	title: string,
	onClick: () => void,
};

export type Controls = {
	generateTicketCommentModal: GenerateTicketCommentModalControls,
};
