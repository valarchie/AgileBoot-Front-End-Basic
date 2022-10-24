module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
      },
    },
  },
  extends: ['plugin:vue/vue3-essential', 'airbnb-base', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['vue'],
  rules: {
    'import/no-cycle': 0,
    'import/prefer-default-export': 0,
    'import/order': 0,
    'no-lonely-if': 0,
    'no-unused-expressions': 0,
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: ['401', '404', 'Pagination', 'login', 'register', 'index', 'Navbar', 'Link', 'Logo'],
      },
    ],
    'no-use-before-define': 0,
    'import/no-extraneous-dependencies': 0,
    'no-restricted-syntax': 0,
    'no-continue': 0,
    'guard-for-in': 0,
    'no-param-reassign': 0,
    'no-plusplus': 0,
    'no-shadow': 0,
    'import/extensions': 0,
    'func-names': 0,
  },
};
