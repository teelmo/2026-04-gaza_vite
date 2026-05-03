import { customElement } from "solid-element";
import Header from "~/Header/Header";
import { HeaderTextProps } from "~/Header/HeaderType";
import { ImageType, VideoType } from "~/Types/MediaTypes";
const webComponent = customElement(
  "header-template",
  {
    media: {} as ImageType | VideoType,
    text: {} as HeaderTextProps,
    customcss: undefined,
    iswebcomponent: true,
  },
  Header
);

export { webComponent };
