import { ImageType, VideoType } from "../Types/MediaTypes";

export type HeaderType = {
  media: ImageType | VideoType;
  text: HeaderTextType;
  customcss?: string;
  iswebcomponent?: boolean;
  nostyles?: boolean;
};

export type HeaderTextType = {
  text: HeaderTextObjectType;
  iswebcomponent?: boolean;
  customcss?: string;
  nostyles?: boolean;
  //share: HeaderShareType;
};

export type HeaderTextObjectType = {
  background?: string;
  backgrounddark?: string;
  backgroundposition?: string; //50% 50%
  backgroundpositionmobile?: string; //100% 50%
  lead: string; //article lead
  margintop?: string;
  maxwidth?: string; //550px
  mobilemaxwidth?: string;
  tag: string; //article tag
  taglink: string; //link to tag page
  textcolor?: string;
  textcolordark?: string;
  time: string; //"24.2.2021 10:18 • Päivitetty 24.2.2021 13:21"
  title: string; //Short title 2-3 words to article
  titlefontsize?: string;
  titlefontsizemobile?: string;
  authors?: string;
  iswebcomponent?: boolean;
  nostyles?: boolean;
};

export type HeaderShareType = {
  uutiset: boolean;
  headline: string;
  lead: string;
};
