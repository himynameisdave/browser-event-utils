module.exports = {
  "extends": [
    "himynameisdave/configurations/babel-node",
    "himynameisdave/configurations/typescript"
  ],
  "parserOptions": {
    "sourceType": "module",
    "tsconfigRootDir": __dirname,
    "project": "./tsconfig.json"
  },
  "settings": {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts"]
    },
    "import/extensions": [".ts"],
    "import/resolver": {
      "typescript": {
        "alwaysTryTypes": true // always try to resolve types under `<roo/>@types` directory even it doesn't contain any source code, like `@types/unist`
      },
    },
  },
  "rules": {
    "@typescript-eslint/prefer-readonly-parameter-types": "off",
    '@typescript-eslint/no-unsafe-return': 'warn',
    'node/no-unsupported-features/es-syntax': 'off',
    'node/file-extension-in-import': 'off',
    "import/extensions": "off",
    "jest/prefer-called-with": "off",
    'arrow-body-style': 'off',
    "max-len": ["warn", {
      "code": 85,
      "ignoreComments": true,
    }]
  }
}
