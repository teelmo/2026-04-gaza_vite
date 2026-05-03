import PictureTag from "~/FeatureMediaContainers/Picture/PictureTag";
import { customElement } from "solid-element";
import { ImageType } from "~/Types/MediaTypes";

const webComponent = customElement(
  "picture-tag",
  {
    iswebcomponent: true,
    customcss: undefined,
    alt: undefined,
    draggable: true,
    header: false,
    maxwidth: undefined,
    mobilemaxwidth: undefined,
    mediadescription: {},
    preload: false,
    relative: true,
    showmedia: true,
    text: undefined,
    textcolor: undefined,
    textcolordark: undefined,
    type: "image",
    url: undefined,
    urlmobile: undefined,
    urldark: undefined,
    urlmobiledark: undefined,
    scrollyid: undefined,
  } as ImageType,
  PictureTag
);

export { webComponent };
