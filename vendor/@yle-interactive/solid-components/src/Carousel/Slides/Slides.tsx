import PictureTag from "../../FeatureMediaContainers/Picture/PictureTag";
import VideoTag from "../../FeatureMediaContainers/Video/VideoTag";
import { For, Show } from "solid-js";
import { ImageType, VideoType } from "../../Types/MediaTypes";
import StylesForWebcomponent from "../../../helpers/StylesForWebcomponent";
import style from "./Slides.module.css";
import * as cssStyle from "./Slides.module.css?inline";

type SlidesProps = {
  currentSlide: number;
  slideWidth: string;
  slideHeight: string;
  slides: ImageType[] | VideoType[];
  iswebcomponent?: boolean;
};

const MediaType = (props) =>
  props.slide.type === "image" ? (
    <PictureTag
      showmedia={true}
      relative={false}
      draggable={false}
      iswebcomponent={props?.iswebcomponent}
      {...props.slide}
    />
  ) : (
    <VideoTag
      showmedia={true}
      relative={false}
      draggable={false}
      allowplay={props.index() === props.currentSlide}
      iswebcomponent={props?.iswebcomponent}
      {...props.slide}
    />
  );

const defaultTransform = () => "translateX(-50%) perspective(1000px)";
const build3dTransform = (x, z) => `translate3d(${x}px, 0, ${z}px)`;
const xPos = (currentSlide, slideWidth, index) =>
  (currentSlide - index()) * -(parseInt(slideWidth) + 0);
const zPos = (currentSlide, index) => (index() === currentSlide ? 0 : -200);

const Slides = (props: SlidesProps) => {
  return (
    <ul style={{ all: "unset" }}>
      <For each={props.slides}>
        {(slide, index) => {
          return (
            <li
              class={[
                style["slide-container"],
                props.currentSlide === index()
                  ? style["slide-container-active"] + " current slide-container"
                  : style["slide-container-inactive"] +
                    " non-current slide-container",
              ].join(" ")}
              draggable={false}
              style={{
                width: props.slideWidth,
                height: props.slideHeight,
                transform:
                  defaultTransform() +
                  " " +
                  build3dTransform(
                    xPos(props.currentSlide, props.slideWidth, index),
                    zPos(props.currentSlide, index)
                  ),
              }}
            >
              <MediaType
                slide={slide}
                currentSlide={props.currentSlide}
                index={index}
                iswebcomponent={props?.iswebcomponent}
              />
            </li>
          );
        }}
      </For>
      <Show when={props?.iswebcomponent}>
        <StylesForWebcomponent tag="CarouselSlides" css={cssStyle} />
      </Show>
    </ul>
  );
};

export default Slides;
