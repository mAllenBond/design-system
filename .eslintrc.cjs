module.exports = {
  env: {
    browser: true, es2020: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:compat/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:react/jsx-runtime',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:storybook/recommended',
    'prettier',
  ],
  overrides: [
    {
      files: ['**/*.stories.*'],
      rules: {
        'import/no-anonymous-default-export': 'off',
      },
    },
    {
      extends: ['plugin:testing-library/react'],
      files: ['**/*.test.*'],
      plugins: ['no-only-tests', 'no-skip-tests', 'testing-library'],
      rules: {
        'no-only-tests/no-only-tests': 'error',
        'no-skip-tests/no-skip-tests': 'error',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    project: './tsconfig.eslint.json',
  },
  plugins: ['@typescript-eslint', 'sort-keys-fix', 'unused-imports'],
  root: true,
  rules: {
    '@typescript-eslint/no-redeclare': ['off'],
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/require-await': 'error',
    'eol-last': ['error', 'always'],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-unused-vars': 'off',
    'object-shorthand': ['error', 'never'],
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        next: 'return',
        prev: '*',
      },
    ],
    'react/jsx-curly-brace-presence': [
      'error',
      {
        children: 'never',
        props: 'never',
      },
    ],
    'react/jsx-key': ['error', { warnOnDuplicates: true }],
    'react/jsx-no-useless-fragment': 'error',
    'react/jsx-uses-react': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/self-closing-comp': 'error',
    'sort-keys-fix/sort-keys-fix': [
      'error',
      'asc',
      {
        caseSensitive: false,
        natural: true,
      },
    ],
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
}
