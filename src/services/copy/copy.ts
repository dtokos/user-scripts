function copy(content: string): Promise<void> {
	return navigator.clipboard.writeText(content);
}

export default copy;
