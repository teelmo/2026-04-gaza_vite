import { Setter } from "solid-js";

export type AreenaVideoType = {
  setInstance: Setter<AreenaPlayerInstance | undefined>;
  scrollthreshold?: number;
  id?: string; //or playlist
  playlistId?: string; //or id
  analytics?: boolean; //	true	Collect analytics
  analyticsContext?: object; //	{product:"areena"}	Add custom Adobe labels and change product label
  analyticsDebug?: boolean; //	false	Enable Adobe Media SDK v3.x debug logging (Requires also analyticsv3: true)
  analyticsv3?: boolean; //	false	Enable Adobe Media SDK v3.x analytics (Temporary parameter during migration from previous version)
  aspectRatio?: string; //	"16:9"	Force to media file aspect ratio with auto or to specific aspect ratio eg. 1:1 for square
  audioDescription?: boolean; //	true
  audioTitle?: boolean; //	true
  autoFocus?: boolean; //	true
  autoMute?: boolean; //	false	Start muted
  autoplay?: boolean; //	false
  autoPlayNextEpisode?: boolean; //	false
  chromecast?: boolean; //	true
  controls?: boolean; //	true	Show/hide player controlbar
  hideFocus?: boolean; //	false	Prevent player from receiving focus
  language?: string; //	"fin"	Full support: fin, swe and eng Partial support; sme, sms and smn
  logo?: boolean; //	true
  loop?: boolean; //	false
  newUi?: true; //	true	Use new player UI on top of Kalturaplayer. Deprecated, hard coded as true.
  noRecommendations?: boolean; //	false	don't show recommendations on pause or on media end
  noSharing?: boolean; //	false	don't show share button
  pictureInPicture?: boolean; //	true	Dependent on browser support
  playbackHistory?: boolean; //	false	Continue playback from stored position and save watch history while watching
  playbackRate?: number; //	1
  playFullScreen?: boolean; //	false	Start in fullscreen
  preload?: string; //	"none"	With "auto" init player and load 10 seconds worth of segments
  previewImage?: boolean; //	true
  seek?: number; //	0	seconds
  showBackButton?: boolean; //	false	Show back button in top left corner when also the videoTitle parameter is true. The button fires the backButtonClicked event.
  showChatButton?: boolean; //	false
  showPlayButton?: boolean; //	true	Show play button
  showPlayerUi?: boolean; //	true	Show player UI
  showReplayButton?: boolean; //	false	Show replay button on playback end
  showSpinner?: boolean; //	true	Show spinner when player is buffering
  showUnmuteButton?: boolean; //	false	Show unmute button in top right corner on mobile devices when audio is muted.
  smallPlayButton?: boolean; //	false
  subtitles?: boolean; //	true	Show/hide subtitles and subtitle settings
  subtitlesBackground?: string; //	"none"	Default background color for subtitles. Supported values: none, black, white
  theme?: string; //	light	Type of audio player background (Requires yleAudioPlayer: true) Other options: dark
  timeLeft?: boolean; //	false
  ui?: boolean; //	true
  verticalVideo?: boolean; //	false	Force aspect ratio to 9:16
  videoDescription?: boolean; //	true
  videoTitle?: boolean; //	true
  webKitPlaysInline?: boolean; //	false	iPhone specific
  ylePlayer?: boolean; //	true	Use our own html5/hls.js player with new player U
};

export type AreenaPlayerInstance = {
  closeFullscreen: () => void;
  defaultParameters: () => any; // Replace 'any' with more specific type if possible
  destroy: () => void;
  focus: () => void;
  hideChatButton: () => void;
  hideControls: () => void;
  mute: () => boolean;
  muted: () => boolean;
  on: (event: string, handler: Function) => void;
  openFullscreen: () => void;
  pause: () => void;
  play: () => void;
  playbackRates: () => any[]; // Replace 'any' with more specific type if possible
  seek: (time: number) => void;
  setAspectRatio: (ratio: string) => void; // Assuming ratio is a string like "16:9"
  setPlaybackRate: (rate: number) => void;
  showChatButton: () => void;
  showControls: () => void;
  startLoad: () => void;
  stopLoad: () => void;
  unmute: () => boolean;
  update: (config: any) => void; // Replace 'any' with more specific type if possible
  volume: (level: number) => number;
};
