module.exports = {
  "root": true,
  "parser": "@typescript-eslint/parser",
  "plugins": [
    "react",
    "react-hooks",
    "@typescript-eslint"
  ],
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "extends": [
    "airbnb-typescript",
    "plugin:import/errors", 
    "plugin:import/warnings",
    "plugin:import/typescript"
  ],
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "project": "./tsconfig.json",
    "extraFileExtensions": ['.json']
  },
  "ignorePatterns": [".eslintrc.js", "tsconfig.json"],
  "rules": {
    "react-hooks/rules-of-hooks": "error",
    "react/jsx-one-expression-per-line": 0,
    "quotes": ["error", "single"],
    // we want to force semicolons
    "semi": ["error", "always"],
    // we use 2 spaces to indent our code
    "indent": ["error", 2, { "SwitchCase": 1 }],
    // we want to avoid extraneous spaces
    "no-multi-spaces": ["error"],
    "import/no-extraneous-dependencies": ["error", {"devDependencies": true}]
  }
}
