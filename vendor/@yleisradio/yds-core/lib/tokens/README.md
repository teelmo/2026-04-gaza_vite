# Yle Tokens Style Dictionary

This is an implementation of `Style dictionary` for Yle's design token workflow.

## Figma workflow

The token-workflow is two-fold: First we export variable JSONs to Figma and rearrange them with `Design Tokens` plugin by Lukas Oppermann.
https://github.com/lukasoppermann/design-tokens

You should use the following settings for the plugin:
- Add token type to name of the token: OFF
- Add mode to design token name (if 2 or mode modes): ON
- Add mode to design token value: ON
- Resolve same collection or same mode variable references: OFF
- Include token prefix in token names: ON

You can also define default export file names for each Figma file separately.

YDS Foundation => `design-tokens.tokens.json` (This contains theme colors, typography, spacing, etc.)
YDS Global Colors => `design-tokens-global.tokens.json` (This contains global colors)
YDS Infographics => `design-tokens-infographic.tokens.json` (This contains infographics colors)
Tietäjä Foundation 1.0 => `design-tokens-tietaja.tokens.json` (This contains Tietäjä specific placeholder themes)

After the settings have been defined, use `Export design tokens to file...` with following settings:

- Compress JSON output file: OFF
- Exclude extension property: ON
- Include types in export: Figma Variables (BETA)

The JSON file is exported to `packages/yds-core/src/tokens/properties` folder The structure for exports is as follows, mapped from Figma file to JSON file:

## Transforming Figma exports to YDS JSON token files

To run the initial build step on root folder:

```bash
yarn generate-token-jsons
```

This will do two things: It will fix the inconsistencies in reference token paths (defined in `packages/yds-core/scripts/fix-token-jsons.mjs`) and after that,
it will generate (as defined in `packages/yds-core/scripts/generate-token-jsons.mjs` ) the JSON files in `packages/yds-core/src/tokens/properties` subfolders.
These separate JSONs are used as basis for the Style dictionary build and Storybook documentation.

You might see some warnings in the output related to duplicate tokens – as long as the values and names are same, we can ignore these.

## Generating end-user tokens in different formats

To generate CSS, JS, SCSS files from these JSON files, run:

```bash
yarn generate-tokens
```

You should see something like this output:

```
scss
✔︎  build/scss/_colors.scss

css
✔︎  build/css/_colors.css

js
✔︎  build/js/colors.js

```

This shows a few things happening:

1. The build system does a deep merge of all the property JSON files defined in the `source` attribute of ``. This allows you to split up the property JSON files however you want. There are 2 JSON files with `color` as the top level key, but they get merged properly.
2. The build system resolves references to other style properties. `{size.font.medium.value}` gets resolved properly.
3. The build system handles references to property values in other files as well as you can see in `properties/color/font.json`.

You should see a large diff between multiple files – just check that the changes are intentional.

## Things to take in account after token changes

For reviewing the changes:
- Not all changes flow through from Figma exports to the final build. If you change a non-color token in Figma, you have to manually update the JSON file in `packages/yds-core/src/tokens/properties/{token-type}/{token-type}.json` folder.
- Check that the changes are reflected in the Storybook documentation

If there is a theme change, there's a few things to take in account:
- There's a two-cent theme regression shield located in `packages/yds-core/types/theme.ts`, which has to be replaced manually with the contents of `packages/yds-core/build/js/theme.d.ts` after the build step.


## Troubleshooting and known quirks

Add yours here.
