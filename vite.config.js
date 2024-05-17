import {defineConfig} from 'vite';
import {svelte} from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
	plugins: [svelte()],
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
