<div align="center">
  <img
    src="./src/images/logos/three-icon.png?raw=true"
    alt="Three.js logo"
    height="100px"
  />
  <img
    src="./src/images/logos/webpack-logo.svg?raw=true"
    alt="Webpack logo"
    height="94px"
  />
</div>
  <h1 align="center"!>Three.js Webpack Boilerplate</h1>
  <p align="center">
    A Webpack 5 & Three.js boilerplate together with Babel, Sass, ESLint, Hot Module Replacement and Stylelint, optimized for development/production.
  </p>
  <br>
</div>

## Installation

```
git clone git@github.com:brandflugan/three-js-webpack-boilerplate
npm i
```

## Usage

### Development server

```bash
npm start
```

You can view the development server at `localhost:8080`.

### Production build

```bash
npm run build
```

> Note: Install [http-server](https://www.npmjs.com/package/http-server) globally to deploy a simple server.

```bash
npm i -g http-server
```

You can view the deploy by creating a server in `dist`.

```bash
cd dist && http-server
```

### Fix lint issues

#### Javascript

```bash
npm run fix-js
```

#### SCSS/CSS

```bash
npm run fix-styling
```

## Features

-   [Three.js](https://threejs.org/)
-   [Webpack](https://webpack.js.org/)
-   [Babel](https://babeljs.io/)
-   [Sass](https://sass-lang.com/)
-   [ESLint](https://eslint.org/)
-   [stylelint](https://stylelint.io/)

## Dependencies

### Three.js

-   [`Three.js`](https://github.com/mrdoob/three.js) - Three.js framework.

### Webpack

-   [`webpack`](https://github.com/webpack/webpack) - Module and asset bundler.
-   [`webpack-cli`](https://github.com/webpack/webpack-cli) - Command line interface for Webpack.
-   [`webpack-dev-server`](https://github.com/webpack/webpack-dev-server) - Development server for Webpack.

### Babel

-   [`@babel/core`](https://www.npmjs.com/package/@babel/core) - Transpile ES6+ to backwards compatible JavaScript.
-   [`@babel/preset-env`](https://babeljs.io/docs/en/babel-preset-env) - Smart defaults for Babel.
-   [`babel-eslint`](https://github.com/babel/babel-eslint) - Lint Babel code.
-   [`babel-polyfill`](https://babeljs.io/docs/en/babel-polyfill) - This will emulate a full ES2015+ environment.
-   [`eslint`](https://github.com/eslint/eslint) - ESLint.

### Loaders

-   [`babel-loader`](https://webpack.js.org/loaders/babel-loader/) - Transpile files with Babel and Webpack.
-   [`sass-loader`](https://webpack.js.org/loaders/sass-loader/) - Load SCSS and compile to CSS.
    -   [`node-sass`](https://github.com/sass/node-sass) - Node Sass.
-   [`postcss-loader`](https://webpack.js.org/loaders/postcss-loader/) - Process CSS with PostCSS.
    -   [`cssnano`](https://github.com/cssnano/cssnano) - Optimize and compress PostCSS.
    -   [`postcss-preset-env`](https://www.npmjs.com/package/postcss-preset-env) - Sensible defaults for PostCSS.
-   [`css-loader`](https://webpack.js.org/loaders/css-loader/) - Resolves CSS imports into JS.
-   [`style-loader`](https://webpack.js.org/loaders/style-loader/) - Inject CSS into the DOM.
-   [`file-loader`](https://webpack.js.org/loaders/file-loader/) - Copy files to build folder.
-   [`url-loader`](https://webpack.js.org/loaders/url-loader/) - Encode and inline files. Falls back to file-loader.

### Plugins

-   [`clean-webpack-plugin`](https://github.com/johnagan/clean-webpack-plugin) - Remove/clean build folders.
-   [`copy-webpack-plugin`](https://github.com/webpack-contrib/copy-webpack-plugin) - Copy files to build directory.
-   [`html-webpack-plugin`](https://github.com/jantimon/html-webpack-plugin) - Generate HTML files from template.
-   [`stylelint-webpack-plugin`](https://github.com/webpack-contrib/stylelint-webpack-plugin) - A Stylelint plugin for webpack.

## Author & Contributors

-   [`Rickard Börjesson`](https://github.com/rickepicke)
-   [`Guillaume Fradin`](https://github.com/frading)
-   [`Markus Bjerre`](https://github.com/brandflugan) - Author

## License

This project is open source and available under the [MIT License](LICENSE).
