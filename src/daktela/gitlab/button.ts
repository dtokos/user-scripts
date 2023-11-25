import UI from '../../services/gitlab/ui.ts';

const DURATION = 1_500;

function create(onClick: () => Promise<void>): HTMLButtonElement {
	const button = UI.buttons.default();
	button.classList.add(UI.margins.l(3));
	UI.tooltip.attach(button, 'Copy commit message as Daktela comment', 'bottom');
	setInitialState(button);

	button.addEventListener('click', async () => {
		setLoadingState(button);

		try {
			await onClick();
			setSuccessState(button);
			setTimeout(() => setInitialState(button), DURATION);
		} catch (error) {
			setErrorState(button);
			setTimeout(() => setInitialState(button), DURATION);

			throw error;
		}
	});

	return button;
}

function setInitialState(button: HTMLButtonElement): void {
	const icon = UI.icons.daktela();
	icon.classList.add(UI.margins.r(3));

	button.innerHTML = '';
	button.appendChild(icon);
	button.insertAdjacentText('beforeend', 'Daktela comment');
	button.disabled = false;
}

function setLoadingState(button: HTMLButtonElement): void {
	const loadingIndicator = UI.icons.spinner();
	loadingIndicator.classList.add(UI.margins.r(3));

	button.innerHTML = '';
	button.appendChild(loadingIndicator);
	button.insertAdjacentText('beforeend', 'Loading...');
	button.disabled = true;
}

function setSuccessState(button: HTMLButtonElement): void {
	const icon = UI.icons.checkCircle();
	icon.classList.add(UI.margins.r(3));

	button.innerHTML = '';
	button.appendChild(icon);
	button.insertAdjacentText('beforeend', 'Success');
	button.disabled = false;
}


function setErrorState(button: HTMLButtonElement): void {
	const icon = UI.icons.crossCircle();
	icon.classList.add(UI.margins.r(3));

	button.innerHTML = '';
	button.appendChild(icon);
	button.insertAdjacentText('beforeend', 'Error');
	button.disabled = false;
}

export default create;
