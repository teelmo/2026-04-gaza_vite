# @yleisradio/yds-components-react

This repository contains components written with React/Typescript and exposes them to be usable from the npm package.

## Installation

```bash
npm install @yleisradio/yds-icons-react
```

## Quickstart

Wrap your component tree with the design system's theme provider and a theme and you're good to go with the actual components!

```js
import {
  YdsThemeProvider,
  Button
} from "@yleisradio/yds-components-react";

<ThemeProvider theme="light">
  <Button onClick={() => { console.log('Button was clicked!'); }}>This is a clickable button</Button>
</ThemeProvider>

```

## Distribution

This package is built and transpiled both into commonjs and ECMAScript modules. The esm build is also bundled to reduce build size. Using the esm distribution is highly recommended for performance and compatibility reasons. To make the most out of this package, please ensure that your application is capable of consuming esm packages.

## Development and contribution

Please refer to the main [project readme](../../README.md) for info.
