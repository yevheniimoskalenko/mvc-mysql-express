module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'no-restricted-imports': [
      'error',
      {
        paths: ['import1', 'import2'],
        patterns: ['import1/private/*', 'import2/*', '!import2/good'],
      },
    ],
    'import/extensions': 'always',
  },
};
