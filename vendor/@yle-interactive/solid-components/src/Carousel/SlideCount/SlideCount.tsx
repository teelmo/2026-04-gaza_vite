import { For, Show, Component, type JSX } from "solid-js";
import { ImageType, VideoType } from "../../Types/MediaTypes";
import style from "./SlideCount.module.css";
import * as cssStyle from "./SlideCount.module.css?inline";
import StylesForWebcomponent from "../../../helpers/StylesForWebcomponent";
import { usePrefersDark } from "@solid-primitives/media";

type SlideCountType = {
  newSlide: (val: number, type: string) => void;
  currentSlide: Number;
  slides: Array<ImageType | VideoType>;
  circlecolor?: String;
  circlecolordark?: String;
  iswebcomponent?: boolean;
};

const SlideCount: Component<SlideCountType> = (props) => {
  const prefersDark = usePrefersDark();

  const ballColor = (): JSX.CSSProperties =>
    prefersDark() && props?.circlecolordark
      ? { "background-color": props.circlecolordark as string }
      : !prefersDark() && props?.circlecolor
      ? { "background-color": props.circlecolor as string }
      : {};

  const isCurrentSlide = (index) => index === props.currentSlide;

  return (
    <ul class={style["slide-count"] + " slide-count"}>
      <For each={props.slides}>
        {(image, index) => {
          return (
            <li>
              <button
                class={
                  isCurrentSlide(index())
                    ? style["slide-ball"] + " slide-ball current"
                    : style["slide-ball"] + " slide-ball"
                }
                style={{
                  opacity: isCurrentSlide(index()) ? "0.7" : "0.29",
                  ...ballColor(),
                }}
                onClick={() => props.newSlide(index(), "slideIndex")}
              />
            </li>
          );
        }}
      </For>
      <Show when={props?.iswebcomponent}>
        <StylesForWebcomponent tag="CarouselSlideCount" css={cssStyle} />
      </Show>
    </ul>
  );
};

export default SlideCount;
