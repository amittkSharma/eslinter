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
    'no-console': 'error',
  },
}
