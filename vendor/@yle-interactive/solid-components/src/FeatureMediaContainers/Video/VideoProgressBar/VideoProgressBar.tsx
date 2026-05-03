import { createEffect, Show } from "solid-js";
import styles from "./VideoProgressBar.module.css";
import * as cssStyle from "./VideoProgressBar.module.css?inline";
import StylesForWebcomponent from "../../../../helpers/StylesForWebcomponent";
type progressType = {
  progressBarColor: string;
  progressBarLocation: string;
  vidRef: HTMLVideoElement;
  paused: Boolean;
  iswebcomponent?: boolean;
  nostyles?: boolean;
};

const VideoProgressBar = (props: progressType) => {
  const cssModule = () => (props.nostyles ? {} : styles);
  const barColor = () => props.progressBarColor || "white";
  const barLocation = () => props.progressBarLocation || "top: 0px;";
  const vidRef = () => props.vidRef;
  const paused = () => props.paused;
  let progressBarRef;

  createEffect(() => {
    const updateProgress = () => {
      if (!paused()) frame = requestAnimationFrame(updateProgress);

      const progress = (vidRef().currentTime / vidRef().duration) * 100;
      progressBarRef.style.width = progress + "%";
    };
    let frame;
    if (!paused()) frame = requestAnimationFrame(updateProgress);
    else cancelAnimationFrame(frame);
  });

  return (
    <>
      <div
        ref={progressBarRef}
        class={cssModule().videoProgressBar}
        style={`${barLocation()} background-color: ${barColor()};`}
      />
      <Show when={props?.iswebcomponent}>
        <StylesForWebcomponent tag="VideoProgressBar" css={cssStyle} />
      </Show>
    </>
  );
};

export default VideoProgressBar;
