import { customElement } from "solid-element";
import VideoTag from "~/FeatureMediaContainers/Video/VideoTag";
import { VideoType } from "~/Types/MediaTypes";

const webComponent = customElement(
  "video-tag",
  {
    iswebcomponent: true,
    customcss: undefined,
    alt: undefined,
    allowplay: true,
    audioicon: false,
    audioiconcolor: "white",
    draggable: true,
    header: false,
    loop: true,
    maxwidth: undefined,
    mobilemaxwidth: undefined,
    mediadescription: {},
    preload: false,
    progressbarcolor: undefined,
    progressbarlocation: undefined,
    relative: true,
    showmedia: true,
    subtitles: undefined,
    text: undefined,
    textcolor: undefined,
    textcolordark: undefined,
    threshold: undefined,
    type: "video",
    url: undefined,
    urlmobile: undefined,
    urldark: undefined,
    urlmobiledark: undefined,
    scrollyid: undefined,
  } as VideoType,
  VideoTag
);

export { webComponent };
