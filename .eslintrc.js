module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [ 'airbnb', 'prettier' ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 6,
    sourceType: 'module',
    allowImportExportEverywhere: true,
  },
  plugins: [ 'react' ],
  rules: {
    "react/jsx-filename-extension": [0, { "extensions": [".js", ".jsx"] }]  
  },
};