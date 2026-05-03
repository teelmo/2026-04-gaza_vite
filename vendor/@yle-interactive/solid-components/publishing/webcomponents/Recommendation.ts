import Recommendation, {
  RecommendationType,
} from "~/Recommendation/Recommendation";
import { customElement } from "solid-element";

const webComponent = customElement(
  "recommendation-template",
  {
    data: [],
    customcss: undefined,
    iswebcomponent: true,
    textcolor: undefined,
    textcolordark: undefined,
    title: "Lue lisää",
    wideimages: false,
  } as RecommendationType,
  Recommendation
);

export { webComponent };
