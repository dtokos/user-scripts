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
		let element: HTMLDialogElement|undefined = undefined;

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
						if (element === undefined) {
							element = buildDialog(config);
							element.addEventListener('close', () => {
								element?.remove();
								element = undefined;
							});

							document.body.appendChild(element);
						}

						element.showModal();
					},
					close(): void {
						element?.close();
					},
				};
			},
		};
	},
} as const;

function buildDialog(config: Config): HTMLDialogElement {
	const content = document.createElement('div');
	content.classList.add('modal-content');
	content.appendChild(buildHeader(config));
	content.appendChild(buildBody(config));
	content.appendChild(buildFooter(config));

	const dialog = document.createElement('dialog');
	dialog.classList.add('gl-dialog-modal');
	dialog.appendChild(content);

	dialog.addEventListener('click', event => {
		if (!(event.target instanceof Element)) {
			return;
		}

		if (event.target === dialog || dismissClicked(dialog, event.target)) {
			dialog.close();
		}
	});

	return dialog;
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

function dismissClicked(dialog: HTMLDialogElement, target: Element): boolean {
	const dismiss = target.closest('[data-dismiss="modal"], dialog');
	return dismiss !== null && dismiss !== dialog;
}

export default modals;
