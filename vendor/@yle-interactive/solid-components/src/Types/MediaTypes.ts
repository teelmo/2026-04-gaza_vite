export type ImageType = {
  iswebcomponent?: boolean; //should add styles inside shadow root?
  customcss: string; //input css as text variable
  nostyles?: boolean; //optional, if true no styles will be applied
  alt?: string; // optional, defaults to ims provided alt
  backgroundcolor?: string; //optional, defaults to none, useful when showing full image in scrolly and also showing background of image
  backgroundposition?: string; //optional, defaults to 50% 50%
  backgroundpositionmobile?: string; //optional for mobile, defaults to 50% 50%
  draggable?: boolean; //optional, default to true but carousel images need to be undraggable
  header?: boolean; //optional, default to false, header images are handled differently
  maxwidth?: string; //optional, defaults to 800px
  mobilemaxwidth?: number; //optional, defaults to 550px - if two different medias for mobile and desktop this value is the threshold value between  mediadescription?: {
  mediadescription?: {
    content?: string; //optional, for example 'kuvaaja Nönnnöö'
    textcolor?: string;
    backgroundcolor?: string;
  };
  preload?: boolean; //optional, default to false, header images should be preloaded
  relative?: boolean; //optional, scrolly images use absolute position and normal images are relative
  showmedia?: boolean; //optional, for example in scrolly we want to dynamically hide medias which corresponding text boxes are yet to come
  text?: [string, boolean]; //optional, image text under image, length = 0 false, length > 0 true
  textcolor?: string; // optional, defaults to lightTheme color
  textcolordark?: string; // optional, defaults to darkTheme color
  type: "image";
  url?: string; // optional, if not provided use imsid
  urldark?: string; // optional
  urlmobile?: string; // optional, if not provided use imsid or url
  urlmobiledark?: string; // optional
  scrollyid?: string; //link between scrolly text and image
};

export type VideoType = {
  iswebcomponent?: boolean; //should add styles inside shadow root?
  customcss: string; //input css as text variable
  nostyles?: boolean; //optional, if true no styles will be applied
  alt?: string; // optional, uses aria-label
  allowplay?: boolean; // optional, default to true
  audioicon?: boolean; // optional, default to false, if true show audio icon
  audioiconcolor?: string; // optional, choose audioiconcolor as any css string
  backgroundcolor?: string; //optional, defaults to none, useful when showing full image in scrolly and also showing background of image
  backgroundposition?: string; //optional, defaults to 50% 50%
  backgroundpositionmobile?: string; //optional for mobile, defaults to 50% 50%
  draggable?: boolean; //optional, default to true but carousel images need to be undraggable
  header?: boolean; //optional, default to false, header images are handled differently
  loop?: boolean; // optional, if loops video
  maxwidth?: string; //optional, defaults to 800px
  mobilemaxwidth?: number; //optional, defaults to 550px - if two different medias for mobile and desktop this value is the threshold value between
  mediadescription?: {
    content?: string; //optional, for example 'kuvaaja Nönnnöö'
    textcolor?: string;
    backgroundcolor?: string;
  };
  preload?: boolean; //optional, default to false, header images should be preloaded
  progressbarcolor?: string; // optional, show progress bar if defined, choose audioiconcolor as any css string
  progressbarlocation?: string; //optional, use css string: top: 0px; for example
  relative?: boolean; //optional, scrolly images use absolute position and normal images are relative
  showmedia?: boolean; //optional, for example in scrolly we want to dynamically hide medias which corresponding text boxes are yet to come
  subtitles?: string; //url to .vtt -file
  text?: [string, boolean]; //optional, image text under image, length = 0 false, length > 0 true
  textcolor?: string; // optional, defaults to lightTheme color
  textcolordark?: string; // optional, defaults to darkTheme color
  threshold?: number; //threshold between 0 and 1 to decide when to play content
  type: "video";
  url?: string; // optional, if not provided use imsid
  urldark?: string; //optional dark mode video desktop
  urlmobile?: string; // optional, if not provided use imsid or url
  urlmobiledark?: string; //optional dark mode video mobile
  scrollyid?: string; //link between scrolly text and image
};
