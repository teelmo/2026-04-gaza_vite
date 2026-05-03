import style from "./Controls.module.css";
import * as cssStyle from "./Controls.module.css?inline";

import { Show, createSignal } from "solid-js";
import StylesForWebcomponent from "../../../helpers/StylesForWebcomponent";

const ChevronLeft = (props) => {
  const arrowColor = () => props.arrowColor;
  const animate = () => props.animate;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="#000000"
      viewBox="0 0 24 24"
      class={animate() ? style.animate : ""}
    >
      <path
        fill={arrowColor()}
        fill-rule="evenodd"
        d="M15.707 5.293a1 1 0 010 1.414L10.414 12l5.293 5.293a1 1 0 01-1.414 1.414l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 0z"
        clip-rule="evenodd"
      />
    </svg>
  );
};

const ChevronRight = (props) => {
  const arrowColor = () => props.arrowColor;
  const animate = () => props.animate;
  //createEffect(() => console.log(animate()));
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="#000000"
      viewBox="0 0 24 24"
      class={animate() ? style.animate : ""}
    >
      <path
        fill={arrowColor()}
        fillRule="evenodd"
        d="M8.293 5.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L13.586 12 8.293 6.707a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};

type ControlsProps = {
  arrowcolor?: string;
  arrowbackground?: string;
  iswebcomponent?: boolean;
  newSlide: (val: number, type?: string | undefined) => void; //call new slide from parent component //call new slide from parent component
};

const Controls = (props: ControlsProps) => {
  const [animateArrows, setAnimateArrows] = createSignal(true);

  const arrowColor = () => props.arrowcolor || "#000";
  const arrowBackground = () =>
    props.arrowbackground || "rgba(255,255,255,0.5)";
  return (
    <ul class={style["carousel-controls"] + " carousel-controls"}>
      <button
        aria-label="Näytä edellinen media"
        style={{
          left: "16px",
          background: arrowBackground(),
        }}
        onClick={() => {
          //no animation guide
          setAnimateArrows(false);
          //show one left
          props.newSlide(-1);
        }}
      >
        <ChevronLeft animate={animateArrows()} arrowColor={arrowColor()} />
      </button>
      <button
        aria-label="Näytä seuraava media"
        style={{
          right: "16px",
          background: arrowBackground(),
        }}
        onClick={() => {
          //no animation guide
          setAnimateArrows(false);
          //show one right
          props.newSlide(1);
        }}
      >
        <ChevronRight animate={animateArrows()} arrowColor={arrowColor()} />
      </button>
      <Show when={props?.iswebcomponent}>
        <StylesForWebcomponent tag="CarouselControls" css={cssStyle} />
      </Show>
    </ul>
  );
};

export default Controls;
