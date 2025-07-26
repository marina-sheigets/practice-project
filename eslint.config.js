import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import reactPlugin from 'eslint-plugin-react';
import globals from 'globals';
import i18next from 'eslint-plugin-i18next';
import jest from 'eslint-plugin-jest';

export default [
    i18next.configs['flat/recommended'],
    jest.configs['flat/recommended'],
    {
        ignores: [
            'build/',
            'node_modules/',
            'public/',
            'src/shared/lib/tests/',
            '**/*.d.ts',
            'webpack.config.ts',
            '**/*config',
        ],
    },
    js.configs.recommended,
    {
        files: ['**/*.ts', '**/*.tsx'],
        languageOptions: {
            globals: {
                ...globals.browser,
            },
            parser: tsParser,
            parserOptions: {
                project: './tsconfig.json',
                ecmaVersion: 2021,
                sourceType: 'module',
                ecmaFeatures: { jsx: true },
            },
        },
        plugins: {
            '@typescript-eslint': tseslint,
            react: reactPlugin,
        },
        rules: {
            semi: "error",
            "prefer-const": "error",
            "no-unused-vars": "off", // Turn off base rule for TypeScript files
            "@typescript-eslint/no-unused-vars": [
                "error",
                {
                    args: "after-used",
                    vars: "all",
                    varsIgnorePattern: "^_",
                }
            ]
        },
        overrides: [
            {
                files: ['**/*.test.{ts,tsx}', '**/*.spec.{ts,tsx}'],
                rules: {
                    'i18next/no-literal-string': 'off'
                }
            }
        ]
    },

];