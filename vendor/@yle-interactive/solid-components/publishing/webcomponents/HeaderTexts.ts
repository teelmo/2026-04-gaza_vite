import { customElement } from "solid-element";
import HeaderTexts from "~/Header/Text/HeaderTexts";
import { HeaderTextProps } from "~/Header/HeaderType";
const webComponent = customElement(
  "header-text-template",
  {
    text: {} as HeaderTextProps,
    iswebcomponent: true,
  },
  HeaderTexts
);

export { webComponent };
