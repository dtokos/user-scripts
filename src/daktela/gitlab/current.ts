import type { ProjectRef, SHA } from '@gitlab/types';

export const Current = {
	projects: {
		ref(): ProjectRef {
			const matches = location.pathname.match(/^\/?(.*?)(?:\/-\/|$)/);

			if (!matches) {
				throw Error(`Could not parse project ref: ${location.pathname}`);
			}

			return matches[1];
		},
	},
	commits: {
		sha(): SHA {
			const matches = location.pathname.match(/\/-\/commit\/(\w+)/);

			if (!matches) {
				throw Error(`Could not parse commit SHA: ${location.pathname}`);
			}

			return matches[1];
		},
	},
} as const;
