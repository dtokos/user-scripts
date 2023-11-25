const placementMap = {
	top: 'top',
	left: 'left',
	right: 'right',
	bottom: 'bottom',
} as const;

type Placement = keyof typeof placementMap;

const tooltip = {
	attach(element: HTMLElement, title: string, placement: Placement = 'top'): void {
		element.dataset.toggle = 'tooltip';
		element.dataset.title = title;
		element.dataset.placement = placement;
		element.dataset.container = 'body';
	},
};

export default tooltip;
