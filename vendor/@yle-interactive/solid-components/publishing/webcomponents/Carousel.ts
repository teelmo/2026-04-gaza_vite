import { customElement } from "solid-element";
import Carousel from "~/Carousel/Carousel";
import { CarouselType } from "~/Carousel/Carousel";
import { ImageType, VideoType } from "~/Types/MediaTypes";
const webComponent = customElement(
  "carousel-template",
  {
    iswebcomponent: true,
    customcss: undefined,
    carouselmaxwidth: undefined,
    arrowcolor: undefined,
    circlecolor: undefined,
    circlecolordark: undefined,
    slides: [] as ImageType[] | VideoType[],
    slidewidth: undefined,
    slideheight: undefined,
  } as CarouselType,
  Carousel
);

export { webComponent };
