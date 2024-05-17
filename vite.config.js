import {defineConfig} from 'vite';
import {svelte} from '@sveltejs/vite-plugin-svelte';
import path from 'path';

export default defineConfig({
	plugins: [svelte()],
	resolve: {
		alias: {
			'@gitlab': path.resolve(__dirname, './src/services/gitlab'),
		},
	},
	build: {
		outDir: 'dist',
		sourcemap: true,
		cssCodeSplit: true,
		lib: {
			entry: {
				'daktela-gitlab': './src/daktela/gitlab/main.ts',
			},
			formats: ['es'],
		},
	},
});
