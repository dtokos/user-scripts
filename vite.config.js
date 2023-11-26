import {defineConfig} from 'vite';

export default defineConfig({
	build: {
		outDir: 'dist',
		sourcemap: true,
		lib: {
			entry: {
				'daktela-gitlab': './src/daktela/gitlab/main.ts',
			},
			formats: ['es'],
		},
	},
});
