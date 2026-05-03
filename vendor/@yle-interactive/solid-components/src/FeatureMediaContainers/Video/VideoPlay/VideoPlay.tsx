import { createEffect, Show } from "solid-js";
import styles from "./VideoPlay.module.css";
import * as cssStyle from "./VideoPlay.module.css?inline";
import StylesForWebcomponent from "../../../../helpers/StylesForWebcomponent";
type VideoPlayProps = {
  showPlayButton: boolean;
  vidRef: HTMLVideoElement | undefined;
  playIconColor?: string;
  iswebcomponent?: boolean;
  nostyles?: boolean;
};

const VideoPlay = (props: VideoPlayProps) => {
  const showPlayButton = () => props.showPlayButton;

  const cssModule = () => (props.nostyles ? {} : styles);
  return (
    <>
      <Show when={showPlayButton()}>
        <button
          onClick={() => props.vidRef.play()}
          class={cssModule().plusPlayButton + " plusPlayButton"}
        >
          <PlayIcon playIconColor={props.playIconColor} />
        </button>
      </Show>
      <Show when={props?.iswebcomponent}>
        <StylesForWebcomponent tag="VideoPlay" css={cssStyle} />
      </Show>
    </>
  );
};

const PlayIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      fill={props?.playIconColor || "var(--yds-color-text-default)"}
      width="100"
      height="100"
    >
      <path d="M99.6,48.4c-0.3-0.7-0.9-1.3-1.6-1.6L5.2,0.4C3.4-0.5,1.3,0.2,0.4,2C0.1,2.5,0,3,0,3.6v92.9c0,2,1.6,3.6,3.6,3.6c0.6,0,1.1-0.1,1.6-0.4L98,53.2C99.8,52.3,100.5,50.2,99.6,48.4z"></path>
    </svg>
  );
};

export default VideoPlay;
