import { createSignal, type Component, type JSX, Show } from "solid-js";
import MediaCaption from "../FeatureMediaContainers/MediaCaption/MediaCaption";
import styles from "./AudioTag.module.css";
import * as cssStyle from "./AudioTag.module.css?inline";
import StylesForWebcomponent from "../../helpers/StylesForWebcomponent";

const handleTimeDrag = (
  e,
  audioRef,
  durationBars,
  duration,
  setCurrentTime
) => {
  const timeClicked = calcClickedTime(e, durationBars, duration);
  setCurrentTime(timeClicked);

  const updateTimeOnMove = (eMove) => {
    const time = calcClickedTime(eMove, durationBars, duration);
    if (time) {
      setCurrentTime(time);
      audioRef.currentTime = time;
    }
  };

  document.addEventListener("mousemove", updateTimeOnMove);
  document.addEventListener("touchmove", updateTimeOnMove);

  document.addEventListener("mouseup", () => {
    document.removeEventListener("mousemove", updateTimeOnMove);
    document.removeEventListener("touchmove", updateTimeOnMove);
  });
};

function calcClickedTime(e, durationBars, duration) {
  //clicked position
  const clickPositionInPage = e.pageX;
  const bar = durationBars;
  //barStart from left
  const barStart = bar.getBoundingClientRect().left;
  const barWidth = bar.offsetWidth;

  //seconds per pixel
  const timePerPixel = duration() / barWidth;
  //how many pixels from barstart
  const clickedPixelsFromLeft = clickPositionInPage - barStart - 8;
  //calc new time
  const newTime = timePerPixel * clickedPixelsFromLeft;

  //return time only if in allowed range - keep handle in progress bar
  if (
    clickPositionInPage >= barStart &&
    clickPositionInPage < barStart + barWidth
  ) {
    return newTime;
  }
}

export type AudioTagType = {
  iswebcomponent?: boolean;
  customcss?: string;
  maxwidth?: string;
  url: string;
  text?: string; //text under player
  textcolor?: string; //text under player
  textcolordark?: string; //text under player
  alt?: string;
};

const AudioTag: Component<AudioTagType> = (props) => {
  const customCss = () => props?.customcss;

  const audioData = () => props.url;
  const mediaText = () => props.text;

  const maxWidth = (): JSX.CSSProperties =>
    props?.maxwidth && { "max-width": props.maxwidth };

  const alt = () => {
    return props.alt ? { "aria-label": props.alt } : {};
  };

  const [isPlaying, setIsPlaying] = createSignal<boolean>(false);
  const [currentTime, setCurrentTime] = createSignal<number>(0);
  const [duration, setDuration] = createSignal<number>(0);

  let audioRef;
  let durationBarsRef;

  const handlePlay = (): void => {
    audioRef.currentTime = currentTime();
    audioRef.play();
    setIsPlaying(true);
  };

  const handlePause = () => {
    audioRef.pause();
    setIsPlaying(false);
  };

  const handleDuration = () => {
    const { duration } = audioRef;
    setDuration(duration);
  };

  const handleTimeUpdated = () => {
    if (isPlaying() && audioRef.paused) audioRef.play();
    if (!isPlaying() && !audioRef.paused) audioRef.pause();
    setCurrentTime(audioRef.currentTime);
  };

  function secondsBeautifier(number: number) {
    let minutes = parseInt(number / 60);
    let seconds = parseInt(number % 60);
    seconds =
      seconds.toString().length > 1
        ? seconds.toString()
        : "0" + seconds.toString();
    if (isNaN(seconds)) seconds = "00";
    if (isNaN(minutes)) minutes = "0";
    return minutes + ":" + seconds;
  }

  return (
    <div
      class={styles.plusAudioPlayerContainer + " plusAudioPlayerContainer"}
      style={{
        ...maxWidth(),
      }}
    >
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdated}
        onEnded={handlePause}
        preload="metadata"
        onLoadedMetadata={handleDuration}
        style={{ "user-select": "none" }}
        {...alt()}
      >
        <source src={audioData()} type="audio/mpeg" />
        Selaimesi ei tue <code>ääni</code>-elementtiä.
      </audio>
      <div class={styles.plusAudioPlayerControls + " plusAudioPlayerControls"}>
        {
          <button
            class={
              styles.plusAudioPlayerPlayPause + " plusAudioPlayerPlayPause"
            }
            onClick={isPlaying() ? handlePause : handlePlay}
          >
            <svg
              class={styles.plusAudioPlayerSvg + " plusAudioPlayerSvg"}
              viewBox="0 0 24 24"
              height="24"
              width="24"
              fill="white"
            >
              {isPlaying() ? (
                <g>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13 4C13 3.44772 13.4477 3 14 3H18C18.5523 3 19 3.44772 19 4V20C19 20.5523 18.5523 21 18 21H14C13.4477 21 13 20.5523 13 20V4Z"
                    fill="#131415"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5 4C5 3.44772 5.44772 3 6 3H10C10.5523 3 11 3.44772 11 4V20C11 20.5523 10.5523 21 10 21H6C5.44772 21 5 20.5523 5 20V4Z"
                    fill="#131415"
                  />
                </g>
              ) : (
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.52081 2.12229C5.84189 1.947 6.23305 1.96101 6.54076 2.15882L20.5408 11.1588C20.827 11.3428 21 11.6597 21 12C21 12.3403 20.827 12.6572 20.5408 12.8412L6.54076 21.8412C6.23305 22.039 5.84189 22.053 5.52081 21.8777C5.19974 21.7024 5 21.3658 5 21V3C5 2.63419 5.19974 2.29758 5.52081 2.12229Z"
                  fill="#131415"
                />
              )}
            </svg>
          </button>
        }
        <p class={styles.plusAudioPlayerTime + " plusAudioPlayerTime"}>
          <span>{secondsBeautifier(currentTime())}</span> /{" "}
          <span>{secondsBeautifier(duration())}</span>
        </p>
        <div
          class={
            styles.plusAudioPlayerProgressBars + " plusAudioPlayerProgressBars"
          }
          ref={durationBarsRef}
        >
          <div
            class={
              styles.plusAudioPlayerProgressBarWhole +
              " plusAudioPlayerProgressBarWhole"
            }
          />
          <div
            class={
              styles.plusAudioPlayerProgressBarFilled +
              " plusAudioPlayerProgressBarFilled"
            }
            style={{
              width: (currentTime() / duration()) * 100 + "%",
            }}
          />
          <div
            class={
              styles.plusAudioPlayerProgressBarHandle +
              " plusAudioPlayerProgressBarHandle"
            }
            onMouseDown={(e) =>
              handleTimeDrag(
                e,
                audioRef,
                durationBarsRef,
                duration,
                setCurrentTime
              )
            }
            style={{
              left: (currentTime() / duration()) * 100 + "%",
            }}
          />
        </div>
      </div>
      <MediaCaption
        text={mediaText()}
        textColor={props?.textcolor}
        textColorDark={props?.textcolordark}
        iswebcomponent={props?.iswebcomponent}
      />
      <Show when={props?.iswebcomponent}>
        <StylesForWebcomponent css={cssStyle} customCss={customCss()} />
      </Show>
    </div>
  );
};

export default AudioTag;
