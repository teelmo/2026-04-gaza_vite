---
layout: ../../layouts/Layout.astro
title: "Components Development"
---

# {frontmatter.title}

Components are built using SolidJS. SolidJS is a highly performant framework that supports web components. Because of this, the library is well-suited for developing feature components.

## Local Development

Clone the project from GitHub at https://github.com/yle-interactive/solid-components and run the commands

```
cd components
pnpm install
pnpm dev
```

This will start the local development environment. The development environment Root is in the directory `./dev/Root.tsx` and the App in `./dev/App.tsx`. Components are separate in the directory `./src/`

### I want to add feature XX to component YY. What do I do?

- Ensure that the App has the SolidJS version of the component you want (e.g., `import Carousel from "~/Carousel/Carousel"`) and add the element `<Carousel {...CarouselProps} />` to the return.
- I recommend running the component with [example props](https://github.com/yle-interactive/solid-components/blob/restructure2024/components/helpers/exampleProps.ts). They have been tested to work. (e.g., `import { CarouselProps } from "../helpers/exampleProps";`)
- Examine the structure of the component (for example, [Carousel](https://github.com/yle-interactive/solid-components/blob/restructure2024/components/src/Carousel/Carousel.tsx))
- Test the changes you made, ensuring functionality even when the desired props are not passed to the component. Update the component's types.
- Once you have tested that the Solid component works, ensure the functionality of the Web component by adding/updating props in the web component (e.g., `./publishing/webcomponents/Carousel`). Note that even if a prop is optional, it must be added as a parameter for the web component.
- Import the web component in the App `import "../publishing/webcomponents/Carousel";` and add the corresponding HTML tag to the return `<carousel-template {...CarouselProps}></carousel-template>`. Test that webcomponent works as planned
- Update the versions in Git and NPM

### I want to create a completely new component ZZ

- Add a new component to the `./src` folder and follow the example of an existing component.
- Import the component into the App and create example props in the file `../helpers/exampleProps`
- Once you are done with the SolidJS version, create a new web component file in the `./publishing/webcomponent` folder, looking at the examples from other files in the folder. Remember to also input all optional props for the web component.

## Ensure these before publishing the package

- Ensure the component is in the `./publishing/webcomponent` folder and has all props (including optional ones).
- Ensure the component is in the `./publishing/solid-js` folder.

## Deploy the updated/new component to production via NPM

### 1. Package version

Go to the `./components` folder and open `package.json`. Each NPM package has a version number (e.g., `"version": "0.2.85"`). Increment the version.

### 2. Build the web components

Run `pnpm build-all`. This clears the build folder and installs the newly built web components there.

### 3. Publish the new version

Run `npm publish`

## Read and write right to Github packages

You need personal access token with writing rights to publish npm package through Github. Create a new one in https://github.com/settings/tokens

Add token to .npmrc by typing `nano ~/.npmrc` and use following structure

@yle-interactive:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:\_authToken=ghp_XXXXXXXXXXXXXXXXXXXXXXX

## How does all this work?

By following the instructions above, the latest version of the component library is published as an NPM package. The package is available to @yle-interactive users. Version control ensures that previous versions are also preserved. Users can choose to install the latest or an older version of the components.

```
pnpm i @yle-interactive/solid-components
```

```
pnpm i @yle-interactive/solid-components@0.2.81
```

Once the package is installed, you can import into your project the files that are inside the `"exports"` key in the package.json.

```
  "exports": {
    "./style": "./build/style.css",
    "./webcomponents/*": "./build/webcomponents/*",
    "./*": "./publishing/solid-js/*"
  },
```

As seen in this example, web components are exported as built versions, whereas SolidJS components utilize versions directly in the publishing folder.

Web components are imported like this

```
import "@yle-interactive/solid-components/webcomponents/AudioTag";
import "@yle-interactive/solid-components/webcomponents/AudioWithSubtitles";
```

SolidJS components like this

```
import AreenaVideo from "@yle-interactive/solid-components/AreenaVideo";
import AudioTag from "@yle-interactive/solid-components/AudioWithSubtitles"
import Carousel from "@yle-interactive/solid-components/Carousel"
```
