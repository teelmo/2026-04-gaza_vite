import { Component, Show, Switch, Match } from "solid-js";

import PictureTag from "../FeatureMediaContainers/Picture/PictureTag";
import VideoTag from "../FeatureMediaContainers/Video/VideoTag";
import HeaderTexts from "./Text/HeaderTexts";
import { HeaderType } from "./HeaderType";
import styles from "./Header.module.css";
import * as cssStyle from "./Header.module.css?inline";

import { createVisibilityObserver } from "@solid-primitives/intersection-observer";
import type { ImageType, VideoType } from "../Types/MediaTypes";
import StylesForWebcomponent from "../../helpers/StylesForWebcomponent";

import { isMobileDevice } from "../../helpers/browserDetection";

const Header: Component<HeaderType> = (props) => {
  //console.log(styles);

  //ignore styles if nostyles is true
  const cssModule = () => (props.nostyles ? {} : styles);

  //const media = ():ImageType|VideoType => props.media;
  const imageMedia = (): ImageType =>
    props?.media?.type === "image" && props?.media;
  const videoMedia = (): VideoType =>
    props?.media?.type === "video" && props?.media;

  const customCss = () => props?.customcss;

  let ref: HTMLDivElement | undefined;

  const visible =
    videoMedia() && createVisibilityObserver({ threshold: 0.1 })(() => ref);

  const text = () =>
    props?.iswebcomponent
      ? { ...props.text, iswebcomponent: true }
      : { ...props.text, iswebcomponent: false };

  return (
    <div class={cssModule().headerContainer + " headerContainer"}>
      <div
        class={cssModule().headerVisuals + " headerVisuals"}
        style={{
          height: isMobileDevice() ? `${window.innerHeight * 0.7}px` : "70lvh",
        }}
        ref={ref}
      >
        <Switch fallback={<p>Ongelmia median tyypin kanssa.</p>}>
          <Match when={imageMedia()}>
            <PictureTag
              {...imageMedia()}
              header={true}
              showmedia={true}
              iswebcomponent={props?.iswebcomponent}
            />
          </Match>
          <Match when={videoMedia()}>
            <VideoTag
              {...videoMedia()}
              allowplay={visible()}
              header={true}
              showmedia={true}
              iswebcomponent={props?.iswebcomponent}
            />
          </Match>
        </Switch>
      </div>
      <HeaderTexts text={text()} nostyles={props?.nostyles} />
      <Show when={props?.iswebcomponent}>
        <StylesForWebcomponent
          tag="Header"
          css={cssStyle}
          customCss={customCss()}
        />
      </Show>
    </div>
  );
};

export default Header;
