import {defineConfig} from 'vite';

export default defineConfig({
	outDir: 'dist',
	emptyOutDir: false,
	sourcemap: true,
	build: {
		lib: {
			entry: {
				'daktela-gitlab': './src/daktela/gitlab/user-script.ts',
			},
			formats: ['es'],
		},
	},
});
