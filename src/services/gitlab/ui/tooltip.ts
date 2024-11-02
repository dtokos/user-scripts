type Placement = (
	| 'top'
	| 'left'
	| 'right'
	| 'bottom'
);

export const tooltip = {
	attach(element: HTMLElement, title: string, placement: Placement = 'top'): void {
		element.dataset.toggle = 'tooltip';
		element.dataset.title = title;
		element.dataset.placement = placement;
		element.dataset.container = 'body';
	},
} as const;
