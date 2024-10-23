import tooltip from './tooltip';
import icons from './icons';
import margins from './margins';

const variantMap = {
	'default': 'btn-default',
} as const;

export type Variant = keyof typeof variantMap;

type AsyncState = {
	icon: HTMLElement,
	title: string,
	disabled: boolean,
};

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
	asyncButton(icon: HTMLElement, title: string, onClick: () => Promise<void>) {
		const duration = 1500;

		const initialState: AsyncState = {icon, title, disabled: false};

		const spinner = icons.spinner();
		spinner.classList.add(margins.r(3))
		const loadingState: AsyncState = {icon: spinner, title: 'Loading...', disabled: true};

		const checkCircle = icons.checkCircle();
		checkCircle.classList.add(margins.r(3));
		const successState: AsyncState = {icon: checkCircle, title: 'Success', disabled: true};

		const crossCircle = icons.crossCircle();
		crossCircle.classList.add(margins.r(3));
		const errorState: AsyncState = {icon: crossCircle, title: 'Error', disabled: true};

		const button = buttons.default();
		setState(button, initialState);

		button.addEventListener('click', async () => {
			setState(button, loadingState);

			try {
				await onClick();
				setState(button, successState);
				setTimeout(() => setState(button, initialState), duration);
			} catch (error) {
				setState(button, errorState);
				setTimeout(() => setState(button, initialState), duration);

				throw error;
			}
		});

		return button;
	},
} as const;

function setState(button: HTMLButtonElement, state: AsyncState): void {
	button.innerHTML = '';
	button.appendChild(state.icon);
	button.insertAdjacentText('beforeend', state.title);
	button.disabled = state.disabled;
}

export default buttons;
