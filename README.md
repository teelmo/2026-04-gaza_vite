# Template for React + Vite + Tailwind + TypeScript

Miniapp template for React, Vite, Tailwind and TypeScript.

_Updated: 27.3.2026_

## Table of Contents

- [Used technologies](#used-technologies)
- [Preparations](#preparations)
  - [Create project](#create-project)
  - [Install dependencies](#install-dependencies)
- [Usage](#usage)
  - [Code structure](#code-structure)
    - [HTML](#html)
    - [TS](#ts)
  - [Examples](#examples)
- [Development](#development)
  - [Start project](#start-project)
  - [Parameters](#parameters)
  - [Accessibility](#accessibility)
  - [Build project](#build-project)
- [Publishing](#publishing)
  - [Sync project](#sync-project)
- [Styling](#styling)
  - [Dark mode](#dark-mode)
  - [Tailwind CSS](#tailwind-css)
  - [Embed project](#embed-project)

## Used technologies

- React 19
- Vite 8
- Tailwind CSS
- TypeScript

Requires Node 24+.

## Preparations

### Create project

Create a project using this template with [miniapp-init](https://github.com/yle-interactive/miniapp-init).

`npx @yle-interactive/miniapp-init <project-name> --template=react-tailwind-ts`

### Install dependencies

Install dependencies by running `pnpm i`.

## Usage

### Code structure

All code inside src folder. Style components with Tailwind.

Refer to `src/` folder with `~`, like this:
`import App from "~/components/App";`

#### HTML

The root folder includes _index.html_ and _standalone.html_ files. Vite injects bundles to _standalone.html_ and _index.html_ from public folder.

#### TS

Includes the _main.tsx_ file, which does parameter fetching and mounting. and all React components.

### Examples

For examples, [search the GitHub organization](https://github.com/search?q=org%3Ayle-interactive+Template+for+React+%2B+Vite+%2B+Tailwind+%2B+TypeScript&type=code) for code that uses this template.

## Development

### Start project

`pnpm dev`

Run project locally on http://dev.yle.fi:3000/.

### Parameters

This project supports Yddrasil parameters in all Yle environments, input in the Dataviz parameters field. In local development you can simply use URL parameters, like so: <http://localhost:5173?small=frog&big=giraffe>

### Accessibility

The project bundles axe-core for accessibility warnings in local development. Check the browser console for warnings on things such as including a label with an input element etc.

This is also the reason why the index.html in the root folder differs from the index.html in the public folder. Only the latter will be shipped with a production build, without any html/title/main elements that could clash with the page surrounding the embed, but the more complete html file will prevent any unnecessary warnings.

### Build project

Build project to dist folder.

`pnpm build-dev` builds a development version.

`pnpm build-prod` builds a minified production version.

## Publishing

### Sync project

GitHub workflow syncs project automatically to S3 whenever you push changes to branch.

For manual updates, use `pnpm deploy-dev` or `pnpm deploy-prod` commands.

View your standalone app at https://plus.yle.fi/2026-04-gaza-vite/standalone.html.

## Styling

### Dark mode

Dark mode has been activated for this template. If you wish to deactivate dark mode, please alter `supports: ["darkmode"]` to `supports: []`, and change `darkModeCss: ["css/variables.dark.css"]` to `darkModeCss: undefined` in `conf.json`. Additionally mark the `darkMode` boolean as false.

The CSS variables for both dark mode and light mode are defined in `public/css/variables.dark.css` and `public/css/variables.light.css`.

All other styles are defined by Tailwind and `src/styles.css`.

The three CSS files, `styles.css`, `variables.light.css` and `variables.dark.css`, will end up in the same folder at build time. They are also listed in `scripts/conf.json`.

### Tailwind CSS

Tailwind is set up for all styling needs, including Yle Design System colors and a few other custom defaults. Enter Tailwind parameters inside an HTML element's class attribute. [Tailwind CSS Intellisense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) and [Tailwind Docs](https://marketplace.visualstudio.com/items?itemName=austenc.tailwind-docs) are warmly recommended extensions if using VS Code.

Read more [here](https://tailwindcss.com/docs/installation). Prettier and its Tailwind plugin are included as a dev dependency to [automatically sort](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier) styling classes.

### Embed project

In order to embed your project in Yddrasil, you need a _conf.json_ file. The build scripts will run `scripts/writeConfJson.mjs` to include this in the `dist/` folder, edit the _conf.json_ file in scripts/ as needed.

```json
{
  "mainfile": "index.html",
  "js": ["js/script.js"],
  "css": ["css/styles.css", "css/variables.light.css"],
  "supports": ["darkmode"],
  "darkModeCss": ["css/variables.dark.css"],
  "darkMode": true
}
```

Paste the url to the _conf.json_ file to the Dataviz URL field e.g. `https://plus.yle.fi/2026-04-gaza-vite/`.
