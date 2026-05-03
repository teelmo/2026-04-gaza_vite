import {
  createEffect,
  createSignal,
  Show,
  createResource,
  Suspense,
  Component,
  For,
  type JSX,
} from "solid-js";

import VideoAudio from "./VideoAudio/VideoAudio";
import VideoPlay from "./VideoPlay/VideoPlay";
import VideoProgressBar from "./VideoProgressBar/VideoProgressBar";
import { computeClassName } from "../../../helpers/uniqueClassName";
import MediaDescription from "../MediaDescription/MediaDescription";
import MediaCaption from "../MediaCaption/MediaCaption";
import { VideoType } from "../../Types/MediaTypes";
import ScrollyStyle from "../../Scrolly/Scrolly.module.css";
import MediaStyle from "../../FeatureMediaContainers/MediaTag.module.css";
import * as cssStyle from "../../FeatureMediaContainers/MediaTag.module.css?inline";
import StylesForWebcomponent from "../../../helpers/StylesForWebcomponent";
import { createMediaQuery } from "@solid-primitives/media";
import { createVisibilityObserver } from "@solid-primitives/intersection-observer";
import { usePrefersDark } from "@solid-primitives/media";

import { jsonToTrack, parseSubtitles } from "../../../helpers/addSubtitles";

//play once if user prefers reduced motion
const reducedMotion =
  window.matchMedia("(prefers-reduced-motion: reduce)")?.matches ?? false;

const VideoTag: Component<VideoType> = (props) => {
  const relative = () => props.relative ?? false;

  const cssModuleScrolly = () => (props.nostyles ? {} : ScrollyStyle);
  const cssModuleMedia = () => (props.nostyles ? {} : MediaStyle);

  let vidRef: HTMLVideoElement | undefined;

  const {
    audioicon,
    audioiconcolor,
    header,
    progressbarcolor,
    progressbarlocation,
    draggable,
  } = props;

  const visible = createVisibilityObserver({
    threshold: props?.threshold || 0.1,
  })(() => vidRef);

  const [subtitles] = createResource(props?.subtitles, parseSubtitles);

  const mobilemaxwidth =
    props.mobilemaxwidth !== undefined ? props.mobilemaxwidth : 550;

  const isMobile = createMediaQuery("(max-width: " + mobilemaxwidth + "px)");
  const prefersDark = usePrefersDark();

  const descriptionId = computeClassName("mediaDescription", Math.random());
  const mediadescription = () =>
    props?.mediadescription !== undefined && {
      ...props.mediadescription,
      id: descriptionId,
    };

  const subtitlesId = descriptionId.replace(
    "mediaDescription",
    "mediaSubtitles"
  );

  const urlDesktopDark = props?.urldark ? props.urldark : props.url,
    urlDesktopLight = props.url,
    urlMobileDark = props?.urlmobiledark
      ? props.urlmobiledark
      : props?.urlmobile
      ? props.urlmobile
      : props.url,
    urlMobileLight = props?.urlmobile ? props.urlmobile : props.url;

  const textColor = () => props.textcolor;
  const textColorDark = () => props.textcolordark;
  const preload = () => (props.preload || header ? true : false);

  const loop = () => props.loop ?? true;

  //Absolute props
  const backgroundColor = () => props.backgroundcolor || "transparent";
  const backgroundPosition = () => props.backgroundposition || "50% 50%";
  const backgroundPositionMobile = () =>
    props.backgroundpositionmobile || "50% 50%";

  //Relative props
  const maxWidth = () => props.maxwidth || "800px";

  const allowPlay = () => {
    return props?.allowplay !== undefined ? props.allowplay : true;
  };

  const [useUrl, setUrl] = createSignal(urlDesktopLight);

  //SWITCHES VID URL AND MOBILE URL
  createEffect(() => {
    const makeVideoChange = (url) => {
      setUrl(url);
      let isPaused = vidRef.paused;
      vidRef.load();
      isPaused ? vidRef.pause() : vidRef.play();
    };

    if (isMobile() && prefersDark() && useUrl() !== urlMobileDark) {
      makeVideoChange(urlMobileDark);
    } else if (isMobile() && !prefersDark() && useUrl() !== urlMobileLight) {
      makeVideoChange(urlMobileLight);
    } else if (!isMobile() && prefersDark() && useUrl() !== urlDesktopDark) {
      makeVideoChange(urlDesktopDark);
    } else if (!isMobile() && !prefersDark() && useUrl() !== urlDesktopLight) {
      makeVideoChange(urlDesktopLight);
    }
  });

  createEffect(() => {
    if (urlDesktopLight.length > 0) {
      if (allowPlay() && vidRef.paused) vidRef.play();
      else if (!allowPlay() && !vidRef.paused) vidRef.pause();
    }
  });

  const textRelative = () => props.text ?? false;

  const customCss = () => props?.customcss;

  createEffect(() => {
    //automatically play video if it has been allowed to play and it's scroll position matches
    visible() && relative() && allowPlay() && vidRef.play();
    !visible() && relative() && vidRef.pause();
  });

  const showMedia = () => props.showmedia;

  const [paused, setPaused]: [() => boolean, (v: boolean) => void] =
      createSignal<boolean>(true),
    [showPlayButton, setShowPlayButton] = createSignal<boolean>(
      !allowPlay() && !loop()
    ),
    onVideoEnd = (): void => {
      setShowPlayButton(true);
    },
    onVideoPlay = (): void => {
      setPaused(false);
      setShowPlayButton(false);
    },
    onVideoPause = (): void => {
      setPaused(true);
      !allowPlay() && setShowPlayButton(true);
    };

  return (
    <Show when={!(useUrl().length === 0 && useUrl() === undefined)}>
      <figure
        {...(header && { id: "featureHeaderVideo" })}
        style={relative() ? { "max-width": maxWidth() } : { height: "100%" }}
        class={
          showMedia() && !relative()
            ? "showScrollyMedia " +
              cssModuleScrolly().showScrollyMedia +
              " " +
              cssModuleMedia().absoluteStyle
            : !showMedia() && !relative()
            ? "hideScrollyMedia " +
              cssModuleScrolly().hideScrollyMedia +
              " " +
              cssModuleMedia().absoluteStyle
            : cssModuleMedia().relativeStyle + " plusVideoRelative"
        }
      >
        <Show when={props?.iswebcomponent}>
          <StylesForWebcomponent
            tag="Video"
            css={cssStyle}
            customCss={customCss()}
          />
        </Show>
        <video
          {...(!draggable && { draggable: false })}
          class={audioicon ? "plusVideoWithAudio" : "plusVideoNoAudio"}
          ref={vidRef}
          poster={useUrl().length > 0 && useUrl() + ".poster.jpg"}
          preload={preload() ? "auto" : "metadata"}
          muted
          loop={!reducedMotion && loop()}
          playsinline
          onLoadedData={subtitles() && jsonToTrack(subtitles(), vidRef)}
          onPlay={onVideoPlay}
          onEnded={onVideoEnd}
          onPause={onVideoPause}
          onClick={(e) => {
            if (!vidRef.paused && relative()) {
              vidRef.pause();
              setShowPlayButton(true);
            } else if (relative()) vidRef.play();
          }}
          style={
            !relative() && isMobile()
              ? {
                  "object-position": backgroundPositionMobile(),
                  "background-color": backgroundColor(),
                  "object-fit":
                    backgroundColor() === "transparent"
                      ? "cover"
                      : "scale-down",
                }
              : !relative() && !isMobile()
              ? {
                  "object-position": backgroundPosition(),
                  "background-color": backgroundColor(),
                  "object-fit":
                    backgroundColor() === "transparent"
                      ? "cover"
                      : "scale-down",
                }
              : {}
          }
          {...(props?.alt && { "aria-label": props.alt })}
          {...(mediadescription() && {
            "aria-describedby": mediadescription().id,
          })}
          {...(subtitles() && {
            "aria-details": subtitlesId,
          })}
        >
          <source src={useUrl()} type="video/mp4" />
        </video>
        <Suspense>
          <Show when={subtitles()}>
            <details id={subtitlesId} style={{ display: "none" }}>
              <summary>Tekstitys</summary>
              <For each={subtitles().cues}>{(c) => <p>{c.text}</p>}</For>
            </details>
          </Show>
        </Suspense>
        <Show when={mediadescription() !== undefined}>
          <MediaDescription
            mediaDescription={mediadescription()}
            nostyles={props?.nostyles}
            header={header}
            iswebcomponent={props?.iswebcomponent}
          />
        </Show>
        <Show when={audioicon}>
          <VideoAudio
            audioIconColor={audioiconcolor}
            iswebcomponent={props?.iswebcomponent}
          />
        </Show>
        <Show when={reducedMotion || !loop()}>
          <VideoPlay
            vidRef={vidRef}
            showPlayButton={showPlayButton()}
            playIconColor={audioiconcolor}
            nostyles={props?.nostyles}
            iswebcomponent={props?.iswebcomponent}
          />
        </Show>
        <Show when={progressbarcolor}>
          <VideoProgressBar
            vidRef={vidRef}
            progressBarColor={progressbarcolor}
            progressBarLocation={progressbarlocation}
            paused={paused()}
            iswebcomponent={props?.iswebcomponent}
          />
        </Show>
        <Show when={textRelative() && relative()}>
          <MediaCaption
            text={textRelative()}
            textColor={textColor()}
            textColorDark={textColorDark()}
            iswebcomponent={props?.iswebcomponent}
          />
        </Show>
      </figure>
    </Show>
  );
};

export default VideoTag;
