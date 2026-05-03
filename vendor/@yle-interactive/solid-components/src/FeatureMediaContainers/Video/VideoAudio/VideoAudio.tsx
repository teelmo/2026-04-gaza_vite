import { MutedIcon, AudioOnIcon } from "./AudioIcons";
import styles from "./VideoAudio.module.css";
import * as cssStyle from "./VideoAudio.module.css?inline";
import StylesForWebcomponent from "../../../../helpers/StylesForWebcomponent";
import { Show } from "solid-js";

type VideoAudioProps = {
  audioIconColor: string;
  iswebcomponent?: boolean;
  nostyles?: boolean;
};

export default function VideoAudio(props: VideoAudioProps) {
  const cssModule = () => (props.nostyles ? {} : styles);

  const muteAllVideos = () => {
    if (props?.iswebcomponent) {
      //webcomponents selector needs webcomponent tag name
      const webcomponents = document.querySelectorAll(
        "header-template, video-tag, scrolly-template, carousel-template"
      );

      webcomponents?.forEach((el) => {
        //need to select shadow root
        const vid = el.shadowRoot.querySelector(
          ".plusVideoWithAudio"
        ) as HTMLVideoElement;
        const audioButton = el.shadowRoot.querySelectorAll(
          ".plusAudioButton"
        ) as NodeListOf<HTMLButtonElement>;
        //only select videos with audio
        if (vid !== null) {
          vid.muted = !vid.muted;
          audioButton?.forEach((el) => el.classList.toggle(styles.hideIcon));
        }
      });
    } else {
      const videos = document.querySelectorAll(
        ".plusVideoWithAudio"
      ) as NodeListOf<HTMLVideoElement>;
      const audioButton = document.querySelectorAll(
        ".plusAudioButton"
      ) as NodeListOf<HTMLButtonElement>;
      //Loop through every plusVideo in article
      videos?.forEach((el) => (el.muted = !el.muted));
      //toggle class
      audioButton?.forEach((el) => el.classList.toggle(styles.hideIcon));
    }
  };

  return (
    <>
      <button
        class={
          cssModule().plusAudioButton +
          " " +
          cssModule().hideIcon +
          " plusAudioButton"
        }
        onClick={() => muteAllVideos()}
      >
        <AudioOnIcon audioIconColor={props.audioIconColor} />
      </button>
      <button
        class={cssModule().plusAudioButton + " plusAudioButton"}
        onClick={() => muteAllVideos()}
      >
        <MutedIcon audioIconColor={props.audioIconColor} />
      </button>
      <Show when={props?.iswebcomponent}>
        <StylesForWebcomponent tag="VideoAudio" css={cssStyle} />
      </Show>
    </>
  );
}
