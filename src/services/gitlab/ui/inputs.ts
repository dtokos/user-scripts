export const inputs = {
	textArea(value: string = '', readOnly: boolean = false): HTMLTextAreaElement {
		const textArea = document.createElement('textarea');
		textArea.classList.add('gl-form-input', 'gl-form-textarea', 'form-control');
		textArea.value = value;
		textArea.readOnly = readOnly;

		return textArea;
	},
} as const;
