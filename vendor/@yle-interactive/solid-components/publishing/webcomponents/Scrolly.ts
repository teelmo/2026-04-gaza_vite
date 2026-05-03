import Scrolly, {
  ScrollyType,
  ScrollyItemImage,
  ScrollyItemVideo,
} from "~/Scrolly/Scrolly";
import { customElement } from "solid-element";

const webComponent = customElement(
  "scrolly-template",
  {
    scrollyitems: [] as ScrollyItemImage[] | ScrollyItemVideo[],
    iswebcomponent: true,
    customcss: undefined,
  } as ScrollyType,
  Scrolly
);

export { webComponent };
