import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
const config = [
	{
		files: ['**/*.{js,mjs,cjs,ts}'],
		languageOptions: {globals: globals.browser},
		rules: {
			semi: 'error',
			indent: ['error', 'tab'],
			'no-unused-vars': 'error',
		},
		ignores: ['node_modules/*'],
	},
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
];

export default config;
