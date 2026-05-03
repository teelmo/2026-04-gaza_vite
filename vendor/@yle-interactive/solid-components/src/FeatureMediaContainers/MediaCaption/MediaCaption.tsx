import { type JSX, Show } from "solid-js";
import styles from "./MediaCaption.module.css";
import * as cssStyle from "./MediaCaption.module.css?inline";
import StylesForWebcomponent from "../../../helpers/StylesForWebcomponent";

import { createPrefersDark } from "@solid-primitives/media";

export default function MediaCaption(props) {
  const prefersDark = createPrefersDark();

  const text = (): string => props.text || "";

  const textColor = (): JSX.CSSProperties =>
    prefersDark() && props?.textColorDark
      ? { color: props.textColorDark }
      : !prefersDark() && props?.textColor
      ? { color: props?.textColor }
      : {};

  return (
    <>
      <figcaption class={styles.mediaCaption} style={textColor()}>
        {text()}
      </figcaption>
      <Show when={props?.iswebcomponent}>
        <StylesForWebcomponent tag="VideoPlay" css={cssStyle} />
      </Show>
    </>
  );
}
