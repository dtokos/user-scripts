const marginMap = {
	0: '0',
	1: '1',
	2: '2',
	3: '3',
	4: '4',
	5: '5',
	6: '6',
	7: '7',
	8: '8',
} as const;

type Margin = keyof typeof marginMap;

const margins = {
	l(size: Margin): string {
		return `gl-ml-${marginMap[size]}`;
	},
	r(size: Margin): string {
		return `gl-mr-${marginMap[size]}`;
	},
	b(size: Margin): string {
		return `gl-mb-${marginMap[size]}`;
	},
} as const;

export default margins;
