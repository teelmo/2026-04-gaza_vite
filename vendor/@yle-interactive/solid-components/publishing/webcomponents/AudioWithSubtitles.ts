import AudioWithSubtitles from "~/Audio/AudioWithSubtitles";
import { customElement } from "solid-element";
import { AudioWithSubtitlesType } from "~/Audio/AudioWithSubtitles";
const webComponent = customElement<AudioWithSubtitlesType>(
  "audio-with-subtitles",
  {
    iswebcomponent: true,
    customcss: undefined,
    maxwidth: undefined,
    title: undefined,
    url: undefined,
    buttonbackgroundcolor: undefined,
    iconcolor: undefined,
    texts: [],
    audiodurationtext: undefined,
    textnegative: undefined,
    textpositive: undefined,
    textnegativedark: undefined,
    textpositivedark: undefined,
    textfadebackground: undefined,
    textfadebackgrounddark: undefined,
    media: {},
  },
  AudioWithSubtitles
);

export { webComponent };
