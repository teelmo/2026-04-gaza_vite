import style from "./Published.module.css";
import * as cssStyle from "./Published.module.css?inline";
import StylesForWebcomponent from "../../../helpers/StylesForWebcomponent";

import { HeaderTextObjectType } from "../HeaderType";
import { createPrefersDark } from "@solid-primitives/media";
import { type JSX, Show, Component } from "solid-js";

const Published: Component<HeaderTextObjectType> = (props) => {
  const timeText = () => props.time;
  const prefersDark = createPrefersDark();
  const cssModule = () => (props.nostyles ? {} : style);

  const textColor = (): JSX.CSSProperties =>
    prefersDark() && props?.textcolordark
      ? { color: props?.textcolordark }
      : !prefersDark() && props?.textcolor
      ? { color: props.textcolor }
      : {};

  return (
    <div
      style={{ ...textColor() }}
      class={cssModule().publishedTime + " publishedTime"}
    >
      <time>{timeText()}</time>
      <Show when={props?.iswebcomponent}>
        <StylesForWebcomponent tag="HeaderPublished" css={cssStyle} />
      </Show>
    </div>
  );
};

export default Published;
