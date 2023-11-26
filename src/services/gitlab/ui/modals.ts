import icons from './icons.ts';
import buttons, { Variant as ButtonVariant } from './buttons.ts';

export type ModalBuilder = {
	setTitle: (title: string) => ModalBuilder;
	setBody: (body: HTMLElement) => ModalBuilder;
	appendBody: (body: HTMLElement) => ModalBuilder;
	addButton: (title: string, variant?: ButtonVariant) => ModalBuilder;
	addCloseButton: (title?: string) => ModalBuilder;
	build: () => Modal;
};

export type Modal = {
	open: () => void;
	close: () => void;
};

type Config = {
	title: string,
	body: HTMLElement[],
	buttons: HTMLButtonElement[],
};

const modals = {
	make(): ModalBuilder {
		const config: Config = {
			title: '',
			body: [],
			buttons: [],
		};
		let element: HTMLDivElement|undefined = undefined;

		return {
			setTitle(title: string): ModalBuilder {
				config.title = title;
				return this;
			},
			setBody(body: HTMLElement): ModalBuilder {
				config.body = [body];
				return this;
			},
			appendBody(body: HTMLElement): ModalBuilder {
				config.body.push(body);
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
						element = buildModal(config);
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

function buildModal(config: Config): HTMLDivElement {
	const content = document.createElement('div');
	content.classList.add('modal-content');
	content.appendChild(buildHeader(config));
	content.appendChild(buildBody(config));
	content.appendChild(buildFooter(config));

	const dialog = document.createElement('div');
	dialog.classList.add('modal-dialog');
	dialog.appendChild(content);

	const modal = document.createElement('div');
	modal.classList.add('modal', 'fade', 'gl-modal');
	modal.appendChild(dialog);

	return modal;
}

function buildHeader(config: Config): HTMLDivElement {
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

	return header;
}

function buildBody(config: Config): HTMLDivElement {
	const body = document.createElement('div');
	body.classList.add('modal-body');
	config.body.forEach(element => body.appendChild(element));

	return body;
}

function buildFooter(config: Config): HTMLDivElement {
	const footer = document.createElement('div');
	footer.classList.add('modal-footer');
	config.buttons.forEach(button => footer.appendChild(button));

	return footer;
}

export default modals;
