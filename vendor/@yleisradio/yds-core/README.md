# @yleisradio/yds-core

Yleisradio Design System core package. yds-core contains the fundamental design tokens that can be used for composing custom UI patterns, such as colours, spacings, and typography.

## Installation

First, you must configure the `@yleisradio` scoped package registry to point to `https://npm.pkg.github.com/`.

```bash

npm install @yleisradio/yds-core

yarn add @yleisradio/yds-core

```

## Quickstart

```js

import {
  color,
  defaultTheme,
  lightTheme,
  darkTheme,
  defaultShadow,
  lightShadow,
  darkShadow,
  border,
  spacing,
  radius,
  typography,
  typographyTokens
} from "@yleisradio/yds-core";

console.log(typography)

```

## Details
### Tokens

Design tokens are smallest documented one-value variables to construct designs from (think a color variable). Tokens are built using Style dictionary and support JS, SCSS, LESS and CSS formats currently.

The JS-build of this package is distributed both in commonjs and ECMAScript module formats. The esm build is also bundled to reduce build size. Using the esm distribution is highly recommended for performance and compatibility reasons. To make the most out of this package, please ensure that your application is capable of consuming esm packages.

#### Javascript / React / Styled components

Tokens are exported through the package index file, so you can use them as follows:

`import {color, lightTheme, darkTheme} from '@yleisradio/yds-core'`

Global color values can be used to define explicit colors that do not adjust based on theming.

`const componentBackgroundColor = color.GRAY_50`

Themes are interchangeable, so it's possible to assign theme values that react to the theme change.

```js
import { color, lightTheme, darkTheme } from '@yleisradio/yds-core';

// Check if user has selected dark mode. A common way in web is to use media query for it.
let isDarkTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

let theme = isDarkTheme ? darkTheme : lightTheme;
let componentTextColor = theme.TEXT_DEFAULT; // Theme default text color
let componentBackgroundColor = theme.BACKGROUND; // Theme default background color
let fixedBrandColor = color.BRAND; // This won't change if theme is switched
```

#### SCSS

You can add your node_modules directory to your Sass [includePaths](https://github.com/sass/node-sass#includepaths). From there you can import a set of tokens using `@use` function. You can decide to import tokens to a global scope or namespacing them if you prefer.

```scss
@use '@yleisradio/yds-core/tokens/build/scss/_colors' as *;

.brand-element {
  background: $yds-color-brand;
}
```

#### less

You can use Yle DS less variables by importing a variable file to your styles.

```less
@import '@yleisradio/yds-core/tokens/build/less/_colors.less';

.brand-element {
  background: @yds-color-brand;
}
```

#### CSS

You can add your node_modules directory to your CSS bundle scripts and import the file like this (for a light theme app by default which utilises dark theme via media query preferences):

```css
@import '@yleisradio/yds-core/tokens/build/css/_colors.css';
@import '@yleisradio/yds-core/tokens/build/css/_theme-default.css';
@import '@yleisradio/yds-core/tokens/build/css/_theme-default-prefers-dark.css';

/* This element uses themed colors. The colors will change if .yds-theme-dark class is applied to ancestor element. */
.themed-component {
  background: var(--yds-color-background);
  color: var(--yds-color-text-default);
}

/* This color comes from core colors and is not changing when theme changes */
.brand-element {
  background: var(--yds-color-brand);
}
```

Design tokens are built with CSS custom properties on `:root` level, but the dark theme can be accessed with assigning `yds-theme-dark` class to application container (such as `body` tag).

## Using Futistietäjä and Viisutietäjä themes

The token files for Futistietäjä and Viisutietäjä themes only contain tokens that supersede the tokens of the default dark theme. To use these themes, use the `toTietajaTheme` function:

```js
<YdsThemeProvider theme={toTietajaTheme(backgroundColor, highlightColor)}>
  {...}
</YdsThemeProvider>
```

`toTietajaTheme` currently only supports themes for Viisutietäjä and Futistietäjä, which have pre-defined background and highlight colours. It will use the background colour to resolve the theme, so pass the background value of the Tietäjä theme you want to use.

The reason why the API takes in the two colour inputs is because the function will eventually be expanded to be able to generate themes based on arbitary inputs.
