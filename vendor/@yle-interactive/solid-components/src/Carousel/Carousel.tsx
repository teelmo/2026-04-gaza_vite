import { createSignal, Show } from "solid-js";
import Controls from "./Controls/Controls";
import SlideCount from "./SlideCount/SlideCount";
import Slides from "./Slides/Slides";
import { type ImageType, type VideoType } from "../Types/MediaTypes";
import styles from "./Carousel.module.css";
import * as cssStyle from "./Carousel.module.css?inline";
import StylesForWebcomponent from "../../helpers/StylesForWebcomponent";

export type CarouselType = {
  iswebcomponent?: boolean;
  customcss?: string;
  slideheight?: string; //height of carousel element
  slidewidth?: string; //width of carousel element
  carouselmaxwidth?: string; //max width of carousel element, slides peak from left and right side
  circlecolor?: string; //color of circle indicator
  circlecolordark?: string; //color of circle indicator when dark mode is on
  arrowcolor?: string; //color of arrow indicator
  arrowbackground?: string; //color of arrow background
  slides: ImageType[] | VideoType[]; //array of slides including image & video objects
};

const Carousel = (props: CarouselType) => {
  const customCss = () => props?.customcss;

  const slideHeight = () => props?.slideheight || "480px";
  const slideWidth = () => props?.slidewidth || "360px";
  const slideMaxWidth = () => props?.carouselmaxwidth || "800px";
  const [currentSlide, setCurrentSlide] = createSignal(0);

  const returnNewSlide = (val: number, type: string): void => {
    //SlideCount
    if (type === "slideIndex") setCurrentSlide(val);
    //Controls on zero
    else if (currentSlide() === 0 && val < 0)
      setCurrentSlide(props.slides.length - 1);
    //Controls on last
    else if (currentSlide() === props.slides.length - 1 && val > 0)
      setCurrentSlide(0);
    //Controls on other
    else setCurrentSlide(currentSlide() + val);
  };

  return (
    <section>
      <div
        class={styles["carousel-container"] + " carousel-container"}
        style={{
          height: `calc(${slideHeight()} + 16px)`,
          "max-width": slideMaxWidth(),
        }}
      >
        <Slides
          currentSlide={currentSlide()}
          slideWidth={slideWidth()}
          slideHeight={slideHeight()}
          slides={props.slides}
          iswebcomponent={props?.iswebcomponent}
        />
        <Controls
          newSlide={returnNewSlide}
          arrowcolor={props.arrowcolor}
          arrowbackground={props.arrowbackground}
          iswebcomponent={props?.iswebcomponent}
        />
      </div>
      <SlideCount
        //newSlide={returnNewSlide}
        currentSlide={currentSlide()}
        slides={props.slides}
        circlecolor={props.circlecolor}
        circlecolordark={props.circlecolordark}
        iswebcomponent={props?.iswebcomponent}
      />
      <Show when={props?.iswebcomponent}>
        <StylesForWebcomponent
          tag="Carousel"
          css={cssStyle}
          customCss={customCss()}
        />
      </Show>
    </section>
  );
};

export default Carousel;
