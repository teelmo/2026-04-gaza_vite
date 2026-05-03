import snarkdown from "@yle-interactive/js-helperfunctions/yleSnarkdown";
import { type JSX, Show } from "solid-js";
import { createPrefersDark } from "@solid-primitives/media";
import styles from "./Authors.module.css";
import * as cssStyle from "./Authors.module.css?inline";
import StylesForWebcomponent from "../../../helpers/StylesForWebcomponent";

const Authors = (props) => {
  const prefersDark = createPrefersDark();
  const cssModule = () => (props.nostyles ? {} : styles);

  const textColor = (): JSX.CSSProperties =>
    prefersDark() && props?.textcolordark
      ? { color: props?.textcolordark }
      : !prefersDark() && props?.textcolor
      ? { color: props.textcolor }
      : {};

  const authors = () => (props.authors ? snarkdown(props.authors) : "");

  return (
    <>
      <p
        style={{ ...textColor() }}
        class={cssModule().headerAuthors + " headerAuthors"}
        innerHTML={authors()}
      />
      <Show when={props?.iswebcomponent}>
        <StylesForWebcomponent tag="HeaderAuthors" css={cssStyle} />
      </Show>
    </>
  );
};

export default Authors;
