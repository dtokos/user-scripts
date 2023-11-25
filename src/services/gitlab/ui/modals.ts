import icons from './icons.ts';
import buttons, { Variant as ButtonVariant } from './buttons.ts';

export type ModalBuilder = {
	setTitle: (title: string) => ModalBuilder;
	addButton: (title: string, variant?: ButtonVariant) => ModalBuilder;
	addCloseButton: (title?: string) => ModalBuilder;
	build: () => Modal;
};

export type Modal = {
	open: () => void;
	close: () => void;
};

type Config = {
	id: string,
	title: string,
	buttons: HTMLButtonElement[],
};

const modals = {
	make(id: string): ModalBuilder {
		const config: Config = {
			id,
			title: '',
			buttons: [],
		};
		let element: HTMLDivElement|undefined = undefined;

		return {
			setTitle(title: string): ModalBuilder {
				config.title = title;
				return this;
			},
			addButton(title: string, variant: ButtonVariant = 'default'): ModalBuilder {
				config.buttons.push(buttons.make(title, variant));
				return this;
			},
			addCloseButton(title: string = 'Close'): ModalBuilder {
				const button = buttons.default(title);
				button.dataset.dismiss = 'modal';
				config.buttons.push(button);

				return this;
			},
			build(): Modal {
				return {
					open(): void {
						element = buildElement(config);
						$(element).on('hidden.bs.modal', event => event.target.remove());
						document.body.appendChild(element);

						$(element).modal('show');
					},
					close(): void {
						if (element !== undefined) {
							$(element).modal('hide');
						}
					},
				};
			},
		};
	},
};

function buildElement(config: Config): HTMLDivElement {
	const title = document.createElement('h4');
	title.classList.add('modal-title');
	title.textContent = config.title;

	const close = document.createElement('button');
	close.classList.add('btn', 'btn-default', 'btn-sm', 'gl-button', 'btn-default-tertiary', 'btn-icon');
	close.dataset.dismiss = 'modal';
	close.appendChild(icons.close());

	const header = document.createElement('div');
	header.classList.add('modal-header');
	header.appendChild(title);
	header.appendChild(close);

	const footer = document.createElement('div');
	footer.classList.add('modal-footer');
	config.buttons.forEach(button => footer.appendChild(button));

	const content = document.createElement('div');
	content.classList.add('modal-content');
	content.appendChild(header);
	content.appendChild(footer);

	const dialog = document.createElement('div');
	dialog.classList.add('modal-dialog');
	dialog.appendChild(content);

	const modal = document.createElement('div');
	modal.id = config.id;
	modal.classList.add('modal', 'fade', 'gl-modal');
	modal.appendChild(dialog);

	return modal;
}

export default modals;
