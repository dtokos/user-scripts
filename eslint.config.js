import globals from 'globals';
import pluginJs from '@eslint/js';
import tsEslint from 'typescript-eslint';

/** @type import('eslint').Linter.Config */
const common = {files: ['src/**/*.{js,mjs,cjs,ts}']};

/** @type {import('eslint').Linter.Config[]} */
export default [
	{languageOptions: {globals: globals.browser}},
	{...pluginJs.configs.recommended, ...common},
	...tsEslint.configs.recommended.map(tsConfig => ({
		...tsConfig,
		...common,
	})),
];
