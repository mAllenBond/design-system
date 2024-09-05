import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import compat from 'eslint-plugin-compat';
import noOnlyTests from 'eslint-plugin-no-only-tests';
import noSkipTests from 'eslint-plugin-no-skip-tests';
import react from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import sortKeysFix from 'eslint-plugin-sort-keys-fix';
import testingLibrary from 'eslint-plugin-testing-library';
import unusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';

export default [
  {
    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        ...globals.browser,
      },
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.eslint.json',
      },
      sourceType: 'module',
    },
    plugins: {
      '@typescript-eslint': typescriptEslint,
      compat: compat,
      react: react,
      'react-hooks': pluginReactHooks,
      'sort-keys-fix': sortKeysFix,
      'unused-imports': unusedImports,
    },
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
      '@typescript-eslint/no-redeclare': ['off'],
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/require-await': 'error',
      'eol-last': ['error', 'always'],
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'no-unused-vars': 'off',
      'object-shorthand': ['error', 'never'],
      'padding-line-between-statements': ['error', { blankLine: 'always', next: 'return', prev: '*' }],
      'react/jsx-curly-brace-presence': ['error', { children: 'never', props: 'never' }],
      'react/jsx-key': ['error', { warnOnDuplicates: true }],
      'react/jsx-no-useless-fragment': 'error',
      'react/jsx-uses-react': 'off',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/self-closing-comp': 'error',
      'sort-keys-fix/sort-keys-fix': ['error', 'asc', { caseSensitive: false, natural: true }],
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
          ignoreRestSiblings: true,
          varsIgnorePattern: '^_',
        },
      ],
    },
    settings: {
      'import/resolver': {
        node: true,
        typescript: true,
      },
      polyfills: ['fetch'],
      react: {
        version: 'detect',
      },
    },
  },
  {
    files: ['**/*.stories.*'],
    rules: {
      'import/no-anonymous-default-export': 'off',
    },
  },
  {
    files: ['**/*.test.*'],
    plugins: {
      'no-only-tests': noOnlyTests,
      'no-skip-tests': noSkipTests,
      'testing-library': testingLibrary,
    },
    rules: {
      'no-only-tests/no-only-tests': 'error',
      'no-skip-tests/no-skip-tests': 'error',
    },
  },
];
