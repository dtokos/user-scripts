const useCounter = () => {
	let count = $state(0);
	const increment = () => count = count + 1;

	return {
		get count() { return count; },
		increment,
	};
};

export default useCounter;
