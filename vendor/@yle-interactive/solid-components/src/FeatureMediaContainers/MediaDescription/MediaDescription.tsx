import snarkdown from "@yle-interactive/js-helperfunctions/yleSnarkdown";
import DescriptionStyle from "./MediaDescription.module.css";
import * as cssStyle from "./MediaDescription.module.css?inline";
import { Show, type JSX } from "solid-js";
import StylesForWebcomponent from "../../../helpers/StylesForWebcomponent";

export default function MediaDescription(props) {
  const { mediaDescription, header } = props;
  const color: JSX.CSSProperties = mediaDescription?.textcolor
    ? { color: mediaDescription?.textcolor }
    : {};

  const cssModule = () => (props.nostyles ? {} : DescriptionStyle);

  const content = () =>
    mediaDescription?.content ? snarkdown(mediaDescription?.content) : "";

  return (
    <Show when={mediaDescription?.content}>
      <p
        id={mediaDescription.id}
        style={{
          ...color,
          "background-color":
            mediaDescription?.backgroundcolor || "transparent",
        }}
        class={
          header
            ? cssModule().mediaDescriptionHeader + " mediaDesciptionHeader"
            : cssModule().mediaDescription + " mediaDescription"
        }
        innerHTML={content()}
      />
      <Show when={props?.iswebcomponent}>
        <StylesForWebcomponent tag="VideoPlay" css={cssStyle} />
      </Show>
    </Show>
  );
}
