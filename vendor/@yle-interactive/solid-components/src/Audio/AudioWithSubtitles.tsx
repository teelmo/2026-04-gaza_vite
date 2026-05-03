import {
  type JSX,
  Switch,
  Match,
  createSignal,
  For,
  Component,
  onMount,
  Show,
  batch,
} from "solid-js";
import PictureTag from "../FeatureMediaContainers/Picture/PictureTag";
import VideoTag from "../FeatureMediaContainers/Video/VideoTag";
import styles from "./AudioWithSubtitles.module.css";
import * as cssStyle from "./AudioWithSubtitles.module.css?inline";

import Pause from "./Icons/Pause";
import Play from "./Icons/Play";
import { ImageType, VideoType } from "../Types/MediaTypes";
import StylesForWebcomponent from "../../helpers/StylesForWebcomponent";

import { usePrefersDark } from "@solid-primitives/media";
import { formatMediaDuration } from "../../helpers/mediaLength";

type audioText = {
  end: number; //time when to stop showing this as highlighted piece
  text: string; //text to highlight
};

export type AudioWithSubtitlesType = {
  iswebcomponent?: boolean; //should add styles inside shadow root?
  customcss: string; //input css as text variable
  buttonbackgroundcolor?: string; //background behind play pause icon
  iconcolor?: string; //play pause icon
  maxwidth?: string; //div max-width
  media?: ImageType | VideoType | {}; //image of person talking - empty obj as default in webcomponent
  textnegative?: string; //text that is not highlighted
  textnegativedark?: string; //text that is not highlighted
  textpositive?: string; //text that is highlighted
  textpositivedark?: string; //text that is highlighted
  textfadebackground?: string; //depending on background color of article adjust the rgba values
  textfadebackgrounddark?: string; //support for darkmode
  audiodurationtext?: string;
  texts: audioText[]; //texts which are shown
  title?: string; //guide how to use audio component
  url: string; //mp3 file location
};

const AudioWithSubtitles: Component<AudioWithSubtitlesType> = (props) => {
  //control audio tag
  let audioRef,
    //control position of subtitles
    paragraphRef;

  const prefersDark = usePrefersDark();

  const maxWidth = () => props.maxwidth || "600px";
  const buttonBackground = () =>
    props?.buttonbackgroundcolor
      ? { "background-color": props?.buttonbackgroundcolor }
      : {};
  const iconColor = () => (props?.iconcolor ? { fill: props?.iconcolor } : {});
  const textFadeBackground = () =>
    prefersDark() && props?.textfadebackgrounddark
      ? props.textfadebackgrounddark
      : !prefersDark() && props?.textfadebackground
      ? props.textfadebackground
      : prefersDark() && !props?.textfadebackgrounddark
      ? "rgb(19, 20, 21) 0%, rgba(19, 20, 21, 0) 100%"
      : "rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%";

  const textNegative = (): JSX.CSSProperties =>
    prefersDark() && props?.textnegativedark
      ? { color: props.textnegativedark }
      : !prefersDark() && props?.textnegative
      ? { color: props.textnegative }
      : {};

  const textPositive = (): JSX.CSSProperties =>
    prefersDark() && props?.textpositivedark
      ? { color: props.textpositivedark }
      : !prefersDark() && props?.textpositive
      ? { color: props.textpositive }
      : {};

  const audioDurationText = () =>
    props?.audiodurationtext ? { color: props.audiodurationtext } : undefined;

  const customCss = () => props?.customcss;

  const [isPlaying, setIsPlaying] = createSignal(false);

  const subtitlePositions = () => {
    //set subtitles positions
    const paragraphHeight = paragraphRef.offsetHeight;
    let top = 0;
    const children = Array.from(paragraphRef.querySelectorAll("span")).map(
      (d: HTMLElement) => {
        const pos = paragraphHeight / 2 - (d.offsetTop + d.offsetHeight / 2);
        top = d.offsetHeight + top;
        return pos;
      }
    );
    return children;
  };

  const [activePhrase, setActivePhrase] = createSignal(undefined);
  const [activePhrasePos, setActivePhrasePos] = createSignal(undefined);

  const [audioDuration, setAudioDuration] = createSignal(undefined);
  const [audioCurrentTime, setAudioCurrentTime] = createSignal("0:00");
  onMount(() =>
    setTimeout(
      () =>
        batch(() => {
          setActivePhrasePos(subtitlePositions());
          setActivePhrase(0);
        }),
      0
    )
  );

  return (
    <figure
      class={
        styles.audioWithSubtitlesContainer + " audioWithSubtitlesContainer"
      }
      style={{ "max-width": maxWidth() }}
    >
      <Show when={props.iswebcomponent}>
        <StylesForWebcomponent css={cssStyle} customCss={customCss()} />
      </Show>
      <figcaption>
        <h2>{props?.title}</h2>
      </figcaption>
      <div
        class={
          styles.audioWithSubtitlesContentContainer +
          " audioWithSubtitlesContentContainer"
        }
      >
        <div
          class={
            styles.audioWithSubtitlesPersonContainer +
            " audioWithSubtitlesPersonContainer"
          }
        >
          <div
            class={
              styles.plusButtonAndMediaContainer +
              " plusButtonAndMediaContainer"
            }
          >
            <Switch fallback={<div></div>}>
              <Match when={props?.media?.type === "image"}>
                <PictureTag
                  iswebcomponent={props?.iswebcomponent}
                  relative
                  {...props.media}
                />
              </Match>
              <Match when={props?.media?.type === "video"}>
                <VideoTag
                  iswebcomponent={props?.iswebcomponent}
                  {...props.media}
                />
              </Match>
            </Switch>
            <button
              onClick={() => {
                setIsPlaying(!isPlaying());
                !isPlaying() ? audioRef.pause() : audioRef.play();
              }}
              aria-label={!isPlaying() ? "play" : "pause"}
              style={buttonBackground()}
              class={styles.plusAudioPlayerButton + " plusAudioPlayerButton"}
            >
              <Switch>
                <Match when={isPlaying()}>
                  <Pause fill={iconColor()} />
                </Match>
                <Match when={!isPlaying()}>
                  <Play fill={iconColor()} />
                </Match>
              </Switch>
            </button>
            <Show when={audioCurrentTime() && audioDuration()}>
              <time
                style={audioDurationText()}
                class={styles.plusAudioPlayerTime + " plusAudioPlayerTime"}
              >
                <span>{audioCurrentTime()}</span>/<span>{audioDuration()}</span>
              </time>
            </Show>
          </div>
        </div>
        <div class={styles.plusAudioBlock + " plusAudioBlock"}>
          <div
            class={
              styles.plusAudioPlayerWithSubtitles +
              " plusAudioPlayerWithSubtitles"
            }
          >
            <audio
              ref={audioRef}
              onTimeUpdate={(e: Event) => {
                const audio = e?.currentTarget as HTMLAudioElement;

                const currentTime = audio?.currentTime;
                if (currentTime) {
                  const currentPhrase = props.texts.filter(
                    (t) => Number(t.end) > currentTime
                  )?.[0];
                  const index = props.texts.indexOf(currentPhrase);

                  setActivePhrase(index);
                  setAudioCurrentTime(formatMediaDuration(currentTime));
                }
              }}
              onLoadedMetadata={(e: Event) => {
                const audio = e.currentTarget as HTMLAudioElement;
                const seconds = audio.duration;
                setAudioDuration(formatMediaDuration(seconds));
              }}
              onEnded={(e: Event) => {
                setIsPlaying(false);
                const audio = e.currentTarget as HTMLAudioElement;

                audio.currentTime = 0;
              }}
              preload="auto"
            >
              <source src={props?.url} type="audio/mpeg" />
            </audio>
            <div
              ref={paragraphRef}
              class={
                styles.plusAudioCaptionParagraphContainer +
                " plusAudioCaptionParagraphContainer"
              }
            >
              <div
                class={
                  styles.plusAudioCaptionParagraphFade +
                  " plusAudioCaptionParagraphFade"
                }
                style={{
                  top: "0",
                  background: "linear-gradient(" + textFadeBackground() + ")",
                }}
              />
              <div
                class={
                  styles.plusAudioCaptionParagraphFade +
                  " plusAudioCaptionParagraphFade"
                }
                style={{
                  bottom: "0",
                  background:
                    "linear-gradient(0deg, " + textFadeBackground() + ")",
                }}
              />
              <p
                class={
                  styles.plusAudioCaptionParagraph +
                  " plusAudioCaptionParagraph"
                }
                style={
                  !isPlaying() && activePhrase() === undefined
                    ? {
                        top: "50%",
                        transform: "translateY(-50%)",
                      }
                    : {
                        top: activePhrasePos()[activePhrase()] + "px",
                      }
                }
              >
                <For each={props?.texts}>
                  {(t, i) => {
                    const text = i() === 0 ? t.text : " " + t.text;
                    return (
                      <Switch>
                        <Match when={activePhrase() !== i()}>
                          <span
                            class={
                              styles.audioPlayerTextNegative +
                              " audioPlayerTextNegative"
                            }
                            style={textNegative()}
                          >
                            {text}
                          </span>
                        </Match>
                        <Match when={activePhrase() === i()}>
                          <span
                            class={
                              styles.audioPlayerTextPositive +
                              " audioPlayerTextPositive"
                            }
                            style={textPositive()}
                          >
                            {text}
                          </span>
                        </Match>
                      </Switch>
                    );
                  }}
                </For>
              </p>
            </div>
          </div>
        </div>
      </div>
    </figure>
  );
};

export default AudioWithSubtitles;
