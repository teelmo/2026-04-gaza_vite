import AudioTag, { AudioTagType } from "~/Audio/AudioTag";
import { customElement } from "solid-element";

const webComponent = customElement<AudioTagType>(
  "audio-tag",
  {
    iswebcomponent: true,
    customcss: undefined,
    maxwidth: undefined,
    url: undefined,
    text: undefined,
    textcolor: undefined,
    textcolordark: undefined,
    alt: undefined,
  },
  AudioTag
);

export { webComponent };
