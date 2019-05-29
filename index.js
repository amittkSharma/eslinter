module.exports = {
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  root: true,
  extends: ['react-app', 'eslint:recommended'],
  rules: {
    'default-case': 'error',
    'max-classes-per-file': ['error', 1],
    'max-len': ['error', { code: 120, tabWidth: 4 }],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-empty-function': 'error',
    'no-eq-null': 'error',
  },
}
