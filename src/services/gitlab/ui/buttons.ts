const variantMap = {
	'default': 'btn-default',
} as const;

export type Variant = keyof typeof variantMap;

const buttons = {
	default(title: string = ''): HTMLButtonElement {
		return this.make(title, 'default');
	},
	make(title: string = '', variant: Variant = 'default'): HTMLButtonElement {
		const button = document.createElement('button');
		button.textContent = title;
		button.classList.add('btn', 'gl-button', variantMap[variant]);

		return button;
	},
};

export default buttons;
