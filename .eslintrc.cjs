module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended', // conjunto de regras recomendadas pelo ESLint
    'plugin:@typescript-eslint/recommended', // boas práticas específicas para typescript
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended', // adicionar o plugin prettier
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'prettier'], // adicionar o plugin prettier
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
