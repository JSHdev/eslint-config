# @JSHdev/eslint-config

> Musma's ESLint config with TypeScript support

Note: this config works for both JS and TS files.

## Installation

Within `.npmrc` file in your project:

```
@jshdev:registry=https://npm.pkg.github.com/
```

And then,

```
$ npm install @jshdev/eslint-config --save-dev

or

$ yarn add @jshdev/eslint-config --dev --update-checksums
```

## Configuration

Within your `.eslintrc` file:

```json
{
  "extends": ["@jshdev"]
}
```

If you use react,

```json
{
  "env": {
    "browser": true
  },
  "extends": ["@jshdev"],
  "ecmaFeatures": {
    "jsx": true
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
```

## License

Open source [licensed as MIT](./LICENSE).
