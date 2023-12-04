import tooltip from './tooltip.ts';
import icons from './icons.ts';

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
	copy(content: string): HTMLButtonElement {
		const button = document.createElement('button');
		button.classList.add('btn', 'btn-clipboard', 'gl-button', 'btn-default-tertiary', 'btn-icon', 'btn-sm');
		button.dataset.clipboardText = content;
		tooltip.attach(button, 'Copy');
		button.appendChild(icons.clipboard());

		return button;
	},
} as const;

export default buttons;
