export type Button = {
	element: () => HTMLButtonElement;
	setInitialState: () => void;
	setLoadingState: () => void;
	setSuccessState: () => void;
	setErrorState: () => void;
};

export type OnClick = (button: Button) => void;

function create(onClick: OnClick): Button {
	const buttonElement = document.createElement('button');
	setInitialState(buttonElement);
	configureTooltip(buttonElement);

	const button: Button = {
		element(): HTMLButtonElement {
			return buttonElement;
		},
		setErrorState(): void {
			setErrorState(buttonElement);
		},
		setInitialState(): void {
			setInitialState(buttonElement);
		},
		setLoadingState(): void {
			setLoadingState(buttonElement);
		},
		setSuccessState(): void {
			setSuccessState(buttonElement);
		},
	};

	buttonElement.addEventListener('click', () => onClick(button));

	return button;
}

function configureTooltip(button: HTMLButtonElement): void {
	button.dataset.toggle = 'tooltip';
	button.dataset.placement = 'bottom';
	button.dataset.container = 'body';
	button.dataset.title = 'Copy commit message as Daktela comment';
}

function setInitialState(button: HTMLButtonElement): void {
	const icon = document.createElement('img');
	icon.src = '/uploads/-/system/project/avatar/10/256x256.png';
	icon.classList.add('gl-mr-3');
	icon.style.width = '16px';
	icon.style.height = '16px';
	icon.style.transform = 'scale(1.5)';

	button.innerHTML = '';
	button.appendChild(icon);
	button.insertAdjacentText('beforeend', 'Daktela comment');
	button.classList.add('btn', 'gl-button', 'btn-default', 'gl-ml-3');
	button.disabled = false;
}

function setLoadingState(button: HTMLButtonElement): void {
	const loadingIndicator = document.createElement('span');
	loadingIndicator.classList.add('gl-spinner', 'gl-spinner-dark', 'gl-spinner-sm', 'gl-mr-3');

	button.innerHTML = '';
	button.appendChild(loadingIndicator);
	button.insertAdjacentText('beforeend', 'Loading...');
	button.disabled = true;
}

function setSuccessState(button: HTMLButtonElement): void {
	const use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
	use.setAttribute('href', '/assets/icons-7f1680a3670112fe4c8ef57b9dfb93f0f61b43a2a479d7abd6c83bcb724b9201.svg#status_success');

	const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
	svg.classList.add('s16');
	svg.appendChild(use);

	const iconWrapper = document.createElement('span');
	iconWrapper.classList.add('ci-status-icon-success', 'gl-mr-3');
	iconWrapper.appendChild(svg);

	button.innerHTML = '';
	button.appendChild(iconWrapper);
	button.insertAdjacentText('beforeend', 'Copied');
	button.disabled = false;
}


function setErrorState(button: HTMLButtonElement): void {
	const use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
	use.setAttribute('href', '/assets/icons-7f1680a3670112fe4c8ef57b9dfb93f0f61b43a2a479d7abd6c83bcb724b9201.svg#status_failed');

	const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
	svg.classList.add('s16');
	svg.appendChild(use);

	const iconWrapper = document.createElement('span');
	iconWrapper.classList.add('ci-status-icon-failed', 'gl-mr-3');
	iconWrapper.appendChild(svg);

	button.innerHTML = '';
	button.appendChild(iconWrapper);
	button.insertAdjacentText('beforeend', 'Error');
	button.disabled = false;
}

export default create;
