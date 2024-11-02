import { UI } from '@gitlab/ui';

export function openCopyModal(content: string, description: HTMLElement|undefined = undefined): void {
	const container = UI.containers.justifyBetween(
		buildDescription(description),
		UI.buttons.copy(content),
	);
	container.classList.add(UI.margins.b(2));

	const modal = UI.modals.make()
		.setTitle('Copy')
		.appendBody(container)
		.appendBody(UI.inputs.textArea(content, true))
		.addCloseButton()
		.build();

	modal.open();
}

function buildDescription(content: HTMLElement|undefined): HTMLDivElement {
	const wrapper = document.createElement('div');

	if (content !== undefined) {
		wrapper.appendChild(content);
	}

	return wrapper;
}
